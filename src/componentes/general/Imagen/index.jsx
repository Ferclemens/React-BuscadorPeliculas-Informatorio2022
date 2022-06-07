import React from 'react';
import logo from '../../logo.svg';

class Imagen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cambioColor: false
        };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({ cambioColor: !this.state.cambioColor}),
            1000
        )
    }

    render() {
        const color = this.state.cambioColor ? 'red' : 'blue';
        return (
          <div style={{ backgroundColor: color}}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        );
    }
}

export default Imagen;
