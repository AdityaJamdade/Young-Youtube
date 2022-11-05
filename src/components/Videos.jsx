import { Stack, Box } from '@mui/material'

const Videos = ({ videos }) => {

  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {/* {item.id.videoId && <VideoCard video={item} />} */}
          {/* {item.id.channelId && <ChannelCard video={item} />} */}
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
        </Box>
      ))}
    </Stack>
  )
}

export default Videos