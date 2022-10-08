import { useRouter } from 'next/router';
import {
  Container,
  Title,
  Center,
  Card,
  Paper,
  Button,
  TextInput,
  Checkbox,
  Group,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import type { NextPage } from 'next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PostgrestResponse } from '@supabase/postgrest-js/dist/module/types';
import { supabase } from '../../../utils/supabaseClient';
import { definitions } from '../../../types/supabase';

const CreateGroup: NextPage = () => {
  // Once submitted data is stored in this state
  type Group = definitions['groups'];
  const router = useRouter();
  const { groupid } = router.query;
  type Members = {
    members?: string[] | undefined;
  };
  async function fetchMembers(): Promise<Members | null> {
    const response: PostgrestResponse<Members> = await supabase.from<'groups', Members>('groups').select('members').eq('groupid', groupid);
    if (response.data != null) {
      return response.data[0];
    }
    return null;
  }

  async function updateTable(values: { name: string }) {
    let memberlist: string[] | Members;
    if (await fetchMembers() != null) {
      memberlist = await fetchMembers();
      memberlist = memberlist.members;
      console.log(memberlist);
      const updatemember = memberlist.pop();
      memberlist.push(`${updatemember}, `);
      console.log(memberlist);
    } else {
      memberlist = new Array<string>();
    }
    memberlist.push(values.name);
    console.log(memberlist);
    await supabase
      .from<'groups', Group>('groups')
      .update<Members>({ members: memberlist })
      .eq('groupid', groupid);
    router.push('/');
  }
  // useForm hook handles form state and validation
  const form = useForm({
    initialValues: {
      name: '',
    },
  });

  return (
        <>
            <Container>
                <Center>
                    <Title>Join group</Title>
                </Center>
                <Card radius="md" shadow="sm" p="md" mt="lg">
                    <Paper>
                      <Text mb="lg">Enter your name to join a group.</Text>
                            <form onSubmit={form.onSubmit((values) => { updateTable(values); })}>
                                <TextInput
                                  label="Your Name"
                                  withAsterisk
                                  size="lg"
                                  placeholder="John Doe"
                                  {...form.getInputProps('name')}
                                />
                                <Group position="center" mt="lg">
                                    <Button size="lg" type="submit">Submit</Button>
                                </Group>
                            </form>
                    </Paper>
                </Card>
            </Container>
        </>
  );
};

export default CreateGroup;
