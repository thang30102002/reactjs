import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import Greeting from "./Greeting";
class MyComponent extends React.Component
{
    state = {
        name:'',
        age:'',
    }
    handleName = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    handleAge = (event)=>{
        this.setState({
            age : event.target.value
        })
    }
    handOnclick = (event) => {
        alert(this.state.name + this.state.age)
    }
    render(){
        return (
            <>
                <form>
                    <label>Ten1: </label>
                    <input value={this.state.name} onChange={(event) => this.handleName(event)}></input>
                    <label>Tuoi1: </label>
                    <input value={this.state.age} onChange={(event) => this.handleAge(event)}></input><br/>
                    <label>Ten2: </label>
                    <input value={this.state.name} onChange={(event) => this.handleName(event)}></input>
                    <label>Tuoi2: </label>
                    <input value={this.state.age} onChange={(event) => this.handleAge(event)}></input>
                    <button type="button" onClick={(event) => this.handOnclick(event)}>click</button>
                    <Greeting name={this.state.name} age={this.state.age}/>
                    <Greeting name={this.state.name} age={this.state.age}/>
                </form>
            </>
        )
    }
}

export default MyComponent;