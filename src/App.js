import React, { Component } from "react";
import IPFS from "ipfs";
import styled from "styled-components";
import Toolbar from "./components/Toolbar";
import Add from "./icons/Add";

const stringToUse = "hello world from webpacked IPFS";

class App extends Component {
  state = {
    id: null,
    version: null,
    protocol_version: null,
    added_file_hash: null,
    added_file_contents: null
  };

  componentDidMount() {
    let node = new IPFS({ repo: String(Math.random() + Date.now()) });

    node.once("ready", () => {
      console.log("IPFS node is ready");
      node.id((err, res) => {
        if (err) {
          throw err;
        }
        this.setState({
          id: res.id,
          version: res.agentVersion,
          protocol_version: res.protocolVersion
        });
      });

      node.files.add([Buffer.from(stringToUse)], (err, filesAdded) => {
        if (err) {
          throw err;
        }

        const hash = filesAdded[0].hash;
        this.setState({ added_file_hash: hash });

        node.files.cat(hash, (err, data) => {
          if (err) {
            throw err;
          }
          this.setState({ added_file_contents: data });
        });
      });
    });
  }

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
        <div style={{ textAlign: "center" }}>
          <h1>Everything is working!</h1>
          <p>
            Your ID is <strong>{this.state.id}</strong>
          </p>
          <p>
            Your IPFS version is <strong>{this.state.version}</strong>
          </p>
          <p>
            Your IPFS protocol version is{" "}
            <strong>{this.state.protocol_version}</strong>
          </p>
          <hr />
          <div>
            Added a file! <br />
            {this.state.added_file_hash}
          </div>
          <br />
          <br />
          <p>
            Contents of this file: <br />
            {this.state.added_file_contents}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
