import React from "react";
import clsx from 'clsx';
import TestCounter from "./TestCounter";
import TestButton from "./TestButton";

export default function TestContext(){
  
    return(
        
        <div className="container">
        <div className="row">
          <div className={clsx('col')}>
            <div className="text--center">
              <TestCounter></TestCounter>
              <TestButton></TestButton>
            </div>
          </div>
        </div>
      </div>

    )  
}