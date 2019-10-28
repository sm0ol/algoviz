import React from 'react';
import VizBox from './vizbox';


class VizColumn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            boxArr: [1]
        }

        this.addColumnBox = this.addColumnBox.bind(this);
        this.subtractColumnBox = this.subtractColumnBox.bind(this);
    }
    
    addColumnBox(){
        this.state.boxArr.push(this.state.boxArr.length + 1);
        this.setState({
            boxArr: this.state.boxArr
        });
        this.props.onAddBox(this.props.index, this.state.boxArr.length);
    }

    subtractColumnBox(){
        this.state.boxArr.splice(this.state.boxArr.length - 1, 1);
        this.setState({
            boxArr: this.state.boxArr
        });
    }

    render() {
        return (
            <div className="algo-viz-column-container">
                <div className="algo-viz-column">
                    {this.state.boxArr.map(item => {
                        return (
                            <VizBox key={item}/>
                        )
                    })}
                </div>
                <div style={{
                    display: `flex`,
                    flexDirection: `row`,
                    alignItems: `center`,
                    justifyContent: `center`
                }}>
                    <button className="algo-column-button" onClick={this.addColumnBox}>+</button>
                    <button className="algo-column-button" onClick={this.subtractColumnBox}>-</button>
                </div>
            </div>
        )
    }

}

export default VizColumn;