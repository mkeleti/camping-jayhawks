import { Paper } from '@mantine/core'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Timeline() {
    return (
        <Paper>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="KUBBallCamping"
                noHeader={true}
                noFooter={true}
                transparent={true}
            />
        </Paper>
    )
}
