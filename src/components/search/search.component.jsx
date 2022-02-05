import React, { useState } from 'react';
import { TextField  , FormControl, Box} from '@mui/material';
import './search.styles.css';

const SearchComponent = (props) => {

  const [keyword, setKeywords] = useState("")
  const [location, setLocation] = useState('')
  const [radius, setRadius] = useState()

  const handleInputKeywords = (event) => {
    setKeywords(event.target.value);
    //console.log(event.target.value)
  };

  const handleInputLocation =(event)=> {
    setLocation(event.target.value);
    //console.log(event.target.value)
  }

  const handleInputRadius = (event) => {
    setRadius(event.target.value)
    //console.log(event.target.value)
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
        placeholder="Insert keywords to start search"
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
        placeholder="Santa Monica"
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
  </Box>
  );
};
export default SearchComponent;