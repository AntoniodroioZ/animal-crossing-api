import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import Modal from '@mui/material/Modal';
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';

const mayuscula = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}


export default function TarjetasLocalStorage(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [favorite, setFavorite] = React.useState(false); 

    const theme = useTheme();
    const tipo = props.tipo;

    React.useEffect(()=>{
        if(localStorage.getItem(props.name)!=null){
            setFavorite(true);
        }

    },[]);

 
    // console.log(localStorage.getItem(props.name));
    React.useEffect(()=>{
        if(favorite == true){
            localStorage.setItem(props.name,props.image);
        }
        if(favorite == false){
            localStorage.removeItem(props.name);
        }
    },[favorite]);

    return (
        <>
            <div className='pt-4 pl-1 pr-1'>
                <Card onClick={handleOpen} sx={{ display: 'flex' }}>
                    <CardActionArea>
                        <div className='columns-2 '>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    {/* <div className='flex justify-center'> */}
                                    <p className='font-bold text-center'>{mayuscula(props.name)}</p>
                                    {/* <p className='text-slate-500 text-center text-sm'>Price: {props.price}</p> */}
                                    {/* </div>   */}
                                </CardContent>

                            </Box>
                            <div className='flex justify-center items-center'>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100, height: 100 }}
                                    image={props.image}
                                    alt={mayuscula(props.name)}
                                />
                            </div>
                        </div>
                    </CardActionArea>
                </Card>
            </div>
        </>
    );
}


