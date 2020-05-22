import React from "react";
import { Chip, Box } from "@material-ui/core";
export default ({ video, player }) => {
  // var sections = [];
  // var str = video.snippet.description;
  // var matchArr = str.match(/([\d{1,}]?:?\d{1,2}:\d{2}).*/gi);
  try {
    var sections = [];
    var str = video.snippet.description;
    // var matchArr = str.match(/([\d{1,}]?:?\d{1,2}:\d{2}) .*/gi);
    // console.log(matchArr);
    var matchArr = str.match(/.*([\d{1,}]?:?\d{1,2}:\d{2}).*/gi);
    if (matchArr.length === 0) return;
    var i;
    // for (i = 0; i < matchArr.length; i++) {
    //   sections.push({
    //     title: matchArr[i].substring(
    //       matchArr[i].indexOf(" ") + 1,
    //       matchArr[i].length
    //     ),
    //     time: matchArr[i].substring(0, matchArr[i].indexOf(" "))
    //   });
    // }
    for (i = 0; i < matchArr.length; i++) {
      sections.push({
        title: matchArr[i].match(/[a-zA-Z ]+/gi),
        time: matchArr[i].match(/(\d{1,}]?:?\d{0,2}:\d{2})/gim)
      });
    }


    // console.log(sections);
  } catch (error) {}
  // if (matchArr.length == 0) return;
  const timeconversion = time => {
    // time = time.match(/(.[\d{1,}]?:?\d{1,2}:\d{2})/gi);
    //  console.log(time);
    var a = time[0].split(":");
    var seconds;
    if (a.length === 3) {
      seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    } else if (a.length === 2) {
      seconds = +a[0] * 60 + +a[1];
    } else if (a.length === 1) {
      seconds = a[0];
    }
    console.log(seconds);
    return seconds;
  };
  const onClickHandle = (player, time) => {
    player.current.seekTo(timeconversion(time));
  };
  return (
    <Box>
      {sections.map((section, index) => (
        <Chip
          label={section.title}
          onClick={() => onClickHandle(player, section.time)}
          display="flex"
          color="primary"
          key={index}
        ></Chip>
      ))}
    </Box>
  );
};
