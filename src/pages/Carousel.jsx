import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import $ from "jquery";

// import Masonry from "react-masonry-component";
import Masonry from "react-masonry-css";

var items = [
  { id: 1, name: "My First Item" },
  { id: 2, name: "Another item" },
  { id: 3, name: "Third Item" },
  { id: 4, name: "Here is the Fourth" },
  { id: 5, name: "High Five" },
];

class CarouselPhotos extends Component {
  render() {
    // Convert array to JSX items
    items = items.map(function (item) {
      return <div key={item.id}>{item.name}</div>;
    });

    return (
      <Masonry
        // breakpointCols={myBreakpointsAndCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
    );
  }
}

export default CarouselPhotos;
