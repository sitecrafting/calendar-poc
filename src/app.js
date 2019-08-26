import React from 'react';
import ReactDOM from 'react-dom';
import TTCalendar from 'tt-react-calendar';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';


// This will come from an AJAX call
const events = {
  "2019-07-29": [{
    id: "123",
    url: "#event1",
    title: "Event 1",
  }],
  "2019-08-01": [{
    id: "234",
    url: "#event2",
    title: "Event 2",
  }],
  "2019-08-05": [{
    id: "345",
    url: "#event3",
    title: "Event 3",
  }, {
    id: "456",
    url: "#event4",
    title: "Event 4",
  }],
};

const flatEvents = [{
  id: "123",
  url: "#event1",
  title: "Event 1",
  start: "2019-07-28",
}, {
  id: "234",
  url: "#event2",
  title: "Event 2",
  start: "2019-08-02",
}, {
  id: "345",
  url: "#event3",
  title: "Event 3",
  start: "2019-08-05",
}, {
  id: "456",
  url: "#event4",
  title: "Event 4",
  start: "2019-08-28",
}];





/*
 * react-big-calendar
 */

const localizer = BigCalendar.momentLocalizer(moment);
function BigCalendarDemo(props) {
  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={flatEvents}
      />
    </div>
  );
}

ReactDOM.render(<BigCalendarDemo />, document.getElementById('big-calendar'));




/*
 * tt-react-calendar
 */

function DayEventList(props) {
  return (
    <div>
      {props.events.map(e => {
        return (
          <div key={e.id} className="mp-event">
            <a href={e.url} className="event-link">{e.title}</a>
          </div>
        );
      })}
    </div>
  );
}

function day(d) {
  const eventsToday = events[d.format('YYYY-MM-DD')] || [];
  const hasEvents   = eventsToday.length > 0 ? 'has-events' : '';
  const dayClass    = `mp-day month--${d.format('MM')} ${hasEvents}`;
  return <div className={dayClass}>
    <span className="day-label">{d.format('D')}</span>
    <DayEventList events={eventsToday} />
  </div>
}

function monthHeader(firstDay, fmt) {
  const monthClass = "mp-month-header month--" + firstDay.format('MM');
  return <div className={monthClass}>{firstDay.format(fmt)}</div>
}

function calendarClassName() {
  return "mp-calendar filter-month--08";
}

function TTCalendarDemo(props) {
  return(
    <TTCalendar
      className={calendarClassName()}
      firstRenderedDay="2019-07-28"
      lastRenderedDay="2019-08-31"
      weekClassName="mp-week flex"
      dayHeaderClassName="mp-calendar-header flex"
      compactMonths={true}
      renderMonthHeader={monthHeader}
      renderDay={day}
    />
  );
}

ReactDOM.render(<TTCalendarDemo />, document.getElementById('tt-calendar'));
