import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

    class Greeting  extends React.Component
    {
        render(){
            return (
                <>
                    <h1>name: {this.prop.name}</h1>
                    <h1>age: {this.prop.age}</h1>
                </>
            )
        }
    }

export default Greeting;