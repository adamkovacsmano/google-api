import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <h1 className={styles.headerText}>
        K<span>I</span>D<span>I</span>ES
      </h1>
    );
  }
}

export default Header;
