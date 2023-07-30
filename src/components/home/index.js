import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../animatedLetters";
import React, { useEffect, useState } from "react";

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
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        stringArray={nameArray}
                        iDx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        stringArray={subtitleArray}
                        iDx={18}
                    />
                </h1>
                <h2>Software engineering student / Maths enthusiast</h2>
                <Link to="/contact" className="flat-button">
                    Contact me
                </Link>
            </div>
        </div>
    );
};

export default Home;
