import { Box, Paper } from '@mui/material';
import React from 'react';
import Header from '../header';
import { useRouter } from 'next/router'

interface ILayoutProps {
    children: JSX.Element
}

const Layout: React.FC<any> = ({ children }: ILayoutProps) => {
    const router = useRouter();
    return <>
        <Header />
        <Paper sx={{ paddingTop: '60px', bgcolor: 'background.paper', height: '100%', backgroundImage: 'none' }}>
            {children}
        </Paper>
    </>
}

export default Layout;