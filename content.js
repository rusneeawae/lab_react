import React, {component}from 'react'
export default class Content extends component{
constructor(){
    super()
    this.state={
        count:0

    }
    }
    addNum=()=>{
        this.setstate({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                <button onClick={this.addNum}>num{this.state.count}</button>
            </div>
        )
    }
}


