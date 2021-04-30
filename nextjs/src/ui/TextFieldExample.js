import React from 'react';
import {InputAdornment, TextField} from "@material-ui/core";
import {Add} from "@material-ui/icons";

const TextFieldExample = props => {
  return (
    <TextField
      placeholder={'Search project details or create a new entry'}
      InputProps={{
        endAdornment: <InputAdornment position={'end'}>
          <Add color={'primary'}/>
        </InputAdornment>
      }}
      type={'text'}
    />
  );
};


export default TextFieldExample;