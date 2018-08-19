import React from 'react';

export class Textbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'term': '',
            'day': 'Today',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
}


handleChange(e){
    this.setState({
        'term': e.target.value
    })
}


handleSelect(event){
    this.setState({
        'day': event.target.value
    })
}


handleSubmit(e){
    e.preventDefault();
    this.props.updateEntry(this.state.term, this.state.day)
    this.setState({
        'term': ''
    })
}


render(){
    return(
        <div className="container">
            <form onSubimit={this.handleSubmit} className="form">
                <fieldset className="form-group form-warning">
                    <label for="day">FOR DAY: </label>
                    <select value={this.state.day} id="day" onChange={this.handleSelect} className="form-control" >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Day_After_Tomorrow">Day After Tomorrow</option>
                    </select>
                </fieldset>
                <fieldset className="form-group form-warning">
                    <label>YOUR GOAL : </label>
                    <input type="text" id="aim" value={this.state.term} placeholder='type here and press enter' onChange={this.handChange} className="form-control" />
                </fieldset>
                <button className="btn btn-warning btn-ghost">I WILL DO THIS.</button>
            </form>
        </div>
    )
}