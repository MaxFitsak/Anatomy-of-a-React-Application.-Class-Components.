import { Component } from "react";
import styles from "./RecipeHeader.module.css";

export default class RecipeHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1 className={styles.title}>Українські сирники</h1>
        <img 
          className={styles.photo} 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSew67LVhfcbOargkS7dUNWD1Tej3ZOXSMYP75OkAIU8ay8aKOuWhhgiJU&s=10" 
          alt="Готові сирники" 
        />
      </div>
    );
  }
}