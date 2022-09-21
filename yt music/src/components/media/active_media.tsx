import { Box, Grid, Paper, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../core/store/root.store';
import { IMedia } from '../../core/types';
import VideoPlayer from '../VideoPlayer';
import MediaList from './media_suggestions_list';

interface IActiveMedia {
    onHide?: (status: boolean) => void;
    openMedia?: boolean
}

const ActiveMedia: React.FC<IActiveMedia> = ({ onHide, openMedia }) => {
    const [media, setMedia] = useState({} as IMedia);

    // store.subscribe(() => {
    //     const mediaStore = store.getState()?.mediaStore?.media as any;
    //     setMedia({
    //         title: mediaStore?.title,
    //         description: mediaStore?.description,
    //         imageUrl: mediaStore?.imageUrl
    //     })
    // });

    const escFunction = (event: any) => {
        if (event.key === "Escape") {
            console.log('aaaaaaaaaaa')
            //Do whatever when esc is pressed
            if (onHide) onHide(false)
            document.removeEventListener("keydown", escFunction, false);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    }, []);

    // if (!openMedia) {
    //     return <></>
    // }

    return (
        (
            <Box sx={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'background.paper',
                transform: (media?.title && openMedia) ? 'translateY(0)' : 'translateY(100%)',
                transition: 'transform ease-out 0.3s'
            }}>
                <Grid container sx={{ height: '100%' }}>
                    <Grid item xs={12} md={8} sx={{ height: '100%' }}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {media?.videoUrl && (
                                <VideoPlayer />
                            )}
                            {media?.imageUrl && (
                                <img src={media?.imageUrl} style={{ maxWidth: '400px' }} />
                            )}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{
                        // display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: 'center'
                    }}>
                        <MediaList />
                    </Grid>
                </Grid>
            </Box >
        )
    )
}

export default ActiveMedia;