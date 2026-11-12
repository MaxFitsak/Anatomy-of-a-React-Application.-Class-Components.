import { Component } from "react";
import RecipeHeader from "./components/RecipeHeader";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <RecipeHeader />
        <RecipeDetails />
      </div>
    );
  }
}