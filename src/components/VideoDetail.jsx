import React, { useRef } from "react";

import { Paper, Typography, Box } from "@material-ui/core";
import AutoDetect from "./Timestamp/DetectTimestamp";
import ReactPlayer from "react-player";

export default ({ video }) => {
  if (!video) return <Typography variant="h3" className="loading">Loading...</Typography>;
  const videoSrc = `https://www.youtube.com/embed/${video.id}?enablejsapi=1`;
  const player = useRef(null);

  return (
    <React.Fragment>
      <Paper>
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            ref={player}
            url={videoSrc}
            controls={true}
            playing={true}
            // autoPlay={true}
            // config
            className="react-player"
          ></ReactPlayer>
        </div>
        <Box style={{ padding: "5px" }}>
          <Typography variant="h5">
            {video.snippet.title} - {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle1">
            {video.snippet.channelTitle}
          </Typography>
          <Box>
            <AutoDetect video={video} player={player}></AutoDetect>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};
