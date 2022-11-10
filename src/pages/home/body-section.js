/* react imports */
import React from "react";

/* app imports */
import {Card} from "@components/cards/index.js";

export default function BodySection() {
  return (
    <React.Fragment>
      <section className="customRow cardsContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
      <button className="btn btn-primary btn-lg rollButton" type="button">
        <span>Roll Dice</span>
      </button>
    </React.Fragment>
  );
};
