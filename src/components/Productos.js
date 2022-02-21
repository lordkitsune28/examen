import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url'
import { Banner } from './banner';
import { Populares } from './Populares';
// import CharapterCard from './CharapterCard'

const Productos = () => {
    const [charapter, setCharapter] = useState([]);


    const getData = async () => {
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
        <div>
            <Banner />
            <Populares />
            {/* {
                <div className="card-columns">
                    {
                        charapter.map(charap => (
                            <CharapterCard key={charap.id}
                                {...charap}
                            />
                        ))
                    }
                </div>

            } */}


        </div>
    )
}

export default Productos