import { useRouter } from 'next/router';
import {
  Container,
  Title,
  Center,
  Card,
  Paper,
  Button,
  TextInput,
  Group,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import type { NextPage } from 'next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { definitions } from '../../../types/supabase';

const PublicJoin: NextPage = () => {
  // Once submitted data is stored in this state
  type Group = definitions['groups'];
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { groupid } = router.query;
  const user = useUser();
  type Members = {
    pop(): string;
    push(arg0: string): unknown;
    members?: string[] | unknown;
  };
  async function fetchMembers(): Promise<Members | null> {
    const response = await supabase
      .from<'groups', Group>('groups')
      .select('members')
      .eq('groupid', groupid);
    if (response.data != null) {
      // @ts-ignore
      return response.data[0];
    }
    return null;
  }

  async function fetchEmails(): Promise<string[] | null> {
    const response = await supabase
      .from<'groups', Group>('groups')
      .select('emails')
      .eq('groupid', groupid);
    if (response.data != null) {
      // @ts-ignore
      return response.data[0];
    }
    return null;
  }

  async function updateTable(values: { name: string }) {
    let memberlist;
    let emaillist;
    if ((await fetchMembers()).members != null) {
      memberlist = await fetchMembers();
      memberlist = memberlist.members;
      const updatemember = memberlist.pop();
      memberlist.push(`${updatemember}, `);
    } else {
      memberlist = new Array<string>();
    }

    if ((await fetchEmails()).emails != null) {
      emaillist = await fetchEmails();
      emaillist = emaillist.emails;
      console.log('1');
    } else {
      emaillist = new Array<string>();
      console.log('2');
    }
    console.log(emaillist);
    let push = true;
    memberlist.push(values.name);
    for (let i = 0; i < emaillist.length; i += 1) {
      if (user.email === emaillist[i]) {
        push = false;
      }
    }
    if (push) {
      emaillist.push(user.email);
    }
    await supabase
      .from<'groups', Group>('groups')
      // @ts-ignore
      .update({ members: memberlist })
      .eq('groupid', groupid);

    await supabase
      .from<'groups', Group>('groups')
      // @ts-ignore
      .update({ emails: emaillist })
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
          <Title>Join Public Group</Title>
        </Center>
        <Card radius="md" shadow="sm" p="md" mt="lg">
          <Paper>
            <Text mb="lg">Enter your name to join the public group.</Text>
            <form
              onSubmit={form.onSubmit((values) => {
                updateTable(values);
              })}
            >
              <TextInput
                label="Your Name"
                withAsterisk
                size="lg"
                placeholder="John Doe"
                {...form.getInputProps('name')}
              />
              <Group position="center" mt="lg">
                <Button size="lg" type="submit">
                  Submit
                </Button>
              </Group>
            </form>
          </Paper>
        </Card>
      </Container>
    </>
  );
};

export default PublicJoin;
