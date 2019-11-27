import React, { Component } from "react";
import styles from "./EventsPage.module.scss";
import EventCard from "../../Components/EventCard/";

class EventsPage extends Component {
  state = {
    events: [],
    filteredEvents: [],
    userName: this.props.userName
  };

  componentDidMount = () => {
    const fetchPromise = fetch(
      "https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events?key=AIzaSyD0BPkYrRiqn1xTa6G47V-ePGfyWReKoTM"
    );
    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(events => {
        // let kidies = events.items.sort(function(a, b){return a-b})
        this.setState({ events: events.items, filteredEvents: events.items });
        console.log(this.state.events);
      });
  };

  handleChange = event => {
    let items = this.state.events;
    if (event.target.value !== "all") {
      items = items.filter(item => {
        return (
          item.summary
            .toLowerCase()
            .search(event.target.value.toLowerCase()) !== -1
        );
      });
      this.setState({ items: items, filteredEvents: items });
    } else {
      this.setState({ items: items, filteredEvents: this.state.events });
    }
  };

  handleClick = () => {
    alert(`Naughty ${this.state.userName}`);
  };

  render() {
    console.log(this.state.events);
    return (
      <>
        <div>
          <select onChange={this.handleChange}>
            <option value="all">all</option>
            {this.state.events.map((event, index) => (
              <option value={event.summary} key={index}>
                {event.summary}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.eventsContainer}>
          {this.state.filteredEvents.map((event, index) => (
            <EventCard
              title={event.summary}
              creator={event.creator.email}
              startDate={event.start.date}
              endDate={event.end.date}
              link={event.htmlLink}
              status={event.status}
              key={event.id}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </>
    );
  }
}

export default EventsPage;
