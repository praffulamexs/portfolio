import { createStyles, Grow, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({
    aboutRoot: {
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
    heading: {
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
    information: {
      color: 'white',
      marginTop: 20,
      fontSize: 16,
      maxWidth: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    }
}))

const AboutPage: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.aboutRoot}>
        <Grow in={true} timeout={1000}>
          <span className={classes.heading}><span className={classes.highlightedText}>About Me</span></span>
        </Grow>

        {/* Information */}
        <Grow in={true} timeout={2000}>
          <div className={classes.information}>
            <p>I believe that the ability to adapt to newer technologies is the strongest skill a software developer can have.</p>
            <p>I recently graduated with a Master's degree in Computer Science from the University of Wollongong. As I am very passionate about solving real-world problems, I decided to specialize in Machine Learning and Big Data. Over the course I learned various Machine Learning and Computer Vision algorithms which I intend to use to solve complex real-world problems.</p>
            <p>Before my Master's, I worked as a Back-End developer, Software Consultant and Freelance Software Developer for a total of about 2 years. I have experience working with / developing Web Applications, Hybrid Mobile Applications, Cross-Platform Mobile Applications, Relational and Non-Relational Databases, Hosting on VPS and developing Back-End Applications. I have a bit of cloud computing experience with AWS and GCP as well.</p>
          </div>
        </Grow>

    </div>
  )
}

export default AboutPage
