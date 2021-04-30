import React from 'react';
import {FormControlLabel, FormGroup, Switch} from "@material-ui/core";

const SwitchExample = () => {

  const [checked, setChecked] = React.useState(false)

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch
          checked={checked}
          color={'primary'}
          onChange={() => setChecked(!checked)}
        />}
        label={'example switch'}
        labelPlacement={'start'}
      />
    </FormGroup>
  );
};

export default SwitchExample;