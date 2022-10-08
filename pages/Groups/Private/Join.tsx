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
import { definitions } from '../../../types/supabase';

const Join: NextPage = () => {
  // Once submitted data is stored in this state
  type Group = definitions['groups'];
  const router = useRouter();

  // useForm hook handles form state and validation
  const form = useForm({
    initialValues: {
      Id: '',
    },
  });

  return (
        <>
            <Container>
                <Center>
                    <Title>Group Passcode</Title>
                </Center>
                <Card radius="md" shadow="sm" p="md" mt="lg">
                    <Paper>
                      <Text mb="lg">Enter the private group passcode to join.</Text>
                            <form onSubmit={form.onSubmit((values) => { router.push(`/Groups/Private/${values.Id}`); })}>
                                <TextInput
                                  label="Group ID"
                                  withAsterisk
                                  size="lg"
                                  placeholder="1234-1234-1234-1234-1234"
                                  {...form.getInputProps('Id')}
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

export default Join;
