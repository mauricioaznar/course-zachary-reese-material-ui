import React, {useState} from 'react';
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

const RadioExample = () => {
  const [value, setValue] = useState('')

  return (
    <RadioGroup
      onChange={(e) => {
        setValue(e.target.value)
      }}
      value={value}
      row
    >
      <FormControlLabel control={<Radio />} label={'website'} value={'website'} />
      <FormControlLabel control={<Radio />} label={'apps'} value={'apps'} />
    </RadioGroup>
  );
};

export default RadioExample;