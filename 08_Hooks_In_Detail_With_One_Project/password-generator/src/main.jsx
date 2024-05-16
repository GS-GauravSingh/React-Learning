import React from 'react'
import ReactDOM from 'react-dom/client'
import PasswordGenerator from './PasswordGenerator';
import "./index.css"

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
        <PasswordGenerator />
    </React.StrictMode>,
);