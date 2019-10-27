import React from 'react';


class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {};

        this.addBox = this.addBox.bind(this);
    }

    addBox(e){
        console.log(e);
    }

    render () {
        return (
            <div className="algo-navbar">
                <button className="algo-navbar-button">Home</button>
                <button className="algo-navbar-button" onClick={this.addBox}>Add box</button>
                <button className="algo-navbar-button">Subtract box</button>
            </div>
        )
    }
}

export default Navbar;