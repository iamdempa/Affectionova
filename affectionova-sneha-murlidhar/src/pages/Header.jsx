import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import HiIamSneha from "./HiIamSneha";

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar2 />

          <HiIamSneha />

          <section className="py-5">
            <div className="container">
              <h2 className="font-weight-light">Page Content</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus ab nulla dolorum autem nisi officiis blanditiis
                voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
                cumque magnam enim fugiat reprehenderit expedita.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Header;
