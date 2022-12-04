import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, islargeRow }) {
    // use state to store data temporarily
    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("https://youtu.be/sa9l-dTv9Gk");

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log(movie);
        movieTrailer(toString(movie || "")).then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
        }).catch((error) => console.log(error));

    }


    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    // string interpolation - use back ticks - with ${}${} and so on
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie.name)}
                        className={`row__poster ${islargeRow && "row__posterLarge"}`}
                        src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}

        </div>
    )
}

export default Row