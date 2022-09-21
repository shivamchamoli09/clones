import { Box, Grid, IconButton, LinearProgress, Theme, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import store from '../../core/store/root.store';
import { IMedia } from '../../core/types';

interface IMediaFooter {
    openMedia: (val: IMedia) => void
}

const MediaFooter: React.FC<IMediaFooter> = ({ openMedia }) => {
    const theme = useTheme();
    const [media, setMedia] = useState({} as any)

    function MediaAction1() {
        return (
            <>
                <IconButton sx={(theme: Theme) => (
                    {
                        ml: 2,
                        [theme.breakpoints.down('md')]: {
                            ml: 0
                        },
                    }
                )}>
                    <SkipPreviousIcon sx={{ color: 'white' }} />
                </IconButton>
                <IconButton sx={(theme: Theme) => (
                    {
                        ml: 1,
                        [theme.breakpoints.down('md')]: {
                            ml: 0
                        },
                    }
                )}>
                    <PlayArrowIcon sx={{ fontSize: '40px' }} />
                </IconButton>
                <IconButton sx={(theme: Theme) => (
                    {
                        ml: 1, mr: 3,
                        [theme.breakpoints.down('md')]: {
                            ml: 0,
                            mr: 0
                        },
                    }
                )}>
                    <SkipNextIcon />
                </IconButton></>
        )
    }

    function MediaActoin2() {
        return (
            <>
                <IconButton sx={{ ml: 'auto' }}>
                    <VolumeUpIcon sx={{ color: 'white' }} />
                </IconButton>
                <IconButton sx={{ ml: 1 }}>
                    <RepeatIcon />
                </IconButton>
                <IconButton sx={{ mr: 3, ml: 1 }}>
                    <ShuffleIcon />
                </IconButton></>
        )
    }

    function handleClick() {
        openMedia(media)
    }

    store.subscribe(() => {
        const mediaStore = store.getState()?.mediaStore?.media as any;
        setMedia(mediaStore);
    })

    return (
        media?.title ? (
            <Box sx={{
                position: 'fixed', bottom: 0, height: '72px',
                width: '100%',
                background: theme?.palette?.background?.default,
                zIndex: 5,
            }}
                onClick={handleClick}
            >
                {/* <LinearProgress 
                value={5} color="secondary"
                /> */}
                < Grid container sx={{ height: '100%' }
                }>
                    <Grid item md={2} sm={2} xs={4} justifyContent="center" alignSelf={"center"}>
                        <MediaAction1 />
                    </Grid>

                    <Grid item md={8} sm={8} xs={8} sx={{ display: 'flex' }} justifyContent="center" alignItems={"center"}>
                        <img src={media?.imageUrl} style={{ maxWidth: '70px', height: '50px', borderRadius: '3px' }} />
                        <Box ml={1.5}>
                            <Typography variant="h6" lineHeight={1}>{media?.title}</Typography>
                            <Typography variant='body1' lineHeight={1.5}>{media?.description}</Typography>
                        </Box>
                    </Grid>

                    <Grid item md={2} sm={2}
                        sx={(theme: Theme) => ({
                            display: 'flex',
                            [theme.breakpoints.down('sm')]: {
                                display: 'none'
                            },
                        })}
                    >
                        <MediaActoin2 />
                    </Grid>
                </Grid >
            </Box >
        ) :
            <></>)
}

export default MediaFooter;