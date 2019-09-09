import React, { Component } from 'react';
import Nav from "./components/nav";
import News from "./components/news";
import Panel from "./components/panel";
class Page extends Component {
  render() {
    return (
      <>
        <Nav />
        <News />
        <Panel />
      </>
    );
  }
}

export default Page;