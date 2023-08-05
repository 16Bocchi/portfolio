import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../animatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_o1b9ius",
                "template_bf5gkfs",
                refForm.current,
                "C03wehCWYtl6eOh1q"
            )
            .then(
                () => {
                    alert("message successful!");
                    window.location.reload(false);
                },
                () => {
                    alert("message failed");
                }
            );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            stringArray={[
                                "L",
                                "e",
                                "t",
                                "'",
                                "s",
                                " ",
                                "c",
                                "h",
                                "a",
                                "t",
                                "!",
                            ]}
                            iDx={10}
                        />
                    </h1>
                    <h2>Something here interest you? Send me an email!</h2>
                    <p>
                        I'm interested in junior positions or internships (in
                        software or robotics), but don't hesitate to reach out
                        if you have any requests or questions!
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <p>
                                Hi, my name is:{" "}
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="your name"
                                    required
                                />{" "}
                                and my email address is:{" "}
                                <input
                                    type="text"
                                    name="email_addr"
                                    placeholder="your e-mail"
                                    required
                                />{" "}
                                and I would like to talk about:{" "}
                                <textarea
                                    placeholder="this idea I had..."
                                    name="message"
                                    requred
                                    rows={2}
                                />
                            </p>
                            <input
                                type="submit"
                                className="flat-button"
                                value="Send!"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="square-spin" />
        </>
    );
};

export default Contact;
