import { Avatar, Box, ButtonBase, FormControl, Grid, SvgIcon, TextField, Theme, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { YtLogo } from '../../static';
import CastConnectedOutlinedIcon from '@mui/icons-material/CastConnectedOutlined';
import { useRouter } from 'next/router';
import Autocomplete from '@mui/material/Autocomplete';

const Header: React.FC<any> = () => {
    const router = useRouter();
    const [search, setSearch] = useState(false);
    let inputRef: any;

    function goToHome() {
        return router.push('/');
    }

    const showSearch = () => {
        setSearch(true);
    }

    useEffect(() => {
        if (search) {
            inputRef.focus();
        }
    }, [search])

    const handleFocusOut = () => {
        if (!document.getElementById('search').value?.length) {
            setSearch(false);
        }
    }

    const handeSubmit = (event: any) => {
        event.preventDefault();
        const searchValue = document.getElementById('search').value;
        if (!searchValue?.length) return;
        return router.push(`/search?q=${searchValue}`);
    }

    return (
        <Box
            sx={{
                zIndex: 3, bgcolor: 'background.paper',
                height: '64px', padding: '20px 16px', position: 'fixed', width: '100%'
            }}>
            <Grid container>
                <Grid item xs={2}>
                    <ButtonBase
                        onClick={goToHome}>
                        <SvgIcon component={YtLogo} viewBox="0 0 384 512" />
                    </ButtonBase>
                </Grid>

                <Grid item xs={8}
                    sx={
                        (theme: Theme) => ({
                            display: 'flex',
                            [theme.breakpoints.down('sm')]: {
                                justifyContent: 'end'
                            },
                        })}
                    justifyContent="center">
                    {search && (
                        <form style={{ width: '100%', padding: '0 20px' }} onSubmit={handeSubmit}>
                            <Autocomplete
                                id="search"
                                freeSolo
                                style={{ maxWidth: '860px', height: '48px', width: '100%' }}
                                onBlur={handleFocusOut}
                                // options={top100Films.map((option) => option.title)}
                                renderInput={(params) => <TextField
                                    {...params} label="Search"
                                    inputRef={input => {
                                        inputRef = input;
                                    }}
                                    placeholder="Search"
                                    variant="outlined"
                                    style={{ backgroundColor: '#333', marginTop: '-15px', color: '#FFF' }}
                                />} options={[]} />
                        </form>
                    )}
                    {!search && (
                        <>
                            <Box display="flex"
                                sx={(theme: Theme) => ({
                                    [theme.breakpoints.down('sm')]: {
                                        display: 'none'
                                    },
                                })}
                            >
                                <Typography variant='h5' sx={{ m: '0px 10px' }}>Home</Typography>
                                <Typography variant='h5' sx={{ m: '0px 10px' }}>Explore</Typography>
                                <Typography variant='h5' sx={{ m: '0px 10px' }}>Library</Typography>
                            </Box>
                            <Typography variant='h5'
                                sx={(theme: Theme) =>
                                ({
                                    m: '0px 10px', cursor: 'pointer',
                                    [theme.breakpoints.down('sm')]: {
                                        mr: 5
                                    },
                                })}
                                onClick={showSearch}>Search</Typography>
                        </>
                    )}
                </Grid>

                <Grid item xs={1} sx={{ display: 'flex' }} marginLeft="auto"
                    justifyContent={"end"} alignItems="center">
                    <CastConnectedOutlinedIcon style={{ color: '#fff' }} />
                    <Avatar sx={{ width: '30px', height: '30px', marginLeft: '20px' }} />
                </Grid>
            </Grid >
        </Box >
    )
}

export default Header;