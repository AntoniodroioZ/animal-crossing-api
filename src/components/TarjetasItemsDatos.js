import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';

const mayuscula = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}


export default function TarjetaItemsDatos(props) {

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

            <Modal
                className=' flex justify-center items-center '
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='bg-white p-8 w-64'>
                    
                    <Typography id="modal-modal-title flex" variant="h6" component="h2">
                        {mayuscula(props.name)}
                    </Typography>
                    <div className='flex justify-center '>
                        <CardMedia
                            component="img"
                            sx={{ width: 100, height: 100 }}
                            image={props.image}
                            alt={mayuscula(props.name)}
                        />
                    </div>
                    
                    <Typography id="modal-modal-description " sx={{ mt: 2 }}>
                        {props.saying == undefined ? "" : props.saying}
                        {props.museum_desc == undefined ? "" : props.museum_desc}
                        {props.museum_phrase == undefined ? "" : props.museum_phrase}

                    </Typography>
                    {props.birthday == undefined ? "" : <p>Birthday {props.birthday}</p>}
                    {props.hobby == undefined ? "" : <p>Hobby {props.hobby}</p>}
                    {props.personality == undefined ? "" : <p>Personality {props.personality}</p>}
                    {props.price == undefined ? "" : <br />}
                    <p className='text-slate-500  text-sm'>{props.price == undefined ? "" : "Price: "}{props.price}</p>

                    <p className='text-slate-500  text-sm'>{props.sell_price == undefined ? "" : "Sell price: "}{props.sell_price}</p>
                    <p className='text-slate-500  text-sm'>{props.price_natural == undefined ? "" : "Price: "}{props.price_natural}</p>
                    <p className='text-slate-500  text-sm'>{props.price_cj == undefined ? "" : "Price with CJ: "}{props.price_cj}</p>
                    <p className='text-slate-500  text-sm'>{props.price_flick == undefined ? "" : "Price with Flick: "}{props.price_flick}</p>

                    <div className="" id="favorite" data-pokeid="1" data-pokename="bulbasaur"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Press to add favorites">
                        <div className=''>
                            <i className={favorite == true ? "fa fa-star favorite star-favorite-on":"fa fa-star favorite"} onClick={()=>{setFavorite(!favorite)}} id="star-favorite-status" aria-hidden="true"></i>
                            {/* <i className="fa fa-star favorite" id="star-favorite-status" aria-hidden="true"></i> */}

                        </div>
                    </div>
                </Box>
                
            </Modal>

        </>
    );
}


