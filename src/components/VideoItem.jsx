import React, {useContext} from "react";
import { Typography, Container } from "@material-ui/core";
import { VideoContext } from "./HomePage";


export default ({ video }) => {
  const {setSelectedVideo, handleDescription}= useContext(VideoContext)
  return (
    <React.Fragment>
      <Container
        onClick={() => {
          setSelectedVideo(video);
          handleDescription(video);
        }}
        className="video-item"
      >
        <img
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle2" >
          <b>{video.snippet.title}</b>
        </Typography>
      </Container>
    </React.Fragment>
  );
};
