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
import { useForm } from '@mantine/form'


export default function CreateGroup() {
    // Once submitted data is stored in this state
    const [data, setData] = useState({ groupName: '', public: true })

    if (data.groupName != '') {
        console.log(data)
    }
    // useForm hook handles form state and validation
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
                      <Text mb="lg">Enter all applicable information for your group, then click `&apos`Submit`&apos` and you will be given your access code to invite your fellow members.</Text>
                            <form onSubmit={form.onSubmit((values) => {setData(values)})}>
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
