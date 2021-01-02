import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({
    contactRoot: {
      backgroundColor: '#000'
    }
}))

const ContactPage: React.FC = () => {
  const classes = useStyles()
  return (
      <div className={classes.contactRoot}>
          homepageasdasdasdasdsa
      </div>
  )
}

export default ContactPage
