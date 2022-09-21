import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { IMedia } from '../../core/types';
import { LISTEN_AGAIN } from '../../core/content/home';
import { Divider } from '@mui/material';


interface IMediaList { }

const MediaList: React.FC<IMediaList> = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const SuggestedList = ({ lists }: { lists?: IMedia[] }) => {
        return (
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    maxHeight: 400,
                    bgcolor: 'background.paper',
                    overflowY: 'scroll',
                }}>
                {lists?.map((list: IMedia) => (
                    <>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={list?.imageUrl} style={{ width: '40px' }} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={list?.title} secondary={list?.description} />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        )
    }

    return (
        <Box sx={{ width: '100%', mt: 12 }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} id="media-list" aria-label="media-list"
                        style={{ justifyContent: 'center' }}
                        textColor="primary">
                        <Tab label="UP NEXT"
                            style={{ color: "white" }}
                            value="1" />
                        <Tab label="LYRICS" value="2"
                            style={{ color: value === '2' ? '#FFFFFF!important' : "rgba(255, 255, 255, 0.5)" }}
                            disabled />
                        <Tab label="RELATED"
                            style={{ color: value === '3' ? '#FFFFFF!important' : "rgba(255, 255, 255, 0.5)" }}
                            value="3" disabled />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <SuggestedList lists={LISTEN_AGAIN} />
                </TabPanel>
                <TabPanel value="2"></TabPanel>
                <TabPanel value="3"></TabPanel>
            </TabContext >
        </Box >
    );
}

export default MediaList;