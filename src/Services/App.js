import React from 'react';
import './App.css';
import Card from '../Component/Card';
import ErrorBoundries from '../Component/ErrorBoundries'



class App extends React.Component {
  constructor() {
    super();
    this.state = {  
      number: '1',
      numberData: []
    }
  }

  fetchData() {
    Promise.all([
      `http://numbersapi.com/${this.state.number === '' ? 'random' : this.state.number}/year?json`,
      `http://numbersapi.com/${this.state.number === '' ? 'random' : this.state.number}/math?json`,
      `http://numbersapi.com/${this.state.number === '' ? 'random' : this.state.number}/date?json`,
      `http://numbersapi.com/${this.state.number === '' ? 'random' : this.state.number}/trivia?json`
    ].map(url => 
      fetch(url).then(response => response.json())
      )).then(datas => {
        return this.setState({numberData: datas});
      });
  }

componentDidMount() {
  this.fetchData();
}

getData = () => {
this.fetchData();
this.setState({number: ''})

}

onNumberChange = (event) => {
  this.setState({number: event.target.value === '' ? 'random' : event.target.value});
}
  
  render() {
    return (
      <div className="tc">
        <div id="heading">
          <h1>Number Facts</h1>
        </div>
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-white'
            placeholder='Enter number or random'
            value={this.state.number}
            onChange={this.onNumberChange}
            type="text"/>
        </div>
        <div id="Buttun">
        <a class="f6 grow no-underline br-pill ph4 pv2 ma2 dib white bg-black" href="#0" onClick={this.getData}>Get Facts</a>
        </div>
          <div className="center mv4 pa2 w-90 br3 ba" id="cards">
            <ErrorBoundries>
             <Card datas={this.state.numberData}/>
          </ErrorBoundries>
          </div>
      </div>
    );
    }
}

export default App;
