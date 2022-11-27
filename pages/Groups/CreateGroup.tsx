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

const CreateGroup: NextPage = () => {
  const [notPrivate, setPrivate] = useState<boolean>(true);
  const [Data, setData] = useState<string>('s');
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { Canvas } = useQRCode();

  type Group = definitions['groups'];
  type Members = { name: string };

  async function insertTable(values: { groupName: string; public: boolean; members: Members[] }) {
    const memberList = new Array<String>();

    values.members.forEach((element, index) => {
      if (index < values.members.length - 1) {
        memberList.push(`${element.name}, `);
      } else {
        memberList.push(`${element.name}`);
      }
    });
    const data = await supabase.from<'groups', Group>('groups').insert([
      // @ts-ignore
      { name: values.groupName, public: values.public, members: memberList },
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

  const form = useForm({
    initialValues: {
      groupName: '',
      public: true,
      members: [{ name: 'John Doe' }],
    },
  });

  const fields = form.values.members.map((name, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size={18} />
          </Center>
          {resetServerContext()}
          <TextInput placeholder="John Doe" {...form.getInputProps(`members.${index}.name`)} />
        </Group>
      )}
    </Draggable>
  ));

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
              <DragDropContext
                onDragEnd={({ destination, source }) =>
                  form.reorderListItem('members', { from: source.index, to: destination.index })
                }
              >
                <Droppable droppableId="dnd-list" direction="vertical">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {fields}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>

              <Group position="left" mt="md" ml="xl">
                <Button size="sm" onClick={() => form.insertListItem('members', { name: '' })}>
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
