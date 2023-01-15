import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./components/Counter/Counter";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter numInitial={0} step={2} title={"Contador"} />);
