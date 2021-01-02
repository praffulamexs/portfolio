import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'
import NavType from '../interfaces/nav-interface';
import PageType from '../interfaces/page-interface';
import NavTabs from './nav-tab';

const useStyles = makeStyles((theme: Theme) => createStyles({
    navRoot: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#181818;'
    },
    logoDiv: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#000'
    },
    logo: {
      width: '100%',
      transition: 'scale 0.2s',
      '&:hover': {
        scale: 1.03,
        cursor: 'pointer'
      }
    },
    menuDiv: {
      flex: 14,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    socialDiv: {
      flex: 4,
    },
}))

const Nav: React.FC<NavType> = ({ pages, selected, changePage }) => {
  const classes = useStyles()
  return (
      <div className={classes.navRoot}>
        <div className={classes.logoDiv}>
          <img src='logo.png' className={classes.logo} />
        </div>
        <div className={classes.menuDiv}>
          <NavTabs pages={pages} selected={selected} changePage={changePage} />
        </div>
        <div className={classes.socialDiv}>

        </div>
      </div>
  )
}

export default Nav
