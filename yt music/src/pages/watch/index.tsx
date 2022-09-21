
import { Box, Grid, Paper, useTheme } from '@mui/material';
import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MediaList from '../../components/media/media_suggestions_list';
import VideoPlayer from '../../components/VideoPlayer';
import { findMediaById } from '../../core/services/content_manger.service';
import { setMedia } from '../../core/store/actions/current_media.action';
import store from '../../core/store/root.store';
import { IMedia } from '../../core/types';
import { motion } from 'framer-motion';

interface IActiveMedia {
    onHide?: (status: boolean) => void;
    openMedia?: boolean
}

const ActiveMedia: React.FC<IActiveMedia> = ({ onHide, openMedia }) => {
    const [activeMedia, setActiveMedia] = useState({} as IMedia);
    const router = useRouter();
    const dispatch = useDispatch();

    Router.events.on('routeChangeStart', (event: any) => {
        document.removeEventListener("keydown", escFunction, false);
    })

    useEffect(() => {
        const { v } = router.query;
        if (v) {
            const mediaFromSource = findMediaById(typeof v === 'string' ? v : v[0]);
            setActiveMedia(mediaFromSource);
            console.log(mediaFromSource);
            const storeMedia = store?.getState().mediaStore?.media as IMedia;
            if (!storeMedia?.title) {
                dispatch({ type: setMedia.toString(), payload: mediaFromSource });
            }
        }
    }, [router])

    const escFunction = (event: any) => {
        if (event.key === "Escape") {
            document.removeEventListener("keydown", escFunction, false);
            return router.back();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    }, []);

    const blackBox = {
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: 0,
        },
    };

    return (
        (
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="relative z-50 w-full bg-black"
                    initial="initial"
                    animate="animate"
                    variants={blackBox}            >
                    <Box sx={{
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: 'background.paper',
                        transform: (activeMedia?.title) ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform ease-out 0.3s',
                        overflowY: 'scroll'
                    }}>
                        <Grid container sx={{ height: '100%' }}>
                            <Grid item xs={12} md={8} sx={{ height: '100%' }}>
                                <Box sx={{
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {activeMedia?.videoUrl && (
                                        <VideoPlayer />
                                    )}
                                    {activeMedia?.imageUrl && (
                                        <img src={activeMedia?.imageUrl} style={{ maxWidth: '400px' }} />
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
                </motion.div>
            </div>
        )
    )
}

export default ActiveMedia;