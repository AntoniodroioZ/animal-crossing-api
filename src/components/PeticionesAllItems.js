import axios from "axios";
import { useState, useEffect } from "react";

import TarjetaItemsDatos from "./TarjetasItemsDatos";

const baseURL = "https://acnhapi.com/v1/";

let seccion = ["home", "nature", "art", "villagers", "items"];


const PeticionesAllItems = (props) => {

    const [dataApi, setDataApi] = useState([]);
    const [dataApi2, setDataApi2] = useState([]);
    const [dataApi3, setDataApi3] = useState([]);
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

        axios.get(baseURL + "houseware")
            // axios.get(baseURL + seccion[3])
            .then(res => {
                const apiData = res.data;
                setDataApi(apiData);
                // console.log(apiData);

            })
            .catch(error => {
                console.log("error al hacer la petición a la API");
            });
        axios.get(baseURL + "wallmounted")
            // axios.get(baseURL + seccion[3])
            .then(res => {
                const apiData = res.data;
                setDataApi2(apiData);
                // console.log(apiData);

            })
            .catch(error => {
                console.log("error al hacer la petición a la API");
            });
        axios.get(baseURL + "misc")
            // axios.get(baseURL + seccion[3])
            .then(res => {
                const apiData = res.data;
                setDataApi3(apiData);
                // console.log(apiData);

            })
            .catch(error => {
                console.log("error al hacer la petición a la API");
            });
        setSpinner(false);
    }, [props.value, props.seccion]);

    // console.log(props.seccion);

    const handlerSearch = (event) => {
        SetSearch(event.target.value);
    }

    // useEffect(() => {
    //     // console.log(search);
    //     const elementosFilter = elementosJson.filter((data) =>
    //         data[search.toLowerCase()][0].name['name-USen'].includes(search.toLowerCase()));

    //     // console.log(elementosJson);
    //     setDataApi(elementosFilter);
    //     // console.log(elementosFilter);
    //     if (search == "") {
    //         setDataApi(dataRespaldo);
    //     }

    // }, [search]);


    Object.keys(dataApi).forEach(function (key, idx) {
        elementosJson.push(dataApi[key]);
        elementos.push(
            <TarjetaItemsDatos key={key} name={dataApi[key][0].name['name-USen']} image={dataApi[key][0].image_uri} price={dataApi[key][0]['buy-price']} sell_price={dataApi[key][0]['sell-price']}/>
        );
        // console.log(dataApi[key][0].image_uri);
    })
    Object.keys(dataApi2).forEach(function (key, idx) {
        elementosJson.push(dataApi2[key]);
        elementos.push(
            <TarjetaItemsDatos key={key} name={dataApi2[key][0].name['name-USen']} image={dataApi2[key][0].image_uri} />
        );
        // console.log(dataApi[key][0].image_uri);
    })
    Object.keys(dataApi3).forEach(function (key, idx) {
        elementosJson.push(dataApi3[key]);
        elementos.push(
            <TarjetaItemsDatos key={key} name={dataApi3[key][0].name['name-USen']} image={dataApi3[key][0].image_uri} />
        );
        // console.log(dataApi[key][0].image_uri);
    })

    return (
        <div className="container mx-auto px-auto">
            {/* <h1>Soy un componente de peticiones a la API</h1> */}
            {/* <div className="pt-4">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2"> 
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search" value={search} onChange={handlerSearch} />
                </label>
            </div> */}
            <div className="columns-2">
                {spinner == false ? elementos : <div>Cargando...</div>}
                {/* {console.log(elementos.length)} */}

            </div>
            <br /><br /><br />
        </div>
    );

}

export default PeticionesAllItems;