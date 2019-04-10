import React, { Component } from 'react';
import './App.css';
import {getList} from './api'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      data: null,
      isLoaded: false,
      currentApiUrl: 'https://rickandmortyapi.com/api/character',
      nextApiUrl: '',
      prevApiData: '',

    };

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClickNext = () => {
    const nextList = getList(this.state.nextApiUrl);
    nextList.then( data => {
      this.setState({
        list: data.results,
        data: data,
        nextApiUrl: data.info.next,
        prevApiData: data.info.prev
      })
    })
  }
  handleClickPrev = () => {
    const prevList = getList(this.state.prevApiData);
    prevList.then( data => {
      this.setState({
        list: data.results,
        data: data,
        nextApiUrl: data.info.next,
        prevApiData: data.info.prev
      })
    })
  }

  async componentDidMount() {
    const list = await getList(this.state.currentApiUrl);
    console.log(list)
    this.setState({
      list: list.results,
      data: list,
      nextApiUrl: list.info.next,
      isLoaded: true
    })
  }

  render() {

    const {list, isLoaded} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } else {
        return (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <button
                  className="btn btn-primary"
                  onClick={this.handleClickPrev}
                  disabled={!this.state.prevApiData}
                  >
                  ← Prev
                </button>
                <button
                  className="btn btn-primary"
                  onClick={this.handleClickNext}
                  disabled={!this.state.nextApiUrl}
                  >
                  Next →
                </button>
              </div>
                {list.map(item => {
                  return <div
                    key={item.id}
                    className="col-md-3 col-sm-6 mb-3"
                    >
                    <div className="card">

                      <img
                        className="card-img-top"
                        src={item.image}
                        alt={item.name}/>
                        <div className="card-body">
                          <h6>{item.name}</h6>
                        </div>
                    </div>

                  </div>
                })}
              </div>


          </div>
        );
    }

  }
}

export default App;
