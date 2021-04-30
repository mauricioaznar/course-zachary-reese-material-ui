import React, {useState} from 'react';
import {Button, Dialog, DialogContent, Grid, TextField, Typography} from "@material-ui/core";
import {DatePicker, MobileDatePicker, MobileDateTimePicker} from "@material-ui/pickers";
import moment from 'moment'




/*

The end of @material-ui/pickers

https://github.com/mui-org/material-ui-pickers/issues/2157


https://material-ui-pickers.dev/getting-started/installation#peer-library
Important: For material-ui-pickers v3 use v1.x version of @date-io adapters.

  npm i @date-io/date-fns@1.x date-fns
// or
npm i @date-io/moment@1.x moment
// or
npm i -s @date-io/luxon@1.x luxon
// or
npm i -s @date-io/dayjs@1.x dayjs

Date fns
Error --- changing to moment because of the following.
Downgrade to 1.x because of this error "RangeError: Format string contains an unescaped latin alphabet character `n`"

https://github.com/mui-org/material-ui-pickers/issues/1440

https://stackoverflow.com/questions/59600125/cannot-get-material-ui-datepicker-to-work

npm install @material-ui/pickers@3.2.8
npm install @date-io/date-fns@1.3.13
npm install date-fns@2.8.1

https://material-ui-pickers.dev/getting-started/installation


Moment
https://stackoverflow.com/questions/60600845/how-to-use-material-ui-pickers-keyboarddatepicker-with-moment


https://github.com/mui-org/material-ui-pickers/issues/1442
 npm install @date-io/dayjs@1.x
*/





const DatePickerExample = () => {

  const [dialogOpen, setDialogOpen] = useState(false)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <Grid container>

      <Grid item xs>
        <Button onClick={() => { setDialogOpen(!dialogOpen)}}>
          Open dialog
        </Button>
      </Grid>

      <Grid item xs>
          <Dialog open={dialogOpen} onClose={() => { setDialogOpen(false) }}>
            <Grid container justify={'center'}>
              <Grid item>
                <Typography>
                  Add a new project
                </Typography>
              </Grid>
            </Grid>
            <DialogContent>
              <Grid container>
                <Grid item container direction={'column'}>
                  <Grid item>
                    <MobileDateTimePicker
                      value={selectedDate}
                      onAccept={() => { setPickerOpen(false)}}
                      onClose={() => { setPickerOpen(false)}}
                      onChange={(date) => {
                        setSelectedDate(date.set({second: 0}).format('YYYY-MM-DD'))
                      }}
                      open={pickerOpen}
                      renderInput={(params) =>
                        <TextField
                          {...params}
                          helperText={null}
                          onClick={() => { setPickerOpen(true)}}
                        />
                      }
                      inputFormat={'YYYY-MM-DD'}
                      animateYearScrolling
                      PopoverProps={{
                        anchorOrigin: {horizontal: "left", vertical: "bottom"},
                        transformOrigin: {horizontal: "left", vertical: "top"}
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
      </Grid>

    </Grid>
  );
};

export default DatePickerExample;