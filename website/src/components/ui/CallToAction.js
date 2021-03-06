import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonArrow from './ButtonArrow'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyles = makeStyles((theme) => {
  return {
    learnButton: {
      ...theme.typography.learnButton,
      fontSize: '0.7rem',
      height: 35,
      padding: 5,
      [theme.breakpoints.down('sm')]: {
        marginBottom: '2em'
      }
    },
    background: {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '70em',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${mobileBackground})`,
        backgroundAttachment: 'inherit'
      }
    },
    estimateButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 80,
      width: 205,
      backgroundColor: theme.palette.common.orange,
      fontSize: '1.5rem',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0
      }
    }
  }
})

export default function CallToAction(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container style={{height: '70em'}}
          alignItems={'center'}
          className={classes.background}
          justify={matchesSM ? 'center' : 'space-between'}
          direction={matchesSM ? 'column' : 'row'}
    >
      <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : 'inherit'}}>
        <Grid container direction={'column'}>
          <Grid item>
            <Typography variant={'h2'}>
              Simple software.<br /> Revolutionary Results
            </Typography>
            <Typography variant={'subtitle2'} style={{fontSize: '1.5rem'}}>
              Take advantage of the 21th century
            </Typography>
            <Grid container item justify={matchesSM ? 'center' : undefined}>
              <Button variant={'outlined'} className={classes.learnButton}>
                <span style={{marginRight: 15}}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{marginRight:  matchesSM ? 0 : '5em'}}>
        <Button variant={'contained'} className={classes.estimateButton}>Free estimate</Button>
      </Grid>
    </Grid>
  )
}