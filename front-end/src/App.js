import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import HeaderBlogM from './materialize/HeaderBlogM';
import FooterBlogM from './materialize/FooterBlogM';
import SidebarBlogM from './materialize/SidebarBlogM';
import ContentBlogM from './materialize/ContentBlogM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultado: [],
    }

    axios
      .get('/postagens')
      .then(resultado => {
        console.log(resultado);
        this.setState({
          resultado: resultado.data[0]
        });
      });

    axios
      .get('/comentarios/teste')
      .then(resultado => {
        console.log(resultado)
      });
  }

  render() {
    return (
      <div className="grid">
        <HeaderBlogM />
        <SidebarBlogM />
        <ContentBlogM posts={this.state.resultado}/>
        <FooterBlogM />
      </div>
    );
  }
}

export default App;
