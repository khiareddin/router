import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import MovieDescription from "./MovieDescription";

const Movie = ({ Movies }) => {
    //console.log(Movies)
    //Movies is a table
    return (
        //inlinestyle
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                width: "70%",
                margin: "20px auto",
            }}
        >
            {Movies.map((Film) => {
                return (
                    //React return un seul elt n8alifouha b div pour return +sieurs elts
                    <div key={Film.id}>
                        <Link to={`MovieDescription/${Film.id}`}>
                            <img src={Film.img} height={180} width={150} />
                            <h3> {Film.name} </h3>
                        </Link>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                            value={Film.rating}
                        />
                        ,
                    </div>
                );
            })}
        </div>
    );
};

export default Movie;
