import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    // use state to store data temporarily
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
        //if a external variale is passed inside to a useEffect then it
        //should be passed in to the block at the end as a dependency
    }, [fetchUrl])

    console.log(movies);
    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {/* container  - posters*/}
                {movies.map(movie => (
                    // string interpolation - use back ticks - with ${}${} and so on
                    <img className='row__poster'
                        src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>



        </div>
    )
}

export default Row