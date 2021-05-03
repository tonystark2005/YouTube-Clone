import React from "react";
import { Chip, Box } from "@material-ui/core";
import convertToSeconds from "./convertToSeconds.js";


export default ({ video, player }) => {
  try {
    var sections = [];
    var str = video.snippet.description;
    var matchArr = str.match(/.*([\d{1,}]?:?\d{1,2}:\d{2}).*/gi);
    if (matchArr.length === 0) return;
    var i;


    for (i = 0; i < matchArr.length; i++) {
      sections = [...sections, {
        title: matchArr[i].match(/[a-zA-Z ]+/gi),
        time: matchArr[i].match(/(\d{1,}]?:?\d{0,2}:\d{2})/gim)
      }];
    }
  } catch (error) { }

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
