import { createStyles, Grow, makeStyles, Zoom, Theme, Tooltip } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import SocialType from '../interfaces/social-interface';
import { Facebook, GitHub, LinkedIn, Twitter, Email, PhoneIphone } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
    homeRoot: {
      backgroundColor: '#1d1d1d',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('xs')]: {
        paddingLeft: theme.spacing(2)
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(10)
      },
    },
    introText: {
      fontSize: 50,
      color: 'white',
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        fontSize: 30
      }
    },
    highlightedText: {
      color: '#08fdd8',
      fontWeight: 700
    },
    bottomText: {
      color: '#a3a3a3',
      marginTop: 20,
      fontSize: 18,
      letterSpacing: 1,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    },
    socialDiv: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20
    },
    social: {
      padding: 5,
      color: 'white',
      marginRight: 20,
      cursor: 'pointer',
      transition: 'color 0.5s',
      '&:hover': {
        color: '#08fdd8'
      }
    }
}))

const allSocial: SocialType[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prafful-jagtap/', icon: <LinkedIn fontSize='large' /> },
  { name: 'GitHub', url: 'https://github.com/praffulamexs', icon: <GitHub fontSize='large' /> },
  { name: 'Facebook', url: 'https://www.facebook.com/prafful.jagtap.92/', icon: <Facebook fontSize='large' /> },
  { name: 'Twitter', url: 'https://twitter.com/jagtap_prafful?s=08', icon: <Twitter fontSize='large' /> },
]

const HomePage: React.FC = () => {
  const classes = useStyles()

  const [showSocial, setShowSocial] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setShowSocial(true)
    }, 4000);
  })

  return (
    <div className={classes.homeRoot}>
        <Grow in={true} timeout={1000}>
          <span className={classes.introText}><span className={classes.highlightedText}>H</span>i,</span>
        </Grow>
        <Grow in={true} timeout={3000}>
          <span className={classes.introText}>I'm <span className={classes.highlightedText}>P</span>rafful <span className={classes.highlightedText}>J</span>agtap,</span>
        </Grow>
        <Grow in={true} timeout={5000}>
          <span className={classes.introText}><span className={classes.highlightedText}>S</span>oftware <span className={classes.highlightedText}>D</span>eveloper</span>
        </Grow>

        {/* Small text at the bottom */}
        <Grow in={true} timeout={6000}>
          <span className={classes.bottomText}>Full-Stack Developer / Machine Learning Engineer</span>
        </Grow>

        {/* Social Media Links */}
        <Zoom in={showSocial}>
          <div className={classes.socialDiv}>
            {allSocial.map((social, index) => (
              <Tooltip key={index} title={social.name}>
                <div onClick={() => window.open(social.url, '_blank')} className={classes.social}>
                  {social.icon}
                </div>
              </Tooltip>
            ))}
            <Tooltip title='Email'>
                <div onClick={() => window.open('mailto:prafful.jagtap1995@gmail.com')} className={classes.social}>
                <Email fontSize='large' />
              </div>
            </Tooltip>
            <Tooltip title='Phone'>
                <div onClick={() => window.open('tel:+61448336086')} className={classes.social}>
                <PhoneIphone fontSize='large' />
              </div>
            </Tooltip>
          </div>
        </Zoom>
    </div>
  )
}

export default HomePage
