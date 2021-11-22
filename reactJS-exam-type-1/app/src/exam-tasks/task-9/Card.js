import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data });
      });
  }

  render() {
    return (
      <>
        <div>Card Component</div>
        {this.state.items.map(
          (item) =>
            item.id < 6 && (
              <div key={item.id}>
                <p>
                  Title: {item.title} | Completed:{" "}
                  {item.completed === false && "No"}
                  {item.completed === true && "Yes"}
                </p>
              </div>
            )
        )}
      </>
    );
  }
}
