import React, { useEffect, useState } from 'react'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&with_networks=213");
            const response = await request.json();
            setMovie(
                response.results[
                Math.floor(Math.random() * response.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);


    return (
        <div>{/*background image*/}

            {/*title*/}
            {/*div -> buttons*/}
            {/*description*/}
        </div>
    )
}

export default Banner