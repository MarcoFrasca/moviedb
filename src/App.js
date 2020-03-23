import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./index.css";
import { Search, Results, Popup } from "./components";
import { apiUrl } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s: "",
      results: [],
      selected: {},
      showModal: false,
      loading: false
    };
  }

  handleInput = e => {
    let s = e.target.value;
    this.setState({ s });
  };

  search = async e => {
    const { s } = this.state;
    if (e.key === "Enter") {
      this.setState({ loading: true });
      try {
        let { data } = await axios(`${apiUrl}&s=${s}`);
        let results = data.Search;
        this.setState({ loading: false, results });
      } catch (err) {
        this.setState({ loading: false });
        console.log(err);
      }
    }
  };

  openPopup = async id => {
    this.setState({ loading: true });
    try {
      let { data } = await axios(`${apiUrl}&i=${id}`);
      this.setState({
        loading: false,
        selected: data,
        showModal: true
      });
    } catch (err) {
      this.setState({ loading: false });
      console.log(err);
    }
  };

  closePopup = () => {
    this.setState({ showModal: false, selected: {} });
  };

  render() {
    const { results, loading, selected, showModal } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Movie Database</h1>
        </header>
        <main>
          <Search handleInput={this.handleInput} search={this.search} />
          <Results
            results={results}
            loading={loading}
            openPopup={this.openPopup}
          />
          <Popup
            showModal={showModal}
            selected={selected}
            closePopup={this.closePopup}
          />
        </main>
      </div>
    );
  }
}

export default App;
