import { useState, useEffect } from 'react';
import { Table, Center, Loader } from '@mantine/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PostgrestResponse } from '@supabase/postgrest-js/src';
import { supabase } from '../utils/supabaseClient';
import { definitions } from '../types/supabase';
import NextButton from './NextButton';

export default function GroupTable() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

    type Group = definitions['groups'];

    useEffect(() => {
      async function fetchGroups(): Promise<Group[]> {
        const response: PostgrestResponse<Group> = await supabase.from<'groups', Group>('groups').select().eq('public', true);
        if (response.data != null) {
          return response.data;
        }

        return [];
      }
      fetchGroups().then((data) => { setGroups(data); });
      setLoading(false);
    }, []);

    if (loading) {
      return (
            <Center><Loader size="xl" /></Center>
      );
    }

    return (
        <Table striped highlightOnHover withColumnBorders>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Members</th>
                    <th>Join</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((element) => (
                    <tr key={element.id}>
                        <td>{element.name}</td>
                        <td>{element.members}</td>
                        <td>
                            <NextButton color="green" size="xs" title="Join Group" href={`/Groups/JoinPublic/${element.groupid}`} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
