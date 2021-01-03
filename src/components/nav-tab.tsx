import { createStyles, makeStyles, Theme, Tooltip } from '@material-ui/core';
import React from 'react'
import NavType from '../interfaces/nav-interface';

const useStyles = makeStyles((theme: Theme) => createStyles({
    navTabsRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    tab: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'background-color 1s',
        '&:hover': {
            backgroundColor: 'black'
        }
    },
    selected: {
        color: '#08fdd8',
    },
    unselected: {
        color: '#a3a3a3'
    }
}))

const NavTabs: React.FC<NavType> = ({ pages, selected, changePage }) => {
    const classes = useStyles()
    return (
        <div className={classes.navTabsRoot}>
            {pages.map((page, index) => (
                <div
                    onClick={() => changePage(page)}
                    key={index} 
                    className={page.value.toLowerCase() === selected.value.toLowerCase() ? `${classes.tab} ${classes.selected}` : `${classes.tab} ${classes.unselected}`}
                >
                    <Tooltip placement='right' title={page.value}>
                        {page.icon}
                    </Tooltip>
                </div>
            ))}
        </div>
    )
}

export default NavTabs
