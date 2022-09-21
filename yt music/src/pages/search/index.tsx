import { Box, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Dot from '../../components/wrappers/atoms/Dot';
import { IMedia } from '../../core/types';
import { getMediaListByCount, getPlayListsByCount } from '../../core/services/content_manger.service';
import Link from 'next/link';

const MEDIAS = getMediaListByCount(5);
const PLAYLISTS = getPlayListsByCount(0, 1);

const SearchPage: React.FC<any> = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const MediaTemplate = ({ data, type }: { data: IMedia, type: string }) => {
        console.log(data)
        return (
            <Box display='flex' mt={2.5} alignItems="center">
                <Link
                    href={type === ' Playlist' ? `/playlist?list=${data?.id}` : `/watch?v=${data?.id}`}
                >
                    <a>
                        <img src={data?.imageUrl} style={{
                            cursor: 'pointer',
                            maxWidth: '50px',
                            borderRadius: '5px',
                            maxHeight: '50px'
                        }} /></a>
                </Link>

                <Box ml={2}>
                    <Link
                        href={type === ' Playlist' ? `/playlist?list=${data?.id}` : `/watch?v=${data?.id}`}
                    >
                        <a>
                            <Typography variant='h6' lineHeight={1.5}>{data?.title}</Typography>
                        </a>
                    </Link>
                    <Link
                        style={{}}
                        href={type === ' Playlist' ? `/playlist?list=${data?.id}` : `/watch?v=${data?.id}`}
                    >
                        <a>
                            <Typography variant='h6'>{type}: Youtube Music &nbsp;
                                <Dot /> &nbsp; 2022
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Box >
        )
    }

    return (
        <Grid container style={{ padding: '20px' }}>
            <Grid item md={6} sm={12} xs={12} margin="auto">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="YT Music" value="1" style={{ color: "white" }} />
                            <Tab disabled label="Library" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"></TabPanel>
                    <TabPanel value="2">Library</TabPanel>
                </TabContext>

                <Box mt={2}>
                    <Typography variant='h4' fontWeight={700}>Top result</Typography>
                    {PLAYLISTS?.map((playlist: any) => (
                        <MediaTemplate
                            data={playlist}
                            type="Playlist"
                        />
                    ))}
                </Box>

                <Box mt={6}>
                    <Typography variant='h4' fontWeight={700}>Songs</Typography>
                    {MEDIAS?.map((media: any) => (
                        <>
                            <MediaTemplate
                                data={media}
                                type="Songs"
                            />
                            <Divider sx={{ mt: 2 }} />
                        </>
                    ))}
                    {/* <MediaTemplate
                        data={{
                            title: 'Paradise',
                            description: '',
                            imageUrl: '/images/thumb2.jpg'
                        }}
                        type="Songs"
                    /> */}
                </Box>
            </Grid>
        </Grid>
    )
}

export default SearchPage;