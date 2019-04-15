import React, { Component } from "react";
import "./App.sass";
import { getList } from "./api";
import UserCards from "./components/UserCards/UserCards";
import SearchFilter from "./components/SearchFilter/SearchFilter";
//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      data: null,
      isLoaded: false,
      name: null,
      change: null,
      asc: false,
      desc: false,
      alien: false,
      human: false,
      currentApiUrl: "https://rickandmortyapi.com/api/character",
      nextApiUrl: "",
      prevApiData: ""
    };
  }

  handleClickNext = () => {
    getList(this.state.nextApiUrl).then(data => {
      this.setState({
        list: data.results,
        data: data,
        nextApiUrl: data.info.next,
        prevApiData: data.info.prev
      });
    });
  };
  handleClickPrev = () => {
    getList(this.state.prevApiData).then(data => {
      this.setState({
        list: data.results,
        data: data,
        nextApiUrl: data.info.next,
        prevApiData: data.info.prev
      });
    });
  };

  async componentDidMount() {
    const list = await getList(this.state.currentApiUrl);
    this.setState({
      list: list.results,
      data: list,
      nextApiUrl: list.info.next,
      isLoaded: true
    });
  }

  performSearch = ({ name, change }) => {
    this.setState({ name, change });
  };
  performSort = ({ asc, desc }) => {
    this.setState({ asc, desc });
  };
  performFilter = ({ alien, human }) => {
    this.setState({ alien, human });
  };

  sortByAsc = list => list.sort((a, b) => (a.name < b.name ? -1 : 1));

  sortByDesc = list => list.sort((a, b) => (a.name < b.name ? 1 : -1));

  filterByName = (list, name) => list.filter(item => item.name.includes(name));

  filterBySpecies = (list, species) =>
    list.filter(item => item.species === species);

  render() {
    const {
      list,
      isLoaded,
      name,
      change,
      asc,
      desc,
      alien,
      human
    } = this.state;
    let result = list;

    if (asc) {
      result = this.sortByAsc(list);
    }
    if (desc) {
      result = this.sortByDesc(list);
    }
    if (human) {
      result = this.filterBySpecies(list, "Human");
    }
    if (alien) {
      result = this.filterBySpecies(list, "Alien");
    }
    if (change) {
      result = this.filterByName(list, change);
    }
    if (name) {
      result = this.filterByName(list, name);
    }

    if (!isLoaded) {
      return (
        <div className="preloader">
          <div className="pulse" />
        </div>
      );
    }
    return (
      <div className="container">
        <section className="main-section">
          <aside className="filter">
          <div className="buttons-group">
            <button
                className="button"
                onClick={this.handleClickPrev}
                disabled={!this.state.prevApiData}
              >
                ← Prev Page
              </button>
              <button
                className="button"
                onClick={this.handleClickNext}
                disabled={!this.state.nextApiUrl}
              >
                Next Page →
              </button>
          </div>

            <SearchFilter
              handleSearch={this.performSearch}
              handleSort={this.performSort}
              handleFilter={this.performFilter}
            />
          </aside>
          <div className="users">
            {result.map(item => {
              return <UserCards key={item.id} {...item} />;
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
