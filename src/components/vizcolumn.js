import React from 'react';
import VizBox from './vizbox';
import '../styles/columns.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class VizColumn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            boxArr: props.column.boxes
        }
        
        this.addColumnBox = this.addColumnBox.bind(this);
        this.subtractColumnBox = this.subtractColumnBox.bind(this);
        this.removeIndividualColumn = this.removeIndividualColumn.bind(this);
    }

    //TODO: Really need to get these working in order to avoid UNSAFE_componentWillReceiveProps
    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.boxArr !== this.state.boxArr){
    //         let boxArr = this.state.boxArr;
    //         this.setState({boxArr});
    //     }
    // }

    // static getDerivedStateFromProps(props, state) {
    //     console.log(`TCL: VizColumn -> getDerivedStateFromProps -> state`, state)
    //     console.log(`TCL: VizColumn -> getDerivedStateFromProps -> props`, props)
    //     if(props.boxArr !== state.boxArr){
    //         let boxArr = state.boxArr;
    //         return {boxArr: props.boxArr}
    //     } else return null;
    // }

    componentWillReceiveProps(nextProps) {
        this.setState({ boxArr: nextProps.column.boxes });  
    }
    
    addColumnBox(){
        this.state.boxArr.push(this.state.boxArr.length + 1);
        this.setState({
            boxArr: this.state.boxArr
        });
        this.props.onAddBox(this.props.index, this.state.boxArr);
    }

    subtractColumnBox(){
        this.state.boxArr.splice(this.state.boxArr.length - 1, 1);
        this.setState({
            boxArr: this.state.boxArr
        });
    }

    removeIndividualColumn(){
        this.props.removeIndividualColumn(this.props.index);
    }

    render() {
        return (
            <div className="algo-viz-column-container">
                <button className="algo-column-button" onClick={this.removeIndividualColumn}>
                    <FontAwesomeIcon className="button-icon" icon={faTimes}></FontAwesomeIcon>
                </button>
                <div className={this.props.active ? "algo-viz-column active-column" : "algo-viz-column"}>
                {/* <div className="algo-viz-column"> */}
                    {this.state.boxArr.map(item => {
                        return (
                            <VizBox key={item} active={this.props.active}/>
                        )
                    })}
                </div>
                <div style={{
                    display: `flex`,
                    flexDirection: `row`,
                    alignItems: `center`,
                    justifyContent: `center`
                }}>
                    <button className="algo-column-button button-icon" onClick={this.addColumnBox}>+</button>
                    <button className="algo-column-button button-icon" onClick={this.subtractColumnBox}>-</button>
                </div>
            </div>
        )
    }

}

export default VizColumn;