import React, {useEffect, useState} from 'react'
import axios from 'axios';
import "../styled/targetitas.css"
import { url } from '../helpers/url';
import {Card} from './Card'

export const Populares = () => {
    const [charapter, setCharapter] = useState([]);


    const getData = async () => {
        let res = await fetch(url);
        let data = await res.json();
        const descuento = data.filter((val) => val.categoria === "oferta")
        setCharapter(descuento);
    };

    useEffect(() => {
        getData();
    }, [])
  return (
    <div className="w-100">
        <h3>Ofertas</h3>
        <div className="mx-auto targetitas">

              {
                  <div className="card-group">
                      {
                          charapter.map(charap => (
                              <Card key={charap.id}
                                  {...charap}
                              />
                          ))
                      }
                  </div>

              }
            </div>
    </div>
  )
}
