import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { Table, Text } from '@mantine/core'

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
        <Table>
            <thead>
                <tr>
                    <th>Group Name</th>
                    <th>Members</th>
                    <th>Public</th>
                    <th>Creation Time</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((element) => (
                    <tr key={element.id}>
                        <td>{element.name}</td>
                        <td>{element.members}</td>
                        <td>{element.public}</td>
                        <td>{element.created_at}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
