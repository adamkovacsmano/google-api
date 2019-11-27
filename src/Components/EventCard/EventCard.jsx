import React, { Component } from "react";
import styles from "./EventCard.module.scss";

class EventCard extends Component {
  state = {};
  render() {
    return (
      <div className={styles.cardContainer}>
        <h2>{this.props.title}</h2>
        <p>by: {this.props.creator}</p>
        <p>starts: {this.props.startDate}</p>
        <p>ends: {this.props.endDate}</p>
        <a href={this.props.link} alt="link to event">
          Link to event in Calendar
        </a>
        <p>status: {this.props.status}</p>
        <button onClick={this.props.handleClick}>subscribe</button>
      </div>
    );
  }
}

export default EventCard;
