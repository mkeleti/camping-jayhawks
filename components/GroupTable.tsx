import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { Table, Center, Button, Loader} from '@mantine/core'


export default function GroupTable() {
    const [groups, setGroups] = useState<group[]>([])
    const [loading, setLoading] = useState(true)
    
    interface group {
        id: number,
        created_at: string,
        name: string,
        members: Array<string>,
        public: boolean
    }


    useEffect(() => {
        async function fetchGroups(): Promise<group[] | null> {
            const { data } = await supabase.from('groups').select()
            setLoading(false)
            return data
        }
        fetchGroups().then((data: group[]) => {setGroups(data)})
    }, [])

    if (loading) {
        return (
            <Center><Loader size="xl"/></Center>
        )
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
                            <Button color="green" size="xs">
                                Join Group
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
