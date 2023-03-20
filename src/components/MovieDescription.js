import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";


const MovieDescription = ({ Movies }) => {
    const { id } = useParams();
    const [moviesDescr, setMoviesDescr] = useState({});

    useEffect(() => {
        setMoviesDescr(Movies.find((film) => film.id == id));
    }, []);

    return (
        <div style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          width: "50%",
          margin: "20px auto",
        }}>
            <h5>{moviesDescr.description}</h5>
           
            <ReactPlayer url={moviesDescr.trailer} />
        </div>
    );
};

export default MovieDescription;
