import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, LinearProgress } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {

    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]));
    
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items));

  }, [id])
  
  if(!videos?.length) return (<><LinearProgress /><div style={{width:"100vw", height: "100vh", backgroundColor: "black", position:'sticky'}}></div></>)

  const { snippet: { title, description, channelTitle, channelId }, statistics: { viewCount, likeCount } } = videoDetail;
  if(!videoDetail){
    document.title = `Loading...`;
  }else{
    document.title = `${title}`;
  }

  // console.log(videoDetail);
  // console.log(videos);
  
  
  return (
    <Box minHeight="95vh" sx={{px: {xs:'10px', md:'45px'} }}>
      <Stack direction={{ xs: 'column', md:'row'}}>
        <Box flex={1} >
          <Box sx={{ width: {xs: '100%'}, position: 'static', top: '86px' }} >
            <ReactPlayer origin={`http://localhost:3000`} url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2} >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`} >
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center" mb="100px">
                <Typography variant="body1" sx={{ opacity: 0.7 }} >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }} >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail