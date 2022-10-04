import { useState } from 'react'
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
} from '@mantine/core'
import { createFormContext, useForm } from '@mantine/form'


export default function CreateGroup() {
    const [checked, setChecked] = useState(true)

    const form = useForm({
        initialValues: {
            groupName: '',
            public: true,
        },
    })
    return (
        <>
            <Container>
                <Center>
                    <Title>Create Group</Title>
                </Center>
                <Card radius="md" shadow="sm" p="md" mt="lg">
                    <Paper>
                      <Text mb="lg">Enter all applicable information for your group, then click 'Submit' and you will be given your access code to invite your fellow members.</Text>
                            <form onSubmit={form.onSubmit((values) => {console.log(values)})}>
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
                                <Group position="right" mt="md">
                                    <Button type="submit">Submit</Button>
                                </Group>
                            </form>
                    </Paper>
                </Card>
            </Container>
        </>
    )
}
