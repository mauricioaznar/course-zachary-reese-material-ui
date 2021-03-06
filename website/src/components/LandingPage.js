import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import animationData from '../animations/landinganimation/data'
import Button from '@material-ui/core/Button'
import ButtonArrow from '../components/ui/ButtonArrow'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CallToAction from './ui/CallToAction'
import CardContent from '@material-ui/core/CardContent'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import inforBackground from '../assets/infoBackground.svg'


const useStyles = makeStyles(theme => {
  return {
    animation: {
      minWidth: '21em',
      maxWidth: '50em',
      marginTop: '2em',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '30em'
      }
    },
    estimateButton: {
      ...theme.typography.estimate,
      backgroundColor: theme.palette.common.orange,
      borderRadius: 50,
      height: 45,
      width: 145,
      marginRight: 40,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light
      }
    },
    buttonContainer: {
      marginTop: '1em'
    },
    learnButtonHero: {
      ...theme.typography.learnButton,
      fontSize: '0.9rem',
      height: 45,
      width: 145
    },
    learnButton: {
      ...theme.typography.learnButton,
      fontSize: '0.7rem',
      height: 35,
      padding: 5,
      [theme.breakpoints.down('sm')]: {
        marginBottom: '2em'
      }
    },
    mainContainer: {
      marginTop: '5em',
      [theme.breakpoints.down('md')]: {
        marginTop: '3em'
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '2em'
      }
    },
    heroTextContainer: {
      minWidth: '21.5em',
      marginLeft: '1em',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0
      }
    },
    specialText: {
      fontFamily: 'Pacifico',
      color: theme.palette.common.orange
    },
    subtitle: {
      marginBottom: '1em'
    },
    icon: {
      marginLeft: '2em',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0
      }
    },
    serviceContainer: {
      marginTop: '12em',
      [theme.breakpoints.down('sm')]: {
        padding: 25
      }
    },
    revolutionBackground: {
      backgroundImage: `url(${revolutionBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%'
    },
    revolutionCard: {
      position: 'absolute',
      boxShadow: theme.shadows[10],
      borderRadius: 15,
      padding: '10em',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '8em',
        paddingBottom: '8em',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        width: '100%'
      }
    },
    infoBackground: {
      backgroundImage: `url(${inforBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%'
    }
  }
})


export default function LandingPage() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction={'column'} className={classes.mainContainer}>
      <Grid item>
        {/**
         HERO BLOCK
       **/}
        <Grid container justify={'flex-end'} alignItems={'center'}>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography
              align={'center'}
              variant={'h2'}
            >
              Bringing westcoast technology<br />to the midwest
            </Typography>
            <Grid container justify={'center'} className={classes.buttonContainer}>
              <Grid item>
                <Button variant={'contained'} className={classes.estimateButton}>Free estimate</Button>
              </Grid>
              <Grid item>
                <Button variant={'outlined'} className={classes.learnButtonHero}>
                  <span style={{marginRight: 15}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item
              className={classes.animation}
          >
            <Lottie
              options={defaultOptions}
              height={'100%'}
              width={'100%'}
            >
            </Lottie>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/** CUSTOM SOFTWARE BLOCK **/}
        <Grid container justify={matchesSM ? 'center' : undefined} className={classes.serviceContainer}>
          <Grid item  style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined}}>
            <Typography variant={'h4'}>
              Custom Software development
            </Typography>
            <Typography variant={'subtitle1'} className={classes.subtitle}>
              Save Energy, Save Time, Save Money.
            </Typography>
            <Typography variant={'subtitle1'}>
              Complete digital solutions, from investigation to {' '} <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant={'outlined'} className={classes.learnButton}>
              <span style={{marginRight: 10}}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} alt={'custom software icon'} src={customSoftwareIcon}/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/** IOS / ANDROID DEVELOPMENT BLOCK **/}
        <Grid container justify={matchesSM ? 'center' : 'flex-end'} className={classes.serviceContainer}>
          <Grid item  style={{textAlign: matchesSM ? 'center' : undefined}}>
            <Typography variant={'h4'}>
              iOS/Android App Development
            </Typography>
            <Typography variant={'subtitle1'} className={classes.subtitle}>
              Extend functionality, Extend access. Increase Engagement.
            </Typography>
            <Typography variant={'subtitle1'}>
              Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button variant={'outlined'} className={classes.learnButton}>
              <span style={{marginRight: 10}}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          </Grid>
          <Grid item style={{marginRight: matchesSM ? 0 : '5em'}}>
            <img className={classes.icon} alt={'custom software icon'} src={mobileAppsIcon}/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/** Websites Block **/}
        <Grid container justify={matchesSM ? 'center' : undefined} className={classes.serviceContainer}>
          <Grid item  style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined}}>
            <Typography variant={'h4'}>
              Website development
            </Typography>
            <Typography variant={'subtitle1'} className={classes.subtitle}>
              Reach more, Discover more, cell more.
            </Typography>
            <Typography variant={'subtitle1'}>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant={'outlined'} className={classes.learnButton}>
              <span style={{marginRight: 10}}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} alt={'website icon'} src={websitesIcon}/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/** Revolution Block **/}
        <Grid container alignItems={'center'} justify={'center'} style={{height: '100em', marginTop: '12em'}}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction={'column'} style={{textAlign: 'center'}}>
                <Grid item>
                  <Typography variant={'h3'} gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'subtitle1'}>
                    Visionary insights coupled with cutting-edge is a recipe for revolution
                  </Typography>
                  <Button variant={'outlined'} className={classes.learnButton}>
                    <span style={{marginRight: 10}}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}/>
        </Grid>
      </Grid>

      <Grid item>
        {/** Information Block**/}
        <Grid container direction={'row'} style={{height: '80em'}} alignItems={'center'}>

          <Grid
            item
            container
            style={{position: 'absolute', textAlign: matchesXS ? 'center' : 'inherit'}}
            direction={ matchesXS ? 'column' : 'row'}
            spacing={matchesXS ? 0 : 10}
          >

            <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? '2em0' : '5em'}}>
              <Grid container direction={'column'}>
                <Typography variant={'h2'} style={{color: 'white'}}>About us</Typography>
                <Typography variant={'subtitle2'}>Let's get personal</Typography>
                <Grid item>
                  <Button variant={'outlined'} style={{color: 'white', borderColor: 'white'}} className={classes.learnButtonHero}>
                    <span style={{marginRight: 15}}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={'white'}/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm style={{marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center' : 'right'}}>
              <Grid container direction={'column'}>
                <Typography variant={'h2'} style={{color: 'white'}}>Contact us</Typography>
                <Typography variant={'subtitle2'}>Say hello!<span role={'img'} aria-label={'waving hand'}>HE</span></Typography>
                <Grid item>
                  <Button variant={'outlined'} style={{color: 'white', borderColor: 'white'}} className={classes.learnButtonHero}>
                    <span style={{marginRight: 15}}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={'white'}/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

          <div className={classes.infoBackground} />
        </Grid>
      </Grid>


      <Grid item>
        <CallToAction />
      </Grid>

    </Grid>
  )
}