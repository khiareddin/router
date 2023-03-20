import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import MovieContainer from "./components/MovieContainer";
import Addmovies from "./components/Addmovies";
import MovieDescription from "./components/MovieDescription"



import { useState } from "react";

function App() {
    // const[getter(parametre), setter(fonction de state)]= useState(valeur initial (exp: 0, [],(),false, true)
    //state of functional component via Hooks (stockage des données)(useState)
    const [Movies, SetMovies] = useState([
        {
            id: Math.random(),
            img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
            name: "Jhon Wick",
            rating: 4,
            trailer: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
            description: "John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad.",
        },
        {
            id: Math.random(),
            img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
            name: "Avatar",
            rating: 2,
            trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
            description: "Avatar (also marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver.",
        },
        {
            id: Math.random(),
            img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
            name: "Iron Man 2",
            rating: 5,
            trailer: "https://www.youtube.com/watch?v=wKtcmiifycU",
            description: "Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man.",
        },
        {
            id: Math.random(),
            img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
            name: "Batman",
            rating: 5,
            trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
            description: "Batman[a] is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939. ",
        },
        {
            id: Math.random(),
            img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
            name: "Deadpool 2",
            rating: 4,
            trailer: "https://www.youtube.com/watch?v=D86RtevtfrA",
            description: " Deadpool 2 is a 2018 American superhero film based upon the Marvel Comics character Deadpool.",
           
        },
        {
            id: Math.random(),
            img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            name: "Jumnanji",
            rating: 3,
            trailer: "https://www.youtube.com/watch?v=eTjDsENDZ6s",
            description:
                "Jumanji is a 1995 American fantasy adventure film directed by Joe Johnston from a screenplay by Jonathan Hensleigh, Greg Taylor, and Jim Strain.",
        },
        {
            id: Math.random(),
            img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
            name: "Vikings",
            rating: 1,
            trailer: "https://www.youtube.com/watch?v=9GgxinPwAGc",
            description:
                "Vikings is a historical drama television series created and written by Michael Hirst for the History channel, a Canadian network.",
        },
    ]);

    const [search, setsearch] = useState("");
    const handlesearch = (event) => {
        setsearch(event.target.value);
    };

    const [rating, setrating] = useState(0);
    const handlerating = (newRating) => {
        setrating(newRating);
    };

    const [show, setShow] = useState(false);
    const handelShow = () => {
        setShow(!show);
    };

    const [newMovie, setNewMovie] = useState({
        id: Math.random(),
        img: "",
        name: "",
    });

    const handelNewMovie = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    };

    const handeladdMovie = () => {
        if (newMovie.rating >= 1 && newMovie.rating <= 5) {
            SetMovies([...Movies, newMovie]);
            handelShow();
        } else {
            alert("The rating is between 1 and 5 :D");
        }
    };

    return (
        <Router>

            <div className="App">
                <Nav
                    search={search}
                    handlesearch={handlesearch}
                    rating={rating}
                    handlerating={handlerating}
                    handelShow={handelShow}
                />
            <Switch>
                <Route exact path="/">
                    <MovieContainer
                        Movies={Movies}
                        search={search}
                        rating={rating}
                    />

                    <Addmovies
                        show={show}
                        handelShow={handelShow}
                        newMovie={newMovie}
                        handelNewMovie={handelNewMovie}
                        handeladdMovie={handeladdMovie}
                    />
                </Route>

                <Route path="/MovieDescription/:id">
                    <MovieDescription Movies={Movies}/>
                </Route>

                </Switch>

                {/* Methode2 par props <MovieContainer Movies=Movies/>  */}
                {/* //destruction Method*/}
            </div>
        </Router>
    );
}

export default App;
