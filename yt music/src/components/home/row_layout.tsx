import { Typography, Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardComponent from '../Card';
import Row from '../wrappers/row';
import { IMedia } from '../../core/types';
import ReactSimplyCarousel from 'react-simply-carousel';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import Carousel from 'react-material-ui-carousel'
import AliceCarousel from 'react-alice-carousel';
import { Carousel, CarouselItem } from '@shivamchamoli1997/carousel/dist';

interface IRowLayoutProps {
    title: string | number;
    data: IMedia[];
    onClick?: (event: any) => void;
    itemsPerRow: number;
    cardStyles?: {}
}

const RowLayout: React.FC<IRowLayoutProps> = ({ title, data, onClick, itemsPerRow, cardStyles }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([] as any);
    function handleCardClick(media: any) {
        if (onClick) onClick(media)
    }

    function handleCarouselAction(type: string) {
        if (type === 'FORWARD' && (activeSlideIndex + 1 < carouselItems?.length)) {
            setActiveSlideIndex((prev) => prev + 1)
        } else if (type === "BACKWARD" && (activeSlideIndex > 0)) {
            setActiveSlideIndex((prev) => prev - 1)
        }
    }

    useEffect(() => {
        if (!data?.length) return;
        let totalItems = JSON.parse(JSON.stringify(data));
        const itemsInRow = [];
        while (totalItems.length) {
            itemsInRow.push(totalItems.splice(0, itemsPerRow));
        }
        setCarouselItems(itemsInRow);
    }, [data]);

    return (
        <Box sx={{ padding: '36px 0', maxWidth: '1264px', m: 'auto' }}>
            <Box display="flex">
                <Typography variant='h1' fontWeight={700}>{title}</Typography>
                <Box display='flex' ml="auto">
                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: 'solid 1px rgba(255,255,255,0.3)',
                        position: 'relative',
                        textAlign: 'center',
                        cursor: activeSlideIndex === 0 ? 'auto' : 'pointer',
                        opacity: activeSlideIndex === 0 ? '0.4' : '1',
                        '&:hover': {
                            background: activeSlideIndex === 0 ? '' : 'rgba(255,255,255,0.1)'
                        }
                    }}
                        onClick={() => { handleCarouselAction("BACKWARD") }}
                    ><ChevronLeftIcon style={{ marginTop: '7px' }} /></Box>
                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: 'solid 1px rgba(255,255,255,0.3)',
                        position: 'relative',
                        textAlign: 'center',
                        ml: 2,
                        cursor: activeSlideIndex === carouselItems?.length - 1 ? 'auto' : 'pointer',
                        opacity: activeSlideIndex === carouselItems?.length - 1 ? '0.4' : '1',
                        '&:hover': {
                            background: activeSlideIndex === carouselItems?.length - 1 ? '' : 'rgba(255,255,255,0.1)'
                        }
                    }}
                        onClick={() => { handleCarouselAction("FORWARD") }}
                    ><ChevronRightIcon style={{ marginTop: '7px' }} /></Box>
                </Box>
            </Box>
            <Box display='flex' p={0} sx={{ margin: '0 -10px' }}>
                <Carousel
                    infiniteSlide={false} autoSlide={false} autoSlideInterval={1000}
                    pauseOnHover={true} showIndicators={false}
                    currentIndex={activeSlideIndex}
                    tansition={1}
                >
                    {carouselItems?.map((medias: IMedia[], i: number) => (
                        <CarouselItem style={{ display: 'flex' }}>
                            {
                                medias?.map((media: IMedia, index: number) => (
                                    <CardComponent
                                        id={media?.id}
                                        style={index === 0
                                            ? { ...cardStyles } :
                                            (index === itemsPerRow - 1 && i === activeSlideIndex) ?
                                                { ...cardStyles } : { ...cardStyles }}
                                        title={media?.title} description={media?.description}
                                        imageUrl={`${media?.imageUrl}`} onClick={handleCardClick} />
                                ))
                            }
                        </CarouselItem>
                    )
                    )
                    }
                </Carousel>
            </Box>
        </Box >
    )
}

export default RowLayout;