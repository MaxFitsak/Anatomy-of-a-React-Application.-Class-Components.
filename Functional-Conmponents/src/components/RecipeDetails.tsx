import { Component } from "react";
import styles from "./RecipeDetails.module.css";

export default class RecipeDetails extends Component {
  render() {
    return (
      <div className={styles.details}>
        <div className={styles.block}>
          <h2>Інгредієнти:</h2>
          <ul className={styles.list}>
            <li>Кисломолочний сир — 400 г</li>
            <li>Куряче яйце — 1 шт.</li>
            <li>Цукор — 2 ст. л.</li>
            <li>Пшеничне борошно — 3 ст. л.</li>
            <li>Олія для смаження — 2 ст. л.</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Послідовність приготування:</h2>
          <ol className={styles.list}>
            <li>Розімніть сир виделкою у глибокій мисці.</li>
            <li>Додайте яйце та цукор, добре перемішайте.</li>
            <li>Всипте борошно та замісіть м'яке тісто.</li>
            <li>Сформуйте невеликі кульки та злегка приплюсніть їх.</li>
            <li>Обсмажте на розігрітій пательні по 3-4 хвилини з кожного боку до золотистої скоринки.</li>
          </ol>
        </div>
      </div>
    );
  }
}