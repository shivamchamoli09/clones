import { Box } from '@mui/material';
import React from 'react';

const Row: React.FC<any> = ({ children }: { children: JSX.Element }) => {
    return (
        <Box sx={{ padding: '36px 0', maxWidth: '1264px', m: 'auto' }}>
            {children}
        </Box>)
}

export default Row;