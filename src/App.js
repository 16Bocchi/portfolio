import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
    return (
        <>
            <Routes>
                <Route path="/portfolio/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/portfolio/about" index element={<About />} />
                    <Route
                        path="/portfolio/contact"
                        index
                        element={<Contact />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
