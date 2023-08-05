import { useEffect, useState } from "react";
import AnimatedLetters from "../animatedLetters";
import "./index.scss";
import Loader from "react-loaders";

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            stringArray={[
                                "A",
                                "b",
                                "o",
                                "u",
                                "t",
                                " ",
                                "m",
                                "e",
                            ]}
                            iDx={10}
                        />
                    </h1>
                    <p>
                        Formerly a fourth year mechatronics engineering student
                        with real-world experience, I have since had a change of
                        heart and am now studying software engineering.
                    </p>
                    <p>
                        I have previous experience working with python, java,
                        javascript, react, microcontroller programming,
                        low-voltage electrical systems and CAD.
                    </p>
                    <p>
                        I have a passion for mathematics and am also currently
                        working towards obtaining my CCNA certification
                    </p>
                </div>
            </div>
            <Loader type="square-spin" />
        </>
    );
};

export default About;
