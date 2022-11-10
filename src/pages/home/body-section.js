/* react imports */
import React from "react";

/* app imports */
import {Card} from "@components/cards/index.js";
import RollButton from "./roll-button.js";

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
      <RollButton/>
    </React.Fragment>
  );
};
