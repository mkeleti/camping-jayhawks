import { useState, useEffect } from 'react';
import { Table, Center, Loader } from '@mantine/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { definitions } from '../types/supabase';
import NextButton from './NextButton';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function GroupTable() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const supabase = useSupabaseClient();

  type Group = definitions['groups'];

  useEffect(() => {
    async function fetchGroups(): Promise<Group[]> {
      const response = await supabase.from<'groups', Group>('groups').select().eq('public', true);
      if (Array.isArray(response.data) && response.data != null) {
        return response.data;
      }

      return [];
    }
    fetchGroups().then((data) => {
      setGroups(data);
    });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Center>
        <Loader size="xl" />
      </Center>
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
              {!user ? (
                <NextButton
                  disabled
                  color="green"
                  size="xs"
                  title="Join Group"
                  href={`/Groups/Public/${element.groupid}`}
                />
              ) : (
                <NextButton
                  color="green"
                  size="xs"
                  title="Join Group"
                  href={`/Groups/Public/${element.groupid}`}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
