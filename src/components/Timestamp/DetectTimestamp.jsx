import React from "react";
import { Chip, Box } from "@material-ui/core";
import convertToSeconds from "./convertToSeconds.js";


export default ({ video, player }) => {
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
    player.current.seekTo(convertToSeconds(time));
  };
  
  return (
    <Box>
      {sections.map((section, index) => (
        <div className="chip-wrapper">
          <Chip
            label={section.title}
            onClick={() => onClickHandle(player, section.time)}
            display="flex"
            color="primary"
            key={index}
          ></Chip>
        </div>
      ))}
    </Box>
  );
};
