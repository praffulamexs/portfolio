import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({
    homeRoot: {
      backgroundColor: '#1d1d1d'
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
