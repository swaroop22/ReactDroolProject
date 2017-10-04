import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
        var self = this;
       const statusURL = `http://localhost:8080/getStatus?score= ${this.state.value}`;


           axios.get(statusURL)
               .then(function (response) {
                   if (response.data) {
                       self.setState({
                           vehicleList: response.data
                       })
                   }
               })
               .catch(function (error) {
                   console.log(error);
               });

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    componentWillMount(){
       /* var self = this;
        const statusURL = `http://localhost:8080/getStatus?score= ${this.state.value}`;
        /!*`http://localhost:8080/vehicles/find/${score}`*!/

            axios.get(statusURL)
                .then(function (response) {
                    if (response.data) {
                        self.setState({
                            vehicleList: response.data
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });*/


    }
  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Enter the Credit Score:
                <input type="text" value={this.state.value}  />
            </label>
            <input type="submit" value="submit" onChange={this.handleChange}/>
        </form>
        </div>

    );
  }
}

export default App;
