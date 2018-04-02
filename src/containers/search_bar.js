import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    // set the initial value for queries on the localStorage as empty array
    if(!localStorage.queries) {
      localStorage.setItem('queries', JSON.stringify([]));
    }

    this.state = { term: ""};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) { 
    event.preventDefault;

    let queries = JSON.parse(localStorage.queries);
    let term = this.state.term.trim();

    // trim all spaces - doesn't accept empty string/spaces, multiple entries
    if(term === "" || queries
      .filter(query => query === term).length > 0) {
        return;
    } else {
      // adds additional element to array
      queries.push(term);
      localStorage.queries = JSON.stringify(queries);
    }

    // limits stored values to five, removes 1st when sixth and consecutive value is pushed
    if(queries.length > 5) {
      localStorage.queries = JSON.stringify(queries.splice(1));
    }

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Type in a keyword"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}