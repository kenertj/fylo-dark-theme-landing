import React from 'react'
import { Stack, AppBar, Toolbar, Box, Link } from '@mui/material';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <AppBar
            elevation={0}
            sx={{
                background: '#1c2230'
            }}
        >
            <Toolbar>
                <Box
                    component="img"
                    sx={{
                        height: 44,
                    }}
                    alt="Logo"
                    src={Logo}
                />
                <Stack
                    direction="row"

                    gap="50px"
                    fontFamily="Raleway"
                    fontSize="14px"
                    alignItems="flex-end"
                    marginLeft="auto"
                >
                    <Link href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#f9ffff',
                            fontWeight: '400',
                            ':hover': {
                                fontWeight: '700',
                                textDecoration: 'underline'
                            },
                        }}
                    >Features</Link>
                    <Link href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#f9ffff',
                            fontWeight: '400',
                            ':hover': {
                                fontWeight: '700',
                                textDecoration: 'underline'
                            },
                        }}
                    >Team</Link>
                    <Link href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#f9ffff',
                            fontWeight: '400',
                            ':hover': {
                                fontWeight: '700',
                                textDecoration: 'underline'
                            },
                        }}

                    >Sign in</Link>
                </Stack>

            </Toolbar>

        </AppBar>
    )
}

export default Navbar