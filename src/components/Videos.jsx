import { Stack, Box, LinearProgress } from '@mui/material'
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {

  if(!videos?.length) return (<><LinearProgress /><div style={{width:"100vw", height: "100vh", backgroundColor: "black", position:'sticky'}}></div></>);
  // console.log(videos);
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos