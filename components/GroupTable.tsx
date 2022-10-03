import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { Table, Text, Button } from '@mantine/core'

export default function GroupTable() {
    const [groups, setGroups] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchGroups()
    }, [])

    async function fetchGroups() {
        const { data } = await supabase.from('groups').select()
        setGroups(data)
        setLoading(false)
    }

    if (loading) {
        return <Text>Loading...</Text>
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
                        <td><Button color="green" size='xs'>Join Group</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
