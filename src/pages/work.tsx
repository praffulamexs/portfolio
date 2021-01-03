import { createStyles, Grow, makeStyles, Theme } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import React from 'react'

import { Work, LocalLibrary, Fastfood } from '@material-ui/icons/';


const useStyles = makeStyles((theme: Theme) => createStyles({
    workRoot: {
      backgroundColor: '#1d1d1d',
      maxHeight: '100%',
      overflow: 'scroll',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      [theme.breakpoints.up('xs')]: {
        paddingLeft: theme.spacing(2)
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(10)
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
      }
    },
    heading: {
        flex: 1,
        textAlign: 'center',
      fontSize: 50,
      color: 'white',
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        fontSize: 30,
        display: 'none'
      }
    },
    highlightedText: {
      color: '#08fdd8',
      fontWeight: 700
    },
    timeline: {
        flex: 2,
        height: 500,
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            width: 800,
        }
    },
    timelineDetails: {
        backgroundColor: '#a3a3a3'
    },
    institute: {
        display: 'block',
        fontSize: 18,
        color: '#65c7ef',
        [theme.breakpoints.down('sm')]: {
            fontSize: 12
        }
    },
    role: {
        display: 'block',
        fontSize: 20,
        fontWeight: 600,
        color: '#0eb29a',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        }
    },
    location: {
        display: 'block',
        fontSize: 14,
        color: '#a3a3a3',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    date: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        }
    }
}))

interface WorkEdu {
    date: string
    role: string
    institute: string
    location: string
    icon: any
    color: "inherit" | "grey" | "primary" | "secondary" | undefined
}

const workAndEducation: WorkEdu[] = [
    { color: 'primary', date: 'Aug 2020 - Nov 2020', role: 'Front-End Developer', institute: 'AI Health', location: 'Remote - Melbourne, Australia', icon: <Work /> },
    { color: 'primary', date: 'Jan 2020 - Jul 2020', role: 'Data Scientist', institute: 'AI Australia', location: 'Sydney, Australia', icon: <Work /> },
    { color: 'secondary', date: 'Feb 2019 - Dec 2020', role: 'Master of Computer Science', institute: 'University of Wollongong', location: 'Wollongong, Australia', icon: <LocalLibrary /> },
    { color: 'primary', date: 'Aug 2018 - Dec 2018', role: 'Software Consultant', institute: 'Transfinite Innovative Solutions Pvt. Ltd.', location: 'Mumbai, India', icon: <Work /> },
    { color: 'primary', date: 'Mar 2018 - Jul 2018', role: 'Freelance Software Developer', institute: 'Self-Employed', location: 'Navi Mumbai, India', icon: <Work /> },
    { color: 'primary', date: 'Jun 2017 - Dec 2017', role: 'Associate Software Developer', institute: 'Centillion', location: 'Navi Mumbai, India', icon: <Work /> },
    { color: 'secondary', date: 'Jun 2014 - Apr 2017', role: 'Bachelor of Computer Science', institute: 'University of Mumbai', location: 'Navi Mumbai, India', icon: <LocalLibrary /> },
]

const WorkPage: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.workRoot}>
        <Grow in={true} timeout={1000}>
          <span className={classes.heading}><span className={classes.highlightedText}>Work Experience & Education</span></span>
        </Grow>
        {/* TimeLine */}
        <Grow in={true} timeout={2000}>
            <Timeline className={classes.timeline} align='alternate'>
                {workAndEducation.map((each, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <h3 className={classes.date}>{each.date}</h3>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color={each.color}>
                            {each.icon}
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <span className={classes.role}>{each.role}</span>
                            <span className={classes.institute}>{each.institute}</span>
                            <span className={classes.location}>{each.location}</span>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Grow>

    </div>
  )
}

export default WorkPage
