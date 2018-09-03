import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

	constructor(props) {
    	super(props);
  	}

  	state = {
    	firstDate: 0,
    	secondDate: 0,
    	dayDiff: 0,
  	};

  	onChangeInput = (event) => {
   	 this.setState({ [event.target.name]: event.target.value })
  	}

	date_diff_indays = (event) => {
    	let date1 = new Date(this.state.firstDate).getTime() / (1000 * 60 * 60 * 24);
    	let date2 = new Date(this.state.secondDate).getTime() / (1000 * 60 * 60 * 24);
    	let dateDiff = Math.abs(date2 - date1);
    	this.setState({ dayDiff : dateDiff })
  	}

	render(){
		return(
			<div class="container">
				<div class="col-md-6 offset-md-3">
					<h1>Second round test</h1>
				</div>
				<br/>
				<div class="row">
					<div class="form-group" class="col-md-3 offset-md-1">
		                <div class='input-group date' id='datetimepicker2'>
		                    <input type="date" class="form-control" name="firstDate" value={this.state.firstDate} onChange={ this.onChangeInput} />
		                    <span class="input-group-addon">
		                        <span class="glyphicon glyphicon-calendar"></span>
		                    </span>
		                </div>
		            </div>
		            <div class="form-group" class="col-md-3 offset-md-3">
		                <div class='input-group date' id='datetimepicker2'>
		                    <input type="date" class="form-control" name="secondDate" value={this.state.secondDate} onChange={ this.onChangeInput} />
		                    <span class="input-group-addon">
		                        <span class="glyphicon glyphicon-calendar"></span>
		                    </span>
		                </div>
		            </div>
				</div>
				<br/>
				<div class="row">
					<button type="button" class="btn btn-light col-md-3 offset-md-4" onClick={ this.date_diff_indays } >Calculer</button>
				</div>
				<br/>
				<div class="row">
					<h1 class="col-md-11 offset-md-1"> Difference between dates in days : {this.state.dayDiff}</h1>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('root'));