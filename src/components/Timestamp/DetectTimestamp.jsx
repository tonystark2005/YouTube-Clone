import React from "react";
import { Chip, Box } from "@mui/material";
import convertToSeconds from "./convertToSeconds.js";


const DetectTimestamp = ({ video, player }) => {
  try {
    var sections = [];
    var description = video.snippet.description;
    var matchArr = description.match(/.*([\d{1,}]?:?\d{1,2}:\d{2}).*/gi);
    if (matchArr.length === 0) return;
    //var i;

    matchArr.forEach((section) => {
      sections = [...sections, {
        title: section.match(/[a-zA-Z ]+/gi),
        time: section.match(/(\d{1,}]?:?\d{0,2}:\d{2})/gim)
      }];
      
    })

  } catch (error) {
    console.log(error);
   }

  const onClickHandle = (player, time) => {
    const nextTime = convertToSeconds(time);
    const playerInstance = player.current;

    if (!playerInstance) return;

    if (typeof playerInstance.seekTo === "function") {
      playerInstance.seekTo(nextTime);
      return;
    }

    playerInstance.currentTime = nextTime;
  };
  
  return (
    <Box>
      {sections.map((section, index) => (
        <div className="chip-wrapper" key={index}>
          <Chip
            label={section.title}
            onClick={() => onClickHandle(player, section.time)}
            display="flex"
            color="primary"
          ></Chip>
        </div>
      ))}
    </Box>
  );
};

export default DetectTimestamp;
