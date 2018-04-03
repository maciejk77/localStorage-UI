import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class PopUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };

  }

  handleHide() {
    this.setState({ show: false });
  }

  renderHistoryItems() {
    let queries = JSON.parse(localStorage.queries).reverse();
    return (
      <ul>
        {queries.map(query => <li key={query}>{query}</li>)}
      </ul>
    )
  }

  render() {
    return (
      <div className="modal-container" style={{ height: 200, margin: 5 }}>
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={() => this.setState({ show: true })}
        >
          Show history
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="search-history"
          key={this.itemsquery}
        >
          <Modal.Header closeButton>
            <Modal.Title id="search-history">
              Search History
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Here is the list of the last 50 unique searches
            {this.renderHistoryItems()}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
