import { Box, ButtonBase, Card, CardContent, CardMedia, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';

interface ICardProps {
    id?: string | number;
    imageUrl: string;
    title: string;
    description: string;
    showPlayIcon?: boolean;
    onClick?: (event: any) => void;
    style?: {};
}

const CardComponent: React.FC<ICardProps> = ({
    id, imageUrl, title, description, showPlayIcon = false, onClick, style
}) => {
    function handleClick() {
        if (onClick) {
            onClick({ id, title, description, imageUrl })
        }
    }

    // useEffect(() => {
    //     window.addEventListener('resize', function (event: UIEvent) {
    //         const w = event.target as Window;
    //         if (w.innerWidth <= 640) {
    //             containerStyle = { maxWidth: '150px' }
    //         }
    //     }, true);
    // })

    return (
        <Card
            // style={style}
            sx={{ boxShadow: 'none', background: 'inherit', ml: 'auto', mr: 'auto', mt: 2, ...style }}>
            <CardContent sx={{ p: 0, m: 0 }}>
                <Box sx={(theme: Theme) => (
                    {
                        maxWidth: "230px",
                        [theme.breakpoints.down('sm')]: {
                            maxWidth: "150px",
                        },
                    }
                )}>
                    <ButtonBase
                        // className={props.classes.cardAction}
                        onClick={() => { handleClick() }}
                        sx={{
                            position: 'relative',
                            '-webkit-filter': 'brightness(100%)',
                            '&:hover': {
                                '- webkit - filter': 'brightness(70%)',
                                '-webkit-transition': 'all 1s ease',
                                '-moz-transition': 'all 1s ease',
                                '-o-transition': 'all 1s ease',
                                '-ms-transition': 'all 1s ease',
                                'transition': 'all 1s ease'
                            }
                        }}
                    >
                        <Box sx={(theme: Theme) => (
                            {
                                height: "190px",
                                [theme.breakpoints.down('sm')]: {
                                    height: "150px",
                                },
                            }
                        )}>
                            <img src={imageUrl}
                                style={{ borderRadius: '4px', width: '100%', height: '100%' }} />
                            <img src="/images/play.png" style={{ position: 'absolute' }} />
                        </Box>
                    </ButtonBase>
                    <Box mt={1}>
                        <Typography variant='h6' textAlign={"left"}>{title}</Typography>
                        <Typography variant='body1' textAlign={"left"}
                            sx={{
                                'word-break': 'break-all',
                                'white-space': 'normal'
                            }}
                        >{description}</Typography>
                    </Box>
                </Box>
            </CardContent >
        </Card >)
}


export default CardComponent;