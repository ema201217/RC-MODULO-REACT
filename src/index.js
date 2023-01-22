import React from "react";
import ReactDOM from "react-dom/client";
import { GifApp } from "./components/GifContainer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GifApp numInitial={0} step={2} title={"Contador"} />);
