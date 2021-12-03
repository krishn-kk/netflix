import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
    const { title, fetchUrl, isLargeRow } = props;
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movie.map((mov) => (
                    <img
                        key={mov.id}
                        className={`row_poster ${
                            isLargeRow && "row_posterLarge"
                        }`}
                        src={`${base_url}${
                            isLargeRow ? mov.poster_path : mov.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
