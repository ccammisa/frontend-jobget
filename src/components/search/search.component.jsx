import React, { useState } from 'react';
import { TextField, FormControl, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './search.styles.css';

const SearchComponent = (props) => {

  const [keyword, setKeywords] = useState("")
  const [location, setLocation] = useState('')
  const [radius, setRadius] = useState()

  const handleInputKeywords = (event) => {
    let keyword = event.target.value.toLowerCase()
    setKeywords(keyword);
  };

  const handleInputLocation =(event)=> {
    setLocation((event.target.value).toLowerCase());
  }

  const handleInputRadius = (event) => {
    setRadius(event.target.value)
  }

  const handleClick = (event)=>{
    event.preventDefault();
    props.handleSearch({keyword, location, radius});
  }

  return (
  <Box
    className="search-component"
    component="form"
    noValidate
    autoComplete="off">
    <FormControl>
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Job"
        id="input-job"
        value={keyword}
        variant="outlined"
        placeholder="Insert Job title to start search"
        onChange={handleInputKeywords}
      />
    </FormControl>
    <FormControl>
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Location"
        id="input-location"
        value={location}
        variant="outlined"
        placeholder="Country or city name"
        onChange={handleInputLocation}
      />
    </FormControl>
    <FormControl>
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Radius Miles"
        id="input-radius"
        type="number"
        value={radius}
        variant="outlined"
        placeholder="10"
        onChange={handleInputRadius}
        inputProps={{
          min: 0,
          inputMode: 'numeric',
          max: 99999
        }}
      />
    </FormControl>
    <FormControl>
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        size="medium"
        onClick={handleClick}
      >Find a Job!</Button>
    </FormControl>
  </Box>
  );
};
export default SearchComponent;