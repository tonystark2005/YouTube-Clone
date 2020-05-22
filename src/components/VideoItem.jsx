import React from "react";
import { Typography, Container } from "@material-ui/core";

export default ({ video, onVideoSelect, handleDescription }) => {
  return (
    <React.Fragment>
      <Container
        style={{ display: "flex", alignItems: "right", cursor: "pointer" }}
        onClick={() => {
          onVideoSelect(video);
          handleDescription(video);
        }}
      >
        <img
          style={{ marginRight: "3px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle2">
          <b>{video.snippet.title}</b>
        </Typography>
      </Container>
    </React.Fragment>
  );
};
