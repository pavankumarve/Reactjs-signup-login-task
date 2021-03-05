import React, { Component } from 'react'

class Box extends Component {
  constructor(props){
    super(props)
      this.state = {
          color: this.colors
    }       
        }
    
    colors = ['#FF0000', '#00FFFF', '#0000FF', '#800080'];

    
    render() {
        return (
            <div>
                <h1 className='box'>Box</h1>
                {this.state.color.map((data, index) => (
                    <div className='Box1' key={index} style={{ background: data }}>  
                    </div>
                )
                )}
            </div>
            
        )
    }
}

export default Box
