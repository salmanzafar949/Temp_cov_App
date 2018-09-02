import React, {Component} from 'react';
import Input from './Input';

class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state={
            scale: 'c',
            temp: 0
        }
    }

    handleCChange = (e) => {
     this.setState({
         scale: 'c',
         temp: e.target.value
     });

    }

    handleFChange = (e) => {
     this.setState({
         scale: 'f',
         temp: e.target.value
     });

    }

    render(){

        const temp  = this.state.temp;
        const scale = this.state.scale;
        const c     = scale === 'f' ? (temp - 32) * 5/9 : temp;
        const f     = scale === 'c' ? (temp* 5/9) + 32 : temp;

        return <div>
            <Input scalename="Fahrenheit" val={f} func={this.handleFChange}/>
            <Input scalename="Celsius" val={c} func={this.handleCChange}/>
        </div>
    }

}

export default Calculator