import React, { Component } from "react";
import styled from "styled-components";
import Toolbar from "./components/Toolbar";
import Add from "./icons/Add";

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <Toolbar.MenuIcon />
          <Toolbar.Title>IPFS Browser</Toolbar.Title>
          <Toolbar.SearchBar />
          <Toolbar.FAB>
            <Add />
          </Toolbar.FAB>
          <Toolbar.MoreIcon />
        </Toolbar>
      </div>
    );
  }
}

export default App;
