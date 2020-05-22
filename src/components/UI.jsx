import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
//import "./Styles/Login.css";
import { Link } from "react-router-dom";

const Section = ({ section, index, removeSection }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        {section.title}
      </Grid>
      <Grid item xs>
        {section.time}
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={() => removeSection(index)}
        >
          x
        </Button>
      </Grid>
    </Grid>
  );
};

export default () => {
  // Declare a new state variable, which we'll call "count"
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([{ title: "", time: "" }]);
  // const addData = ({ title, time }) => {
  //   setSections(title, time);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    //addSection(value);
    // setTitle("");
    // setTime("");
  };

  const addSection = (title, time) => {
    if (!title) return;
    if (!time) return;
    const newSections = [...sections, { title, time }];
    setSections(newSections);
    setTime("");
    setTitle("");
  };

  const removeSection = index => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h5" align="center">
        Add Section
      </Typography>
      <div>
        {sections.map((section, index) => (
          <Section
            key={index}
            index={index}
            section={section}
            removeSection={removeSection}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Name"
          name="title"
          value={title}
          autoFocus
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="time"
          label="Time"
          id="time"
          value={time}
          className="time"
          onChange={e => {
            setTime(e.target.value);
          }}
        />
        <Grid container>
          <Grid item xs align="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addSection(title, time);
              }}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs align="center">
            <Button variant="contained" component={Link}
            to={{ pathname: "/" }} color="primary" >
              Cancel
            </Button>
          </Grid>
        </Grid>
        <Grid item xs align="center">
          <Button
            type="submit"
            component={Link}
            to={{ pathname: "/", sections: sections }}
            // onClick={() => {props.location.handleManualTimestamp()}}
            align="center"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </Grid>
      </form>
    </Container>
  );
};
