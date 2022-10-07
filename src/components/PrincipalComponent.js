// import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import ParkIcon from '@mui/icons-material/Park';
import MuseumIcon from '@mui/icons-material/Museum';
import FaceIcon from '@mui/icons-material/Face';
import CategoryIcon from '@mui/icons-material/Category';

import Listado from './Listado';

export default function PrincipalComponent() {
    const [value, setValue] = useState(0);

   

    return (
        <>
            <Listado value={value}/>
            <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Nature" icon={<ParkIcon />} />
                    <BottomNavigationAction label="Art" icon={<MuseumIcon />} />
                    <BottomNavigationAction label="Villagers" icon={<FaceIcon />} />
                    <BottomNavigationAction label="All items" icon={<CategoryIcon />} />
                </BottomNavigation>
            </Box>
        </>
    );
}

