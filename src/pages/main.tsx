import { Box, Container, createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react'
import Nav from '../components/nav';
import PageType from '../interfaces/page-interface';
import HomePage from './home';

import { HomeOutlined, InfoOutlined, PermContactCalendarOutlined, SettingsOutlined } from '@material-ui/icons/';
import AboutPage from './about';
import SkillsPage from './skills';
import ContactPage from './contanct';

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
        height:' 100vh',
        paddingLeft: 60
    }
}))


const pages: PageType[] = [
    { value: 'Home', page: <HomePage />, icon: <HomeOutlined /> },
    { value: 'About', page: <AboutPage />, icon: <InfoOutlined /> },
    { value: 'Skills', page: <SkillsPage />, icon: <SettingsOutlined /> },
    { value: 'Contact', page: <ContactPage />, icon: <PermContactCalendarOutlined /> },
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
            {page.page}
          </div>
      </Container>
  )
}

export default MainPage
