import React from "react";
import styles from "./App.module.css";
import logo from "./logo.svg";

const App = () => {
  return (
    <div className={styles.App}>
      <img src={logo} alt="Quality Logo" />
      <h1 className={styles.H1}>Wah Gwan, Soon Come</h1>
      <p>What's Up, Coming Soon</p>
      <p>2020-03-08</p>
    </div>
  );
};

export default App;
