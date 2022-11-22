import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { DataState } from "../store/dataSlice";

interface IState {
    data: DataState
}

const Speakers = () => {
    const speakers = useSelector((state: IState) => state.data.speakers)
    useEffect(()=>console.log(speakers), [speakers])
    return (
        <ul>
            {
                speakers.length === 0
                ? 'Cargando...'
                : speakers.map((speaker, index) => <li key={index}>{speaker}</li>)
            }
        </ul>
    );
}

export default Speakers;