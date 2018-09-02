import React, {Component} from 'react';

class Input extends Component{

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Scale { this.props.scalename }:</legend>
                    <input value={this.props.val} onChange={this.props.func}/>
                </fieldset>
            </div>
        );
    }
}

export default Input