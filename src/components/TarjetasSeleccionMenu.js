// import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import PeticionesDatos from './PeticionesDatos';


export default function TarjetasSeleccionMenu(props) {

    const [seleccionLista, setSeleccionLista] = useState("");

    const retornarListado = () =>{
        // document.getElementById('base').innerHTML = <PeticionesDatos/>;
    }
    // useEffect(()=>{
    //     console.log(seleccionLista);
    //     // return(<PeticionesDatos value={2}/>);
    //     // <PeticionesDatos value={2}/>
    //     retornarListado();
    // },[seleccionLista]);


    return (
        <div id='base'>
            <div className='flex justify-center pt-24 '>
                <Card sx={{ minWidth: 145 }}
                    // onClick={() => setSeleccionLista(props.value)}
                    >
                    <CardActionArea>
                        <div className='flex justify-center'>
                            <CardMedia
                                component="img"
                                height="140"
                                image={props.img}
                                alt={props.name}
                                sx={{ maxWidth: 100 }}
                            />
                        </div>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='text-center'>
                                {props.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

// import React, { useState } from 'react';

// function Contact() {
//     return(
//         <>
//           <h2>1Youre in Contact</h2>
//           <p>1Have a good day !!!</p>
//         </>
//     );
// }

// export default function TarjetasSeleccionMenu(props) {
//     const [contact,setContact] = useState(null);

//     return(
//         <>
//           <h2>Youre in Home</h2>
//           <button 
//             onClick={
//               () => setContact(contact === null ? <><Contact /><Contact /></>: null)}
//           >
//             Go to Contact
//           </button>
//           {contact}
//         </>
//     );
// }