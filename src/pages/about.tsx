import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({
    aboutRoot: {
      backgroundColor: '#000'
    }
}))

const AboutPage: React.FC = () => {
  const classes = useStyles()
  return (
      <div className={classes.aboutRoot}>
          homepageasdasdasdasdsa
      </div>
  )
}

export default AboutPage
