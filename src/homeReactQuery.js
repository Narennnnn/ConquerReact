import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
    const { data, isLoading, error, refetch } = useQuery(["cat"], () => {
        return axios.get("https://catfact.ninja/fact?max_length=140").then((response) => response.data);
    });

    const { userName } = useContext(AppContext); // Correct the variable name here

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <h1>
                    This Is The Home Page: <p>{data.fact}</p>
                </h1>//data?.fact
            )}
            <button onClick={refetch}>UpdateData</button>
        </div>
    );
};
