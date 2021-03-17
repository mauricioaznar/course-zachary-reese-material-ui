import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import background from '../assets/background.jpg'
import mobileBackgrond from '../assets/mobileBackground.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'
import ButtonArrow from './ui/ButtonArrow'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import axios from 'axios'

const useStyles = makeStyles(theme => {
  return {
    background: {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '60em',
      width: '100%',
      paddingBottom: '10em',
      [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${mobileBackgrond})`
      }
    },
    estimateButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 80,
      width: 205,
      backgroundColor: theme.palette.common.orange,
      fontSize: '1.5rem',
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        marginRight: 0
      }
    },
    learnButton: {
      ...theme.typography.learnButton,
      fontSize: '0.7rem',
      height: 35,
      padding: 5,
      [theme.breakpoints.down('md')]: {
        marginBottom: '2em'
      }
    },
    message: {
      border: `2px solid ${theme.palette.common.blue}`,
      marginTop: '5em',
      borderRadius: 5
    },
    sendButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 45,
      width: 245,
      fontSize: '1rem',
      backgroundColor: theme.palette.common.orange,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light
      },
      [theme.breakpoints.down('xs')]: {
        width: 225,
        height: 40
      }
    }

  }
})

export default function Contact(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [message, setMessage] = useState('')

  const [open, setOpen] = useState(false)

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: ''
  })

  const [loading, setLoading] = useState(false)

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
        if (!valid) {
          setEmailHelper('invalid email')
        } else {
          setEmailHelper('')
        }
        break
      case 'phone':
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
        if (!valid) {
          setPhoneHelper('invalid phone')
        } else {
          setPhoneHelper('')
        }
        break
      default:
        break
    }
  }

  const onConfirm = () => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result => {
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setAlert({open: true, message: 'Message sent succesfully', backgroundColor: '#4BB543'})
      })
      .then(() => new Promise(resolve => setTimeout(resolve, 5000)))
      .catch(e => {
        setAlert({open: true, message: 'Something went wrong', backgroundColor: '#ff3232'})
      })
      .finally(() => {
        setOpen(false)
        setLoading(false)
      })
  }

  const buttonContents = (
    <>
      Send Message
      <img
        src={airplane}
        alt={'paper airplane'}
        style={{marginLeft: '1em'}}
      />
    </>
  )

  return (
    <Grid
      container
      direction={'row'}
    >
      <Grid
        item
        container
        direction={'column'}
        justify={'center'}
        lg={4}
        xl={3}
        alignItems={'center'}
        style={{
          marginBottom: matchesSM ? '1em' : matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0
        }}
      >
        <Grid item>
          <Grid
            container
            direction={'column'}
          >
            <Grid item>
              <Typography
                variant={'h2'}
                align={matchesMD ? 'center' : undefined}
                style={{lineHeight: 1}}
              >
                Contact Us
              </Typography>
              <Typography
                variant={'body1'}
                align={matchesMD ? 'center' : undefined}
                style={{color: theme.palette.common.blue}}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid
              item
              container
              style={{marginTop: '2em'}}
            >
              <Grid item>
                <img
                  src={phoneIcon}
                  alt={'phone'}
                  style={{marginRight: '0.5em', verticalAlign: 'bottom'}}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant={'body1'}
                  style={{color: theme.palette.common.blue, fontSize: '1rem'}}
                >
                  <a
                    href={'tel: 5555555555'}
                    style={{textDecoration: 'none', color: 'inherit'}}
                  >(555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              style={{marginBottom: '2em'}}
            >
              <Grid item>
                <img
                  src={emailIcon}
                  alt={'email'}
                  style={{marginRight: '0.5em', verticalAlign: 'bottom'}}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant={'body1'}
                  style={{color: theme.palette.common.blue, fontSize: '1rem'}}
                >
                  <a
                    href={'mailto:zachary@gmail.com'}
                    style={{textDecoration: 'none', color: 'inherit'}}
                  >zachary@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction={'column'}
              style={{maxWidth: '20em'}}
            >
              <Grid item>
                <TextField
                  label={'Name'}
                  id={'name'}
                  value={name}
                  style={{marginBottom: '0.5em'}}
                  fullWidth
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label={'Email'}
                  id={'email'}
                  value={email}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  style={{marginBottom: '0.5em'}}
                  fullWidth
                  onChange={(e) => {
                    onChange(e)
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label={'Phone'}
                  id={'phone'}
                  value={phone}
                  style={{marginBottom: '0.5em'}}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  onChange={(e) => {
                    onChange(e)
                  }}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                InputProps={{disableUnderline: true}}
                className={classes.message}
                value={message}
                id={'message'}
                multiline
                rows={10}
                fullWidth
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              />
            </Grid>
            <Grid
              item
              container
              justify={'center'}
              style={{marginTop: '2em'}}
            >
              <Button
                variant={'contained'}
                className={classes.sendButton}
                onClick={() => setOpen(true)}
                // disabled={name.length === 0 || emailHelper.length !== 0 || phoneHelper.length !== 0 || message.length === 0 || email.length === 0 || phone.length === 0}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={matchesSM}
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '15em' : '25em',
            paddingRight: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '15em' : '25em'
          }
        }}
        style={{zIndex: 1302}}
      >
        <DialogContent>
          <Grid
            container
            direction={'column'}
          >
            <Grid item>
              <Typography
                gutterBottom
                variant={'h4'}
                align={'center'}
              >
                Confirm Message
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label={'Name'}
                id={'name'}
                value={name}
                style={{marginBottom: '0.5em'}}
                fullWidth
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                label={'Email'}
                id={'email'}
                value={email}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                style={{marginBottom: '0.5em'}}
                fullWidth
                onChange={(e) => {
                  onChange(e)
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                label={'Phone'}
                id={'phone'}
                value={phone}
                style={{marginBottom: '0.5em'}}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                onChange={(e) => {
                  onChange(e)
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                InputProps={{disableUnderline: true}}
                className={classes.message}
                value={message}
                id={'message'}
                multiline
                rows={10}
                fullWidth
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              />
            </Grid>
            <Grid
              item
              container
              style={{marginTop: '2em'}}
              alignItems={'center'}
              direction={matchesSM ? 'column' : 'row'}
            >
              <Grid item>
                <Button
                  color={'primary'}
                  onClick={() => setOpen(false)}
                  sytle={{fontWeight: 300}}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant={'contained'}
                  className={classes.sendButton}
                  onClick={() => onConfirm()}
                  disabled={name.length === 0 || emailHelper.length !== 0 || phoneHelper.length !== 0 || message.length === 0 || email.length === 0 || phone.length === 0}
                >
                  {loading ? <CircularProgress size={30}/> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{style: {backgroundColor: alert.backgroundColor}}}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        onClose={() => {setAlert({...alert, open: false})}}
        autoHideDuration={4000}
      />
      <Grid
        item
        container
        className={classes.background}
        direction={matchesMD ? 'column' : 'row'}
        lg={8}
        xl={9}
        justify={matchesMD ? 'center' : undefined}
        alignItems={'center'}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '3em',
            textAlign: matchesSM ? 'center' : 'inherit'
          }}
        >
          <Grid
            container
            direction={'column'}
          >
            <Grid item>
              <Typography
                variant={'h2'}
                align={matchesMD ? 'center' : undefined}
              >
                Simple software.
                <br/>
                Revolutionary Results
              </Typography>
              <Typography
                variant={'subtitle2'}
                style={{fontSize: '1.5rem'}}
              >
                Take advantage of the 21th century
              </Typography>
              <Grid
                container
                item
                justify={matchesMD ? 'center' : undefined}
              >
                <Button
                  variant={'outlined'}
                  className={classes.learnButton}
                >
                  <span style={{marginRight: 15}}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{marginRight: matchesMD ? 0 : '5em'}}
        >
          <Button
            variant={'contained'}
            className={classes.estimateButton}
          >Free estimate</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
