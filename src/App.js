import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./theme/globalStyle";
import { light } from "./theme/theme";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Experiences from './pages/experiences';
import Footer from './pages/footer';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={light}>
        <>
          <GlobalStyle />
          <Home />
          <About />
          <Work />
          <Experiences />
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}
