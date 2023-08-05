import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../animatedLetters";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ["I", "'", "m", " ", "D", "a", "n", "i", "e", "l", ","];
    const subtitleArray = [
        "u",
        "n",
        "d",
        "e",
        "r",
        "g",
        "r",
        "a",
        "d",
        " ",
        "e",
        "n",
        "g",
        "i",
        "n",
        "e",
        "e",
        "r",
    ];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 5000);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={`${letterClass} _5`}>H</span>
                        <span className={`${letterClass} _6`}>i</span>
                        <span className={`${letterClass} _7`}>,</span>
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            stringArray={nameArray}
                            iDx={10}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            stringArray={subtitleArray}
                            iDx={25}
                        />
                    </h1>
                    <h2>
                        Software engineering student / Maths enthusiast / Robot
                        fan
                    </h2>
                    <Link to="/portfolio/contact" className="flat-button">
                        Contact me
                    </Link>
                </div>
            </div>
            <Loader type="square-spin" />
        </>
    );
};

export default Home;
