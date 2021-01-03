import { createStyles, Grow, makeStyles, Theme, Tooltip, Avatar } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({
    skillsRoot: {
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
      // marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 30
      }
    },
    highlightedText: {
      color: '#08fdd8',
      fontWeight: 700
    },
    message: {
      color: 'white',
      letterSpacing: 1,
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      }
    },
    section: {
      marginTop: 20,
      width: 700,
      [theme.breakpoints.down('sm')]: {
        width: 275
      },
      display: 'flex',
      flexDirection: 'column',
    },
    skillHeading: {
      fontSize: 22,
      fontWeight: 700,
      color: '#08fdd8',
      letterSpacing: 2
    },
    techDiv: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
      overflow: 'scroll'
    },
    skill: {
      marginRight: 20,
      border: 'solid #1d1d1d 0.9px',
      borderRadius: 4,
      width: 50,
      height: 50,
      transition: 'border 0.2s',
      '&:hover': {
        border: 'solid #08fdd8 0.9px'
      },
      [theme.breakpoints.down('sm')]: {
        width: 40,
        height: 40,
      }
    }
}))

interface Technology {
  name: string
  url: string
}

interface Field {
  name: string
  technologies: Technology[]
}

const skills: Field[] = [
  {
    name: 'Front-End',
    technologies: [
      { name: 'ReactJS', url: 'tech/front-end/reactjs.png' },
      { name: 'React Native', url: 'tech/front-end/react-native.png' },
      { name: 'Angular', url: 'tech/front-end/angular.png' },
      { name: 'Ionic', url: 'tech/front-end/ionic.jpg' },
      { name: 'Flutter', url: 'tech/front-end/flutter.jpg' },
      { name: 'SwiftUI', url: 'tech/front-end/swiftui.png' },
    ]
  },
  {
    name: 'Back-End',
    technologies: [
      { name: 'NodeJS', url: 'tech/back-end/node.png' },
      { name: 'NestJS', url: 'tech/back-end/nestjs.png' },
      { name: 'Laravel', url: 'tech/back-end/laravel.png' },
    ]
  },
  {
    name: 'Database',
    technologies: [
      { name: 'MySQL', url: 'tech/database/mysql.jpg' },
      { name: 'MongoDB', url: 'tech/database/mongo.png' },
    ]
  },
  {
    name: 'Machine Learning',
    technologies: [
      { name: 'PyTorch', url: 'tech/machine-learning/pytorch.png' },
      { name: 'Tensorflow', url: 'tech/machine-learning/tensorflow.png' },
      { name: 'Scikit-Learn', url: 'tech/machine-learning/sklearn.jpg' },
    ]
  },
  {
    name: 'Other',
    technologies: [
      { name: 'Amazon Web Services', url: 'tech/other/aws.png' },
      { name: 'Google Cloud Platform', url: 'tech/other/gcp.png' },
      { name: 'Firebase', url: 'tech/other/firebase.png' },
      { name: 'Azure', url: 'tech/other/azure.png' },
    ]
  },
]

const SkillsPage: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.skillsRoot}>
        <Grow in={true} timeout={1000}>
          <span className={classes.heading}><span className={classes.highlightedText}>Skills</span></span>
        </Grow>

        <Grow in={true} timeout={1000}>
          <p className={classes.message}>Here are some of the technical skills that I possess...</p>
        </Grow>

        {skills.map((skill, skillIndex) => (
            <Grow key={skillIndex} in={true} timeout={2000 + skillIndex*1000}>
            <div className={classes.section}>
              <span className={classes.skillHeading}>{skill.name}</span>
              <div className={classes.techDiv}>
                {skill.technologies.map((tech, techIndex) => (
                  <Tooltip key={techIndex} title={tech.name}>
                    <Avatar className={classes.skill} alt={tech.name} src={tech.url} />
                  </Tooltip>
                ))}
              </div>
            </div>
          </Grow>
        ))}


    </div>
  )
}

export default SkillsPage
