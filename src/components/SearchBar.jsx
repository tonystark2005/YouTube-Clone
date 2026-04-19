import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => setSearchTerm(event.target.value);

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <Paper className="searchbar">
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
        autoFocus
      />
    </Paper>
  );
};

export default SearchBar;
