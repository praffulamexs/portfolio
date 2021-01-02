import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({
    homeRoot: {
      backgroundColor: '#000'
    }
}))

const HomePage: React.FC = () => {
  const classes = useStyles()
  return (
      <div className={classes.homeRoot}>
          homepageasdasdasdasdsa
      </div>
  )
}

export default HomePage
