import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return(
         <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/GK'>General Knowledge</Link>
            </li>
            <li>
                <Link to='/Puzzle'>Puzzle </Link>
            </li>
            <li>
                <Link to='/Technical'>Technical</Link>
            </li>
            <li>
                <Link to='/History'>History</Link>
            </li>
         </ul>
    )
    }