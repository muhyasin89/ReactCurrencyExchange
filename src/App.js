import { Component } from "react";
import Histogram from 'react-chart-histogram';
import LoadingScreen from 'react-loading-screen';


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

      return <LoadingScreen
        loading={true}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='/logo.png'
        text='Loading Data'
      > 
        <div>Loading...</div>
      </LoadingScreen>
       
    }else{
      let labels = [];
      let data = [];
      let results = [];
      const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };

      Object.entries(items.rates).map(el => {
        results.push({"key":[el[0]], "value": el[1]})
        labels.push([el[0]].toString())
        data.push(el[1])
      });
    
    // console.log(results);
      return(
        <div className="App">
          <h1 align="center">Histogram Chart</h1>
          <header className="App-header">
               <Histogram
                xLabels={labels}
                yValues={data}
                width='2500'
                height='800'
                options={options}
            />
          </header>
        </div>
      );
    }
    
  } 
}

export default App;
