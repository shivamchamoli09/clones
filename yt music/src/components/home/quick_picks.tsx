import { Box, Grid, Theme, Typography } from '@mui/material';
import React from 'react';
import { getMediaListByCount } from '../../core/services/content_manger.service';
import Row from '../wrappers/row';

const QuickPicks: React.FC<any> = ({ onClick, itemsPerRow }) => {
    const SongTemplate = ({ id, title, description, imageUrl }: any) => {
        return (
            <Box display="flex" mt={2}>
                <img
                    onClick={() => { handleMediaSelect({ id, title, description, imageUrl }) }}
                    style={{ borderRadius: '2px', cursor: 'pointer' }} src={imageUrl} width="50px" height={"50px"} />
                <Box ml={2}>
                    <Typography
                        onClick={() => { handleMediaSelect({ id, title, description, imageUrl }) }}
                        variant='h6' fontWeight={700} style={{ cursor: 'pointer' }}>{title}</Typography>
                    <Typography
                        onClick={() => { handleMediaSelect({ id, title, description, imageUrl }) }}
                        variant='body2' style={{ cursor: 'pointer' }}>{description}</Typography>
                </Box>
            </Box>
        )
    }

    function handleMediaSelect(media: any) {
        if (onClick) onClick(media)
    }

    const QuickPicksColumn = () => {
        const medias = getMediaListByCount(4);

        return (
            <Grid item md={4} sm={6} xs={12} maxWidth={"100%"}
                sx={(theme: Theme) => (
                    {
                        margin: itemsPerRow === 1 ? '0' : 'auto',
                        [theme.breakpoints.down('xs')]: {
                            margin: "0",
                        },
                    }
                )}
            >
                {medias?.map((media) => (
                    <SongTemplate id={media.id} imageUrl={media.imageUrl}
                        title={media.title}
                        description={media.description}
                        onClick={(media: any) => { onClick(media) }}
                    />
                ))}
                {/* <SongTemplate imageUrl={'/images/pick2.jpg'} title="Superheroes"
                    description="The Script: No Sound Without Silence"
                />
                <SongTemplate imageUrl={'/images/pick3.jpg'} title="Superheroes"
                    description="The Script: No Sound Without Silence"
                />
                <SongTemplate imageUrl={'/images/pick3.jpg'} title="Superheroes"
                    description="The Script: No Sound Without Silence"
                /> */}
            </Grid>
        )
    }

    return (
        <Row>
            <Typography variant='body1'>START RADIO BASED ON A SONG</Typography>
            <Typography variant='h1'>Quick picks</Typography>
            <Grid container mt={1}>
                {
                    Array.from({ length: itemsPerRow }, (_, index) => index + 1)?.map((val) => (<QuickPicksColumn />))
                }
            </Grid>
        </Row>
    )
}


export default QuickPicks