import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { DataState } from "../store/dataSlice";

interface IState {
    data: DataState
}

const Partners = () => {
    const partners = useSelector((state: IState) => state.data.partners)
    useEffect(()=>console.log(partners), [partners])
    return (
        <ul>
            {
                partners.length === 0
                ? 'Cargando...'
                : partners.map((partner, index) => <li key={index}>{partner}</li>)
            }
        </ul>
    );
}

export default Partners;