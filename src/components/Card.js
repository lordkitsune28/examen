import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url';


export const Card = ({ id, nombre, image, descuento, preciom, preciov, categoria}) => {
    const [charapter, setCharapter] = useState([])

    const getData = async () => {
        console.log(url)
        axios
            .get(url)
            .then((response) => {
                setCharapter(response.data.results);
                console.log(response.data.results)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        getData();
    }, [])


    return (

        <div >
            <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 200 }}>
                <div className="no-gutters">
                    <di>
                        <p>{descuento}</p>
                    </di>
                    <div className="">
                        <img src={image} className="card-img" alt={nombre} id={id} />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h6 className='d-inline-block'>{preciom}</h6><h6 className='text-muted d-inline-block text-decoration-line-through'>{preciov}</h6>
                            <p className="card-title">{nombre}</p>

                        </div>
                        <div className="btn btn-success w-75">
                            Agregar
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
