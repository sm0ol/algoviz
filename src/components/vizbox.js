import React from 'react';


class VizBox extends React.Component {
    constructor(props){
        super(props);
        console.log('TCL: Props in box', props);
    }

    render() {
        return (
            <div className={this.props.active ? "algo-viz-square active-square" : "algo-viz-square"}></div>
        )
    }

}

export default VizBox;