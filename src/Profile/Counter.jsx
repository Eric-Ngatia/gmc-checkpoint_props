import React, { Component } from 'react'

export default class Counter extends Component {
    
    state={
        Count:0
    }

        decrement (){
            this.setState ({
                Count : this.state.Count - 1
            })
        }

        increment (){
            this.setState ({
                Count : this.state.Count + 1
            })
        }


    render() {
        return (
            <div>
                <button onClick={this.increment.bind(this)}>+</button>
                
                    <span>Count:{this.state.Count} </span>

                <button onClick={this.decrement.bind(this)}> - </button>
            </div>
        )
    }
}
