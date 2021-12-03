import React, { useEffect, useState } from "react";
// import axios from "axios";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

function Banner(props) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            axios
                .get(requests.fetchActionMovies)
                .then((request) => {
                    setMovie(
                        request.data.results[
                            Math.floor(
                                Math.random() * request.data.results.length - 1
                            )
                        ]
                    );
                })
                .catch(() =>
                    console.log(
                        "api is not working, Please connect with krishn @ krishn877@gmail.com"
                    )
                );
        }
        fetchData();
    }, []);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            {/* title */}
            {/* inside div 2 button */}
            {/* description */}
            <div className="banner_fadeButton"></div>
        </header>
    );
}

export default Banner;
