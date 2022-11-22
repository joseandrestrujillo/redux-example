import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { DataState } from "../store/dataSlice";

interface IState {
    data: DataState
}

const Schedule = () => {
    const schedule = useSelector((state: IState) => state.data.schedule)
    useEffect(()=>console.log(schedule), [schedule])
    return (
        <ul>
            {
                schedule.length === 0
                ? 'Cargando...'
                : schedule.map((interval, index) => <li key={index}>{interval}</li>)
            }
        </ul>
    );
}

export default Schedule;