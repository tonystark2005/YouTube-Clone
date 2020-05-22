import React from "react";
//import "./Styles/Login.css";
import { Chip } from "@material-ui/core";
// const Section = ({ section, index }) => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs>
//         {section.title}
//       </Grid>
//       <Grid item xs>
//         {section.time}
//       </Grid>
//     </Grid>
//   );
// };

export default (sections) => {
  // Declare a new state variable, which we'll call "count"
  //const [count, setCount] = useState(0);
  // const sectionsq = () => sections;
  // console.log(props.location.sections);
  return (
    <React.Fragment>
      <div>
        {sections.map((section, index) => (
          // <Section key={index} index={index} section={section} />
          <Chip
            label={section.title}
            clickable
            display="flex"
            color="primary"
          ></Chip>
        ))}
      </div>
    </React.Fragment>
  );
};
