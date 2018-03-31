import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

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

    //limits stored values to five, removes 1st when sixth and consecutive value is pushed
    // if( (JSON.parse(localStorage.queries)).length > 4) {
    //   localStorage.queries = JSON.parse(localStorage.queries).splice(1);
    // }

    // trim all spaces - doesn't accept empty string/spaces, multiple entries
    if((this.state.term.trim()) === "" 
      || JSON.parse(localStorage.queries)
      .filter(query => query === this.state.term).length > 0) {
        return;
    } else {
      // adds additional element to array
      let q = JSON.parse(localStorage.queries);
      q.push(this.state.term);
      localStorage.queries = JSON.stringify(q);
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