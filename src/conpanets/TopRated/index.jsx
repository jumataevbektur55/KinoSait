import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import MovieCard from '../MovieCard';

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const [page,setPage] = useState(1)

    const getPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${page}`).then((res) =>{
            setPopular(res.data.results)
        } )
    }
    useEffect(() => {
        getPopular(API_KEY)
    },[page])
    console.log(popular);
    return (
        <div>
            <div id="popular">
                <div className="container">
            <h1>TopRated</h1>
                    <div className="popular">
                      {
                            popular.map((el) => <MovieCard el={el}/>)
                        }
                   
                    </div>
                    <div className="pogination">
                        <button onClick={()=> setPage(page > 1 ? page - 1 : page)}>back</button>
                        <h1>{page}</h1>
                        <button onClick={()=> setPage(page + 1)}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;