import React, { useRef } from "react";

import { Paper, Typography, Box } from "@material-ui/core";
import AutoDetect from "./AutoDetect";
import ReactPlayer from "react-player";

export default ({ video }) => {
  if (!video) return <Typography style={{ justifyContent: "center" }}>Loading</Typography>;
  // const [newVideo, setnewVideo] = useState(null);
  const videoSrc = `https://www.youtube.com/embed/${video.id}?enablejsapi=1`;
  const player = useRef(null);
  // useEffect(() => {
  //   player.current.focus();
  // }, []);
  // try {
  //   player.seekTo(45);
  // } catch (error) {}

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "100%" }}>
        <ReactPlayer
          width="100%"
          height="50%"
          ref={player}
          url={videoSrc}
          controls={true}
          playing={true}
          // autoPlay={true}
          // config
        ></ReactPlayer>
        {/* <Button onClick={() => player.current.seekTo(45)}>click me</Button> */}
        {/* <iframe
          frameBorder="0"
          width="932px"
          height="524px"
          title="Video Player"
          src={videoSrc}
          allowFullScreen
        /> */}
        <Box elevation={6} style={{ padding: "5px" }}>
          <Typography variant="h5">
            {video.snippet.title} - {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle1">
            {video.snippet.channelTitle}
          </Typography>
          <Box>
            <AutoDetect video={video} player={player}></AutoDetect>
          </Box>
          {/* <Typography>
            <Test sections={sections}></Test>
            <Test handleTimestamp={handleTimestamp}></Test>
          </Typography> */}
        </Box>
      </Paper>
    </React.Fragment>
  );
};
