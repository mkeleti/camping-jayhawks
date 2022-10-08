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
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { IconGripVertical } from '@tabler/icons';
import { supabase } from '../../utils/supabaseClient';
import { definitions } from '../../types/supabase';

const CreateGroup: NextPage = () => {
  // Once submitted data is stored in this state
  type Group = definitions['groups'];
  const router = useRouter();
  async function insertTable(values: { groupName: string; public: boolean, members: JSON[] }) {
    const memberList = new Array<String>();

    values.members.forEach((element, index) => {
      if (index < values.members.length - 1) {
        memberList.push(`${element.name}, `);
      } else {
        memberList.push(`${element.name}`);
      }
    });

    await supabase
      .from<'groups', Group>('groups')
      .insert([
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        { name: values.groupName, public: values.public, members: memberList },
      ]);
    router.push('/');
  }
  // useForm hook handles form state and validation
  const form = useForm({
    initialValues: {
      groupName: '',
      public: true,
      members: [{ name: 'John Doe' }],
    },
  });

  const fields = form.values.members.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size={18} />
          </Center>
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
                      <Text mb="lg">Enter all applicable information for your group, then click Submit and you will be given your access code to invite your fellow members.</Text>
                            <form onSubmit={form.onSubmit((values) => { insertTable(values); })}>
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

                                        <Group position="center" mt="md">
                                          <Button onClick={() => form.insertListItem('members', { name: '' })}>
                                            Add employee
                                          </Button>
                                        </Group>
                                <Group position="right" mt="md">
                                    <Button type="submit">Submit</Button>
                                </Group>
                            </form>
                    </Paper>
                </Card>
            </Container>
        </>
  );
};

export default CreateGroup;
