import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
// import { Link } from "react-router-dom";

// import AutoDetect from "./AutoDetect";
import youtube from "./api/youtube";
export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // var sections= props.location.sections ? props.location.sections : [];
  // console.log(sections);
  // console.log(this.props.location);
  // const AddTimestamp= (handleManualTimestmp) => {
  //   if(!selectedVideo) return <div></div>;
  //     else {
  //       return <Button variant="contained" component={Link}
  //       to={{ pathname: "/ui", handleManualTimestmp: handleManualTimestmp}} color="primary">
  //         Add Timestamp
  //       </Button>
  //     }
      
  // }
  return (
    <React.Fragment>
      {/* <AddTimestamp handleManualTimestmp= {handleManualTimestmp}></AddTimestamp> */}
      <Box>
        <Grid style={{ justifyContent: "center" }}>
          <Grid container spacing={5} style={{ justifyContent: "center" }}>
            <Grid item xs={4} sm={8} md={10}  style={{ justifyContent: "center" }} >
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={4} sm={8} md={8}>
              <VideoDetail video={selectedVideo}  />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <VideoList
                videos={videos}
                onVideoSelect={setSelectedVideo}
                handleDescription={handleDescription}
              />
            </Grid>
          </Grid>
        </Grid>
        </Box>
      {/* <div>
        <AutoDetect video={selectedVideo} />
      </div> */}
    </React.Fragment>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 6,
        type: "video",
        key: "Your Key",
        q: searchTerm
        //type: "playlist"
      }
    });

    setVideos(videos);
    if (!selectedVideo) setSelectedVideo(videos[0]);
    handleDescription(videos[0]);
  }
  // async function handleManualTimestmp(searchTerm, selectedVideo ){
  //   handleSubmit(searchTerm);
  //   handleDescription(selectedVideo);
  // }

  async function handleDescription(selectedVideo) {
    const {
      data: { items: newVideo }
    } = await youtube.get("videos", {
      params: {
        part: "snippet",
        id: selectedVideo.id.videoId,
        key: "AIzaSyATGhplOMLs0KlePQnIk2t3yYyOpT02euA"
      }
    });
    setSelectedVideo(newVideo[0]);
  }
};
