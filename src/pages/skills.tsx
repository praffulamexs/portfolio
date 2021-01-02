import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({
    skillsRoot: {
      backgroundColor: '#000',
      color: 'white'
    }
}))

const SkillsPage: React.FC = () => {
  const classes = useStyles()
  return (
      <div className={classes.skillsRoot}>
          skills page
      </div>
  )
}

export default SkillsPage
