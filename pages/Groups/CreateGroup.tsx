import React, { useState } from 'react';
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
  SimpleGrid,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import type { NextPage } from 'next';
import { DragDropContext, Droppable, Draggable, resetServerContext } from 'react-beautiful-dnd';
import { IconGripVertical } from '@tabler/icons';
import { useQRCode } from 'next-qrcode';
import { definitions } from '../../types/supabase';
import NextButton from '../../components/NextButton';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { userAgent } from 'next/server';

const CreateGroup: NextPage = () => {
  const [notPrivate, setPrivate] = useState<boolean>(true);
  const [Data, setData] = useState<string>('s');
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { Canvas } = useQRCode();
  const user = useUser();
  type Group = definitions['groups'];

  async function insertTable(values: {
    groupName: string;
    public: boolean;
    users: {
      name: string;
      email: string;
    }[];
  }) {
    const memberList = new Array<String>();
    const emailList = new Array<String>();

    values.users.forEach((element, index) => {
      if (index < values.users.length - 1) {
        memberList.push(`${element.name}, `);
      } else {
        memberList.push(`${element.name}`);
      }
    });

    values.users.forEach((element, index) => {
      emailList.push(`${element.email}`);
    });

    const data = await supabase.from<'groups', Group>('groups').insert([
      // @ts-ignore
      { name: values.groupName, public: values.public, members: memberList, emails: emailList },
    ]);
    if (values.public) {
      router.push('/');
    } else {
      const data2 = await supabase
        .from<'groups', Group>('groups')
        .select('groupid')
        .eq('name', `${values.groupName}`)
        .eq('public', 'false');
      setPrivate(false); // @ts-ignore
      setData(data2.data[0].groupid);
    }
  }

  var formatted;
  if (user == null) {
    formatted = "email@email.com";
  }
  else {
    formatted = user.email;
  }

  const form = useForm({
    initialValues: {
        groupName: "",
        public: true,
        users: [{
          name: "john doe",
          email: formatted,
        }],
    },
  });

  const fields = form.values.users.map((name, index) => {
    return(
    <SimpleGrid key={index} cols={2}>
      <TextInput
        placeholder="John Doe"
        required
        {...form.getInputProps(`users.${index}.name`)}
      />
      <TextInput placeholder="email" required {...form.getInputProps(`users.${index}.email`)} />
    </SimpleGrid>
  )});

  return (
    <>
      <Container>
        <Center>
          <Title>Create Group</Title>
        </Center>
        <Card radius="md" shadow="sm" p="md" mt="lg">
          <Paper>
            <Text mb="lg">
              Enter all applicable information for your group, then click Submit and you will be
              given your access code to invite your fellow members.
            </Text>
            <form
              onSubmit={form.onSubmit((values) => {
                insertTable(values);
              })}
            >
              <TextInput
                label="Group Name"
                withAsterisk
                placeholder="Lottery Winners!"
                size="md"
                description="This is the name of your group"
                {...form.getInputProps('groupName')}
              />
              <Checkbox
                pt="lg"
                size="md"
                mt="lg"
                {...form.getInputProps('public', { type: 'checkbox' })}
                label="Public Group?"
              />
              {fields}

              <Group position="left" mt="md" ml="xl">
                <Button
                  size="sm"
                  onClick={() => {
                    form.insertListItem('users', { name: 'John Doe', email: 'email' });
                  }}
                >
                  Add Member
                </Button>
              </Group>
              <Group position="center" mt="md">
                <Button size="lg" type="submit">
                  Submit
                </Button>
              </Group>
            </form>
          </Paper>
        </Card>
        {notPrivate ? null : (
          <Card hidden={notPrivate} radius="md" shadow="sm" p="md" mt="lg">
            <Paper>
              <Center>
                <SimpleGrid cols={1}>
                  <Center>
                    {' '}
                    <Text mb="lg">
                      Your group has been created and is private. You can invite your members by
                      sharing this access code with them.
                    </Text>
                  </Center>
                  <Center>
                    <Title size="xl">Access Code:</Title>
                  </Center>
                  <Center>
                    <Title mb="md" size="sm">{`${Data}`}</Title>
                  </Center>
                  <Center>
                    <Canvas
                      text={`http://jaycamper.com/Groups/Private/${Data}`}
                      options={{
                        type: 'image/jpeg',
                        quality: 0.3,
                        level: 'M',
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                          dark: '#000000FF',
                          light: '#FFFFFFFF',
                        },
                      }}
                    />
                  </Center>
                  <Center>
                    {' '}
                    <NextButton size="lg" href="/" title="Return Home" />{' '}
                  </Center>
                </SimpleGrid>
              </Center>
            </Paper>
          </Card>
        )}
      </Container>
    </>
  );
};

export default CreateGroup;
