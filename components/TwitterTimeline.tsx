import { Box, Paper, Skeleton } from '@mantine/core';
import { useEffect, useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Skeletons = () => (
  <>
    <Skeleton height={50} circle mb="xl" />
    <Skeleton height={8} radius="xl" />
    <Skeleton height={8} mt={6} radius="xl" />
    <Skeleton height={8} mt={6} mb="md" width="70%" radius="xl" />
  </>
);

export default function Timeline() {
  const [loading, setLoading] = useState(true);
  function timing() {
    setInterval(() => {
      setLoading(false);
    }, 5000);
  }
  useEffect(() => {
    timing();
  }, []);
  return (
    <Paper>
      <Box sx={loading ? { display: 'none' } : { display: 'box' }}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="KUBBallCamping"
          noHeader
          noFooter
          transparent
          onLoad={() => setLoading(false)}
        />
      </Box>
      <Box sx={loading ? { display: 'box' } : { display: 'none' }}>
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
      </Box>
    </Paper>
  );
}
