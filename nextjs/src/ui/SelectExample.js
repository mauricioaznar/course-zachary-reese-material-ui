import React, {useState} from 'react';
import {Grid, MenuItem, Select} from "@material-ui/core";

const SelectExample = () => {
  const [platforms, setPlatforms] = useState([])

  const options = [
    'a',
    'b',
    'c'
  ]


  //  perhaps set a z-index if behind something?

  return (
    <Select labelId={'platforms'}
      id={'platforms'}
      multiple
      value={platforms}
      displayEmpty
      renderValue={platforms.length === 0 ? () => {
        return 'Platforms'
      } : undefined}
      onChange={(event => {
        setPlatforms(event.target.value)
      })}
    >
      {
        options.map(option => {
          return <MenuItem key={option} value={option}>
            { option }
          </MenuItem>
        })
      }
    </Select>
  );
};

export default SelectExample;