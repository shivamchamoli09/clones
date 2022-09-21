import { Box, Grid, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import QuickPicks from '../components/home/quick_picks'
import RowLayout from '../components/home/row_layout'
import MediaFooter from '../components/media/media_footer'
import Row from '../components/wrappers/row'
import { FAVOURITES, LISTEN_AGAIN, MIXED_PLAYLIST, PLAYLISTS } from '../core/content/home'
import { useDispatch, useStore } from "react-redux";
import { setMedia } from '../core/store/actions/current_media.action'
import ActiveMedia from '../components/media/active_media'
import { useState } from 'react'
import store from '../core/store/root.store'
import Router, { useRouter } from 'next/router'
import { getMediaListByCount, getPlayListsByCount } from '../core/services/content_manger.service'
import { IMedia } from '../core/types'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [openMedia, setOpenMedia] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(6);
  const [quikPicksCount, setQuikPicksCount] = useState(3);

  useEffect(() => {
    const width = window.innerWidth;
    changeItemsCount(width);
    window.addEventListener('resize', function (event: UIEvent) {
      const w = event.target as Window;
      changeItemsCount(w.innerWidth);
    }, true);
  })

  const changeItemsCount = (width: number) => {
    if (width > 1300) {
      setItemsPerRow(6);
      setQuikPicksCount(3)
    }
    if (width >= 1045 && width <= 1300) {
      setItemsPerRow(5);
      setQuikPicksCount(2)
    } else if (width >= 850 && width < 1045) {
      setItemsPerRow(4);
    }
    else if (width >= 640 && width < 850) {
      setItemsPerRow(3);
    } else if (width < 640) {
      setItemsPerRow(2);
    }
    if (width < 480) {
      setQuikPicksCount(1)
    }
  }

  function onMediaSelect(media: IMedia) {
    console.log('media**********************', media)
    dispatch({ type: setMedia.toString(), payload: media });
    goToActiveMediaRoute(`/watch?v=${media?.id}`)
  }

  const handlePlaylist = (playlist: any) => {
    return router?.push(`/playlist?list=${playlist?.id}`)
  }

  function goToActiveMediaRoute(route: string) {
    return router.push(route, '', { scroll: false })
  }

  function handleMediaFooterClick(val: boolean) {
    setOpenMedia(val);
    goToActiveMediaRoute('/watch?v=123')
  }

  function handleMediaClose(val: boolean) {
    setOpenMedia(val);
    return router.push('/', '', { scroll: false })
  }

  return (
    <div style={{ padding: '0 20px' }}>
      <RowLayout title={"Listen again"} data={getMediaListByCount(12)} onClick={onMediaSelect} itemsPerRow={itemsPerRow} />

      <QuickPicks onClick={onMediaSelect} itemsPerRow={quikPicksCount} />

      <RowLayout title={"Your favourites"} data={getMediaListByCount(12)} onClick={onMediaSelect} itemsPerRow={itemsPerRow} />

      <RowLayout title={"Your Playlists"} data={getPlayListsByCount(0, 5)} onClick={handlePlaylist} itemsPerRow={itemsPerRow} />

      <RowLayout title={"Mixed for you"} data={getPlayListsByCount(5)} onClick={handlePlaylist} itemsPerRow={itemsPerRow}
        cardStyles={{ maxWidth: '190px' }} />
    </div>
  )
}

export default Home
