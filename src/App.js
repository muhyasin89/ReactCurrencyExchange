// import APIConsumer from "./Data";
import { Component } from "react";


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        items: [],
        isLoaded: false
      }
  }

  componentDidMount(){
    fetch("https://api.exchangerate.host/latest")
    // fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      })
  }

  render(){
    var {isLoaded, items} = this.state;
    

    if(!isLoaded){
      return <div>Loading...</div>
    }else{
      const results = Object.entries(items.rates).map(el => ({"key":[el[0]], "value": el[1]}))
    
    // console.log(results);
      return(
        <div className="App">
          <header className="App-header">
              <ul>
                {results.map(item => <li key={item["key"]}> {item["key"]} : {item["value"]} </li>)}
              </ul>
          </header>
        </div>
      );
    }
    
  } 
}

export default App;
