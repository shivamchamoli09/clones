import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { PLAYLIST_ITEMS } from '../../core/content/home';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setMedia } from '../../core/store/actions/current_media.action';
import { findPlaylistById, getMediaListByCount } from '../../core/services/content_manger.service';
import { IMedia } from '../../core/types';
import Dot from '../../components/wrappers/atoms/Dot';

const PlayList: React.FC<any> = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [openActionIndex, setOpenActionIndex] = useState(-1);
    const [playlist, setPlaylist] = useState({} as IMedia);

    useEffect(() => {
        const { list } = router.query;
        if (list) {
            const mediaFromSource = findPlaylistById(typeof list === 'string' ? list : list[0]);
            setPlaylist(mediaFromSource);
        }
    }, [router])

    const List = ({ lists }: any) => {

        return (
            <TableContainer sx={{ padding: '10px 60px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="list">
                    <TableBody sx={{ marginLeft: '20px' }}>
                        {lists.map((row: any, index: number) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left"
                                    sx={{ display: 'flex', alignItems: 'center', paddingLeft: 0, ml: 3 }}>
                                    <Link href={`/watch?v=${row?.id}`}>
                                        <a>
                                            <img src={row?.imageUrl}
                                                style={{ maxWidth: '35px', borderRadius: '3px', cursor: 'pointer' }} />
                                        </a>
                                    </Link>
                                    <Link href={`/watch?v=${row?.id}`} scroll={false}>
                                        <a>
                                            <Typography variant='h6' sx={{ cursor: 'pointer', fontWeight: 700, ml: 2 }}>
                                                {row.title}</Typography>
                                        </a></Link>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                                        <Link href={`/watch?v=${row?.id}`}>
                                            <a> <Typography variant='body1'>{row.singer}</Typography></a>
                                        </Link></Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                                        <Link href={`/watch?v=${row?.id}`}>
                                            <a> <Typography variant='body1'>
                                                {row.description}
                                            </Typography></a>
                                        </Link></Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                                        {row.time || '03:00'}</Typography></TableCell>
                            </TableRow >
                        ))}
                    </TableBody >
                </Table >
            </TableContainer >
        )
    }

    const IntroTemplate = () => {
        return (
            <Grid container>
                <Grid item xs={12} md={3} textAlign="end">
                    <img src={playlist?.imageUrl} style={{ maxWidth: '270px', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={12} md={9} alignSelf="center" pl={5}>
                    <Typography variant='h2' lineHeight={2}>{playlist?.title}</Typography>
                    <Typography variant='h6'>Playlist: Youtube Music &nbsp;
                        <Dot /> &nbsp; 2022
                    </Typography>
                    <Typography variant='h6' lineHeight={2}>100 songs &nbsp;
                        <Dot />&nbsp; 6 hours, 47 minutes
                    </Typography>

                    <Typography variant='h6'>A mix of songs that span all your tastes. Always updating.</Typography>

                    <Box mt={3}>
                        <Button variant='contained'
                            startIcon={<ShuffleIcon />}
                            sx={{ background: '#ffffff', color: '#000', fontWeight: 700 }}>SHUFFLE</Button>
                        <Button variant='outlined'
                            startIcon={<LibraryAddIcon />}
                            sx={{ color: '#ffffff', border: '1px solid #fff', fontWeight: 700, ml: 2 }}>ADD TO LIBRARY</Button>
                    </Box>
                </Grid>
            </Grid>
        )
    }

    return (
        <Box sx={{ height: '100%' }} p={7}>
            <IntroTemplate />

            <Box mt={6}>
                <List lists={getMediaListByCount(10)} />
            </Box>
        </Box>
    )
}

export default PlayList;