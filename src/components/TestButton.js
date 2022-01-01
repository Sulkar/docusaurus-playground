import React, { useContext } from "react";
import { MyContext } from "./MyContext";

export default function TestContext(){

    const [myValues, setMyValues] = useContext(MyContext);

    return(
        <button onClick={() => setMyValues(oldValues => ({...oldValues, counter: oldValues.counter +1, loader:true }))}> 
            Increment
        </button>
    )
}