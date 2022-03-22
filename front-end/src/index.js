import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddSentence from "./AddSentence.js";
import "./css/index.css";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="mainWrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addSentence" element={<AddSentence />} />
                </Routes>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
