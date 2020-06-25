import React, { Component } from "react";

import NavBar2 from "./NavBar2";
import HiIamSneha from "./HiIamSneha";

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar2 />
          <HiIamSneha />
        </div>
      </div>
    );
  }
}

export default Header;
