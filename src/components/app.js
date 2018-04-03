import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import PopUp from '../containers/modal';

export default class App extends Component {
  render() {
    return (
    	<div>
      		<SearchBar />
      		<PopUp />
      	</div>
    );
  }
}
