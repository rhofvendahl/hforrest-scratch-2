import React from 'react';
import './css/App.css';
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import Sculpture from './components/sculpture';
import About from './components/about';
import Video from './components/video';
import Contact from './components/contact';
import ViewImage from './components/viewImage';
import Error404 from './components/Error404';
import {Routes, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      useMenu: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const currentUseMenu = (window.innerWidth <= 768);
    if (currentUseMenu !== this.state.useMenu) {
      this.setState({useMenu: currentUseMenu});
    }
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    return (
      <div className="background">
        {this.state.useMenu ? <Menu /> : <Header />}
          <Routes>
            {/* <Route exact path='/' element={<Sculpture/>} /> */}
            <Route path='/about' element={<About/>} />
            <Route path='/video' element={<Video/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/viewImage' element={<ViewImage/>} />
            <Route element={Error404} />
          </Routes>
        <Footer />
      </div>
    );

  }
}

export default App;
