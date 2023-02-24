import React from "react";
import { Link } from 'react-router-dom';
import '../css/menu.css';
// import { SiInstagram } from "react-icons/si";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from "./menuIcon";
import { menuLinks } from '../constants/menuLinks';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    }
  }

  toggleMenu() {
    // toggle menu on click
    if (this.state.menuVisible) {
      this.setState({menuVisible: false})
    } else {
      this.setState({menuVisible: true})
    }
  }

  render() {
    // button makes ripple effect
    // if menu is visible, return map of images, else return the menu icon component
    return (
      <div className="menu">
        <h1
        className="menuNameHeader">HForrest</h1>
        {this.state.menuVisible ?
          <div className="menuList">
            <List disablePadding onClick={() => this.toggleMenu()}>
              {menuLinks.map(({ label, name, linkTo, ...rest }) => (
                <ListItem key={name} {...rest}>
                <Link className="link" to={linkTo}><p className="labelText">{label}</p></Link>
                </ListItem>
              ))}
            </List>
            <p className="x" onClick={() => this.toggleMenu()}>X</p>
          </div>
          :
          <div className="menuIcon" onClick={() => this.toggleMenu()}>
            <MenuIcon />
          </div>
        }
      </div>
    );
  }
}

export default Menu;
