import { useState, useEffect } from 'react'
import { useMantineTheme } from '@mantine/core'
import  GroupTable from '../components/GroupTable';
import Head from 'next/head'

export default function Camping() {
    const theme = useMantineTheme()
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    
    return (
        <>
            <Head>
                <title>Camping</title>
            </Head>
            <GroupTable />
        </>
    )
}


