import React, { useContext } from "react";
import { MyContext } from "./MyContext";


export default function TestCounter(){

  const [myValues] = useContext(MyContext);

  return(
        <h1>{myValues.counter} and {myValues.user}</h1>
    )
  
  
}