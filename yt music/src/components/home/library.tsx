import { Typography } from '@mui/material';
import React from 'react';
import Row from '../wrappers/row';

interface ILibrary {
    title: string
}

const Library: React.FC<ILibrary> = ({ title }) => {
    return (
        <Row>
            <Typography variant='h1' fontWeight={700}>{title}</Typography>
        </Row>
    )
}

export default Library;