import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");
    useEffect(() => {
        console.log("component mounted!")//Useful when you want to instantky fetch Api while  page renders
        return (() => {
            console.log("components unmounted")
        })
    })

    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value)
            }}></input>
            <p>{text}</p>
        </div>
    );
}
