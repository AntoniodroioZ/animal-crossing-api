import axios from "axios";
import { useState, useEffect } from "react";

import TarjetaItemsDatos from "./TarjetasItemsDatos";

const baseURL = "https://acnhapi.com/v1/";

let seccion = ["home", "nature", "art", "villagers", "items"];


const PeticionesDatos = (props) => {

    const [dataApi, setDataApi] = useState([]);
    const [dataRespaldo, setDataRespaldo] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [search, SetSearch] = useState("");

    const elementos = [];
    const elementosJson = [];

    // console.log(props.value);

    // console.log(elementos.length);
    useEffect(() => {
        // setDataApi([]);
        let consulta = "";
        if (props.seccion != undefined) {
            consulta = props.seccion;
        } else {
            consulta = seccion[props.value];
        }

        axios.get(baseURL + consulta)
            // axios.get(baseURL + seccion[3])
            .then(res => {
                const apiData = res.data;
                setDataApi(apiData);
                setDataRespaldo(apiData);
                // console.log(apiData);

            })
            .catch(error => {
                console.log("error al hacer la petición a la API");
            })
        setSpinner(false);
    }, [props.value, props.seccion]);

    const handlerSearch =(event)=>{
        SetSearch(event.target.value);
    }

    useEffect(()=>{
        // console.log(search);
        const elementosFilter = elementosJson.filter((data)=>
        data.name['name-USen'].includes(search.toLowerCase()));

        // console.log(elementosJson);
        setDataApi(elementosFilter);
        // console.log(elementosFilter);
        if(search == ""){
            setDataApi(dataRespaldo);
        }

    },[search]);

    // console.log(props.seccion);

    
    Object.keys(dataApi).forEach(function (key, idx) {
        elementosJson.push(dataApi[key]);
        elementos.push(
            <TarjetaItemsDatos key={idx} name={dataApi[key].name["name-USen"]} image={dataApi[key].image_uri} price={dataApi[key]['buy-price']} saying={dataApi[key].saying} museum_desc={dataApi[key]['museum-desc']} museum_phrase={dataApi[key]['museum-phrase']} birthday={dataApi[key]['birthday-string']} personality={dataApi[key].personality} hobby={dataApi[key].hobby} price_natural={dataApi[key].price} price_cj={dataApi[key]['price-cj']} price_flick={dataApi[key]['price-flick']} />
        );
    })
    // console.log(elementosJson);

    return (
        <div className="container mx-auto px-auto">
            {/* <h1>Soy un componente de peticiones a la API</h1> */}
            <div className="pt-4">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search" value={search} onChange={handlerSearch}/>
                </label>
            </div>
            <div className="columns-2">
                {spinner == false ? elementos : <div>Cargando...</div>}
                {/* {console.log(elementos.length)} */}

            </div>
            <br /><br /><br />
        </div>
    );

}

export default PeticionesDatos;