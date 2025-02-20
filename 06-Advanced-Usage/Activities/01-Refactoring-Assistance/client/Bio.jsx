import React, { Component } from "react";

class Bio extends Component {
  componentDidMount() {
    alert("Subscribe to my podcast!");
  }

  render() {
    return (
      <div>
        <h1>Jonathan Watson</h1>
        <img src="https://via.placeholder.com/150" alt="Stock" />
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </li>
          <li>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</li>
          <li>
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
            semper porta.
          </li>
        </ul>
      </div>
    );
  }
}

export default Bio;
