import Container from '@mui/material/Box';

import { useState, useEffect } from 'react';

import { Categories } from './CategoriesJSON';
import TarjetasSeleccionMenu from './TarjetasSeleccionMenu';
import PeticionesDatos from './PeticionesDatos';
import PeticionesAllItems from './PeticionesAllItems';
import { Co2Sharp } from '@mui/icons-material';
import TarjetasItemsDatos from './TarjetasItemsDatos';
import Button from '@mui/material/Button';

import TarjetasLocalStorage from './TarjetasLocalStorage';

const Listado = (props) => {
    const cate = Categories[1];

    const [seleccionLista, setSeleccionLista] = useState("");
    const [visible, setVisible] = useState(true);
    const [bugsVisible, setBugsVisible] = useState(false);
    const [fishVisible, setFishVisible] = useState(false);
    const [seaVisible, setSeaVisible] = useState(false);
    const [fossilsVisible, setFossilsVisible] = useState(false);
    const [back, setBack] = useState(false);

    const [favoriteItems, setFavoritesItems] = useState();

    const cardStyle = {
        width: '145px'
    }

    let listCards = cate.listCategories.map((item, idx) => {
        return (
            <div key={item.name} >
                <div style={cardStyle} onClick={() => { setVisible(false); setSeleccionLista(item.name); }}>
                    <TarjetasSeleccionMenu img={item.img} name={item.name} value={item.api_name} />
                </div>
            </div>);
    });

    useEffect(() => {
        // console.log(seleccionLista);
        if (seleccionLista == "Bugs") {
            setBugsVisible(true)
        }
        else { setBugsVisible(false) }
        if (seleccionLista == "Sea") {
            setSeaVisible(true)
        }
        else { setSeaVisible(false) }
        if (seleccionLista == "Fishes") {
            setFishVisible(true)
        }
        else { setFishVisible(false) }
        if (seleccionLista == "Fossils") {
            setFossilsVisible(true)
        }
        else { setFossilsVisible(false) }

    }, [seleccionLista, props.value]);

    useEffect(() => {
        if (visible == false) {
            setVisible(true);
        }
        // else{setVisible(false);}
    }, [props.value]);

    useEffect(() => {
        setVisible(true);
        setBack(false);
        // console.log(back);
    }, [back]);

    useEffect(()=>{

    },[]);

    const ocultar = {
        display: 'none'
    };

    const mostrar = {

    };
    const verificarLocalStorage = () => {
        let elements = [];
        if (localStorage.length == 0) {
            return (
                <div>
                    <div>
                        <p className='text-center text-2xl'>Favorites list</p>
                        <p>In this list you can see your favorites selections.</p>
                        <p>Explore the web to select your favorites.</p>
                    </div>


                </div>
            );
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                elements.push(localStorage.key(i));

            }
            // console.log(elements)
            return (
                <div className='pb-16'>
                    <div>
                        <p className='text-center text-2xl'>Favorites list</p>
                    </div>
                    <div className='columns-2'>
                        {elements.map((item, idx) => {
                            // console.log(item);
                            return (
                                <TarjetasItemsDatos key={idx} name={item} image={localStorage[item]} />
                            );
                        })}
                    </div>
                    {/* <div className='pt-4'>
                        <Button variant="contained" onClick={()=>{localStorage.clear()}}>Erase Favorites</Button>
                    </div> */}
                </div>
            );
        }
    }


    if (props.value == 0) {
        return (
            <div className='container mx-auto px-4'>
                <div className='flex justify-center p-20'>
                    <img src="https://www.animal-crossing.com/new-horizons/assets/img/global/logos/logo-acnh-en.png" alt="" />
                </div>
                <div className='text-center'>
                    <p className='text-3xl'>Welcome to the Animal Crossing New Horizons Encyclopedia!</p>
                    <br />
                    <p className='text-xl'>Select a category in the menu bar.</p>
                </div>
                <div>
                    {verificarLocalStorage()}
                </div>
            </div>
        );
    }
    if (props.value == 1) {
        return (
            <div className='container mx-auto px-4'>
                <div className='columns-2' style={visible == true ? mostrar : ocultar}>
                    <div className='flex justify-center'>
                        <div>
                            {listCards}
                        </div>
                    </div>
                </div>
                <div>
                    <div style={visible != true ? mostrar : ocultar}>
                        <a href='#' onClick={() => { setBack(true) }} className='btn-flotante'>Back</a>
                        {/* <PeticionesDatos value={2}/> */}
                        <div style={fishVisible == true ? mostrar : ocultar}><PeticionesDatos seccion={"fish"} /></div>
                        <div style={seaVisible == true ? mostrar : ocultar}><PeticionesDatos seccion={"sea"} /></div>
                        <div style={fossilsVisible == true ? mostrar : ocultar}><PeticionesDatos seccion={"fossils"} /></div>
                        <div style={bugsVisible == true ? mostrar : ocultar}><PeticionesDatos seccion={"bugs"} /></div>
                    </div>
                </div>
            </div>
        );
    }
    if (props.value == 2) {
        return (
            <div>
                <PeticionesDatos value={2} />
            </div>
        );
    }
    if (props.value == 3) {
        return (
            <div>
                <PeticionesDatos value={3} />
            </div>
        );
    }
    if (props.value == 4) {
        return (
            <div>
                <PeticionesAllItems />
                {/* <PeticionesAllItems seccion={'houseware'}/> */}
                {/* <PeticionesAllItems seccion={'wallmounted'} />
                <PeticionesAllItems seccion={'misc'} /> */}
            </div>
        );
    }
}

export default Listado;
