import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture:[] ,
      loading: true
    };
  }
 
 componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        picture:data,
        loading: false
        })
      
    })
   }
   render() {
     if (this.state.loading) {
       return (
      <div>
      <h1 className="heading">Users(loading)</h1></div>
       )
    }
    else
    return (
    <div>
    <h1 className="heading">Users</h1>
    <div className="container">
    {this.state.picture.map(data => {
          return (
              <div key={data._id}>
                <h3 style={{paddingRight:'5px'}} className="tooltip">
                  { data.name}
                  <span className="tooltiptext"><b>Street</b> {data.address.street}
                  <br/>
                  <b>Suite</b> {data.address.suite}
                  <br/>
                  <b>City</b> {data.address.city}
                  <br/>
                  <b>Zip</b> {data.address.zipcode}
                  </span>
                </h3>
                <p style={{float:'right' , color: '#6c757d' }}>({data.username})</p>
                </div>
          );
        })}
        </div>
    </div>
    );
   }
}

render(<App />, document.getElementById('root'));
