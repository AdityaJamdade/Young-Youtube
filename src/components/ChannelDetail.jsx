import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));

  }, [id])

  return (
    <Box minHeight="95vh">
      <Box >
        <div style={{
          background: 'linear - gradient(90deg, rgba(2, 0, 36, 1) 0 %, rgba(12, 9, 121, 1) 47 %, rgba(21, 109, 111, 0.9612219887955182) 100 %)',
          zIndex: 10,
          height: '300px'
          }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-199px" />
      </Box>
      <Box display="flex" p="2" >
          <Box sx={{ mr:{sm: '100px'}, ml:{sm: '80px'} }} />
            <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail