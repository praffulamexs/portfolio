import { Box, Container, createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react'
import Nav from '../components/nav';
import PageType from '../interfaces/page-interface';
import HomePage from './home';

import { Home, Info } from '@material-ui/icons/';

const useStyles = makeStyles((theme: Theme) => createStyles({
    mainRoot: {
        height: '100vh',
        maxHeight: '100vh',
        padding: 0,
        maxWidth: '100vw',
    },
    navBarDiv: {
        width: 60,
        maxWidth: 60,
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 10,
        borderRadius: 0,
    },
    contentDiv: {
        width: '100vw',
        height:' 100vh',
    }
}))


const pages: PageType[] = [
    { value: 'Home', page: HomePage, icon: <Home /> },
    { value: 'About', page: HomePage, icon: <Info /> },
]

const MainPage: React.FC = () => {
  const classes = useStyles()
  const [page, setPage] = React.useState(pages[0]);

  const changePage = (page: PageType) => {
      setPage(page)
  }
  
  return (
      <Container className={classes.mainRoot} maxWidth='xl'>
          <Paper className={classes.navBarDiv} elevation={5}>
            <Nav pages={pages} selected={page} changePage={(page: PageType) => changePage(page)} />
          </Paper>
          <div className={classes.contentDiv}>
            
          </div>
      </Container>
  )
}

export default MainPage
