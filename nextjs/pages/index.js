import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import TextFieldExample from "../src/ui/TextFieldExample";
import SwitchExample from "../src/ui/SwitchExample";
import TableExample from "../src/ui/TableExample";
import DatePickerExample from "../src/ui/DatePickerExample";
import RadioExample from "../src/ui/RadioExample";
import SelectExample from "../src/ui/SelectExample";

export default function Index() {
  return (
    <Grid
      direction={'column'}
      container
    >
      <Grid
        item
        xs
        style={{
          marginTop: '2em',
          marginLeft: '5em',
          marginRight: '5em'
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
        >
          Next.js example
        </Typography>
      </Grid>

      <Grid
        item
        xs
        style={{
          marginTop: '2em',
          marginLeft: '5em',
          marginRight: '5em'
        }}
      >
        <TextFieldExample/>
      </Grid>

      <Grid
        item
        style={{
          marginTop: '2em',
          marginLeft: '5em',
          marginRight: '5em'
        }}
      >
        <SwitchExample/>
      </Grid>

      <Grid
        item
        xs={12}
        md
        style={{
          marginTop: '2em',
          marginLeft: '5em',
          marginRight: '5em'
        }}
      >
        <TableExample/>
      </Grid>

      <Grid
        item
        xs={12}
        md
        style={{
          marginTop: '2em',
          marginLeft: '5em',
          marginRight: '5em'
        }}
      >
        <DatePickerExample />
      </Grid>

      <Grid
        item
        xs={12}
        md
        style={{
          marginTop: '2em',
          marginLeft: '5em',
          marginRight: '5em'
        }}
      >
        <RadioExample />
      </Grid>


      <Grid
        item
        xs={12}
        md
        style={{
          marginTop: '2em',
          marginLeft: '5em',
          marginRight: '5em'
        }}
      >
        <SelectExample />
      </Grid>
    </Grid>
  );
}
