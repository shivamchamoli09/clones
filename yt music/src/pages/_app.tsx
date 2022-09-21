import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { Box, ThemeProvider } from '@mui/material'
import { theme } from '../core/theme/manager'
import { Provider } from 'react-redux'
import store from '../core/store/root.store'
// import 'react-alice-carousel/lib/alice-carousel.css';
import '@shivamchamoli1997/carousel/dist/index.css';
import MediaFooter from '../components/media/media_footer'
import { Router, useRouter } from 'next/router'
import ActiveMedia from '../components/media/active_media'
import { useEffect, useRef, useState } from 'react'
import { IMedia } from '../core/types'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [openMedia, setOpenMedia] = useState(false);
  const scrollPositions = useRef<{ [url: string]: number }>({})
  const isBack = useRef(false)

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true
      return true
    })

    const onRouteChangeStart = () => {
      const url = router.pathname
      scrollPositions.current[url] = window.scrollY
    }

    const onRouteChangeComplete = (url: any) => {
      checkForMedia(url);
      if (isBack.current && scrollPositions.current[url]) {
        window.scroll({
          top: scrollPositions.current[url],
          behavior: "auto",
        })
      }

      isBack.current = false
    }

    router.events.on("routeChangeStart", onRouteChangeStart)
    router.events.on("routeChangeComplete", onRouteChangeComplete)

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart)
      router.events.off("routeChangeComplete", onRouteChangeComplete)
    }
  }, [router])


  const checkForMedia = (event: string) => {
    const activeMedia = event.split('?')[1]?.split('=')[1];
    if (activeMedia) {
      setOpenMedia(true);
    } else {
      setOpenMedia(false);
    }
  }

  function handleMediaFooterClick(val: IMedia) {
    setOpenMedia(true);
    return router.push(`/watch?v=${val?.id}`, '', { scroll: false })
  }

  function handleMediaClose(val: boolean) {
    setOpenMedia(val);
    return router?.back();
    // return router.push('/', '', { scroll: false })
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme('dark')}>
        <Layout>
          <Box pb={8}>
            <Component {...pageProps} />
          </Box>
          {/* <ActiveMedia onHide={handleMediaClose} openMedia={openMedia} /> */}
          <MediaFooter openMedia={handleMediaFooterClick} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
