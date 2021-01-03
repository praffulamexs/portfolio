import { createStyles, makeStyles, Theme, Tooltip } from '@material-ui/core';
import { EmailOutlined, Facebook, GitHub, LinkedIn, PhoneIphoneOutlined, Twitter } from '@material-ui/icons';
import React from 'react'
import SocialType from '../interfaces/social-interface';

const useStyles = makeStyles((theme: Theme) => createStyles({
    socialRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    social: {
        color: '#a3a3a3',
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 12,
        cursor: 'pointer',
        transition: 'color 1s, scale 0.2s',
        '&:hover': {
            color: '#08fdd8',
            scale: 1.1
        }
    }
}))

const allSocial: SocialType[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prafful-jagtap/', icon: <LinkedIn fontSize='small' /> },
    { name: 'GitHub', url: 'https://github.com/praffulamexs', icon: <GitHub fontSize='small' /> },
    { name: 'Facebook', url: 'https://www.facebook.com/prafful.jagtap.92/', icon: <Facebook fontSize='small' /> },
    { name: 'Twitter', url: 'https://twitter.com/jagtap_prafful?s=08', icon: <Twitter fontSize='small' /> },
]

const Social: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.socialRoot}>
            {allSocial.map((social, index) => (
                <div key={index} onClick={() => window.open(social.url, '_blank')} className={classes.social}>
                    <Tooltip placement='right' title={social.name}>
                        {social.icon}
                    </Tooltip>
                </div>
            ))}
            <div onClick={() => window.open('mailto:prafful.jagtap1995@gmail.com')} className={classes.social}>
                <Tooltip placement='right' title='Email'>
                    <EmailOutlined fontSize='small' />
                </Tooltip>
            </div>
            <div onClick={() => window.open('tel:+61448336086')} className={classes.social}>
                <Tooltip placement='right' title='Phone'>
                    <PhoneIphoneOutlined fontSize='small' />
                </Tooltip>
            </div>
        </div>
    )
}

export default Social
