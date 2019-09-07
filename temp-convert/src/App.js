import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    current:'',
    celcius:'',
    fahrenheit:'',
    kelvin:'',
    error:false
  }

  handleConversion = (e) => {

    //check if input value is empty
    if (e.target.value === ''){
      console.log('null')
      this.setState(
        {
          celcius:'',
          fahrenheit:'',
          kelvin:'',
          error:false
        }
      )

      return  ''
    }

    let val = parseInt(e.target.value) //change input to Integer type

    //check if the input value is a number
    if(Number.isNaN(val)) {
      console.log('Not a Number')
      this.setState({error:true})
      return ''
    }

    

    if (e.target.name ==='celcius'){
      this.setState(
        {
          current:'celcius',
          celcius: val,
          fahrenheit: (9/5*val+32).toFixed(3),
          kelvin:(val+273).toFixed(3),
          error:false
        }
      )
    }
    

    else if (e.target.name ==='fahrenheit'){
      this.setState(
        {
          current:'fahrenheit',
          celcius: ((val-32)*5/9).toFixed(3),
          fahrenheit: val,
          kelvin: ((val-32)*5/9 + 273).toFixed(3),
          error:false
        }
      )
    }

    else if (e.target.name ==='kelvin'){
      this.setState(
        {
          current:'kelvin',
          celcius: (val-273).toFixed(3),
          fahrenheit: (9/5*(val-273 )+32).toFixed(3),
          kelvin:val,
          error:false
        }
      )
    }

  }

  render(){

    return (
      <div className="App container">
        <h1> Temperature Converter </h1>
        <h5><b>Current Changed : </b>{this.state.current}</h5>

        {
          this.state.error ?
          <p className="text-danger"> Input a right number !! </p> : null
        }

        <div className="form-group">
          <label 
            htmlFor="celcius" 
            style={this.state.current === 'celcius' ? {fontWeight:'bold'} : null}
            >Celcius: </label>

          <input 
            className="form-control"
            id='celcius'
            name="celcius"
            value={this.state.celcius}
            onChange= {this.handleConversion}
            placeholder="Enter a celcius value"
            />
        </div>


        <div className="form-group">
          <label 
            htmlFor="fahrenheit"
            style={this.state.current === 'fahrenheit' ? {fontWeight:'bold'} : null}
              >fahrenheit: </label>

          <input 
            className="form-control"
            id='fahrenheit'
            name="fahrenheit"
            value={this.state.fahrenheit}
            onChange= {this.handleConversion}
            placeholder="Enter a fahrenheit value"
            />
        </div>

        <div className="form-group">    
          <label 
            htmlFor="kelvin"
            style={this.state.current === 'kelvin' ? {fontWeight:'bold'} : null}
            >kelvin: </label>  

          <input 
            className="form-control"
            id='kelvin'
            name="kelvin"
            value={this.state.kelvin}
            onChange= {this.handleConversion}
            placeholder="Enter a kelvin value"
            />
        </div>


        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th> Celcius </th>
              <th> Fahrenheit </th>
              <th> Kelvin </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td> {this.state.celcius} </td>
              <td> {this.state.fahrenheit} </td>
              <td> {this.state.kelvin} </td>
            </tr>
          </tbody>

        </table>

      </div>
    );

  }
  
}

export default App;
