import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// FullCalendar styles
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import BigCalendar from 'react-big-calendar';

import TTCalendar from 'tt-react-calendar';

// generic app styles
import './app.less';


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
  // NOTE: `start` and `date` are the same for reusability
  start: "2019-07-28",
  date: "2019-07-28",
}, {
  id: "234",
  url: "#event2",
  title: "Event 2",
  start: "2019-08-02",
  date: "2019-08-02",
}, {
  id: "345",
  url: "#event3",
  title: "Event 3",
  start: "2019-08-05",
  date: "2019-08-05",
}, {
  id: "456",
  url: "#event4",
  title: "Event 4",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "456",
  url: "#event5",
  title: "Event 5",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "456",
  url: "#event6",
  title: "Event 6",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "456",
  url: "#event7",
  title: "Event 7",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "456",
  url: "#event8",
  title: "Event 8",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "456",
  url: "#event9",
  title: "Event 9",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "456",
  url: "#event10",
  title: "Event 10",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "456",
  url: "#event11",
  title: "Event 11",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "456",
  url: "#event12",
  title: "Event 12",
  start: "2019-08-28",
  date: "2019-08-28",
}, {
  id: "567",
  url: "#event13",
  title: "Event 13",
  start: "2019-09-01",
  date: "2019-09-01",
}, {
  id: "567",
  url: "#event14",
  title: "Event 14",
  start: "2019-09-03",
  date: "2019-09-03",
}, {
  id: "567",
  url: "#event15",
  title: "Event 15",
  start: "2019-09-04",
  date: "2019-09-04",
}];





/*
 * fullcalendar
 */

class FullCalendarDemo extends React.Component {

  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
  }

  render() {
    const views = {
      dayGrid: {
        eventLimit: 3,
      },
    };

    const onEventLimitClick = (e) => {
      console.log('here is where we switch to day view', e);
    };

    const onPrev = () => {
      this.calendarRef.current.getApi().prev()
    };

    const onNext = () => {
      this.calendarRef.current.getApi().next()
    };

    return (
      <div>
        <nav>
          <a href="#" onClick={onPrev}>Previous</a>
          <a href="#" onClick={onNext}>Next</a>
        </nav>
        <FullCalendar
          ref={this.calendarRef}
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={flatEvents}
          eventLimit={true}
          views={views}
          eventLimitText="View all events"
          eventLimitClick={onEventLimitClick}
        />
      </div>
    );
  }
}

ReactDOM.render(<FullCalendarDemo />, document.getElementById('full-calendar'));





/*
 * react-big-calendar
 *
 * Couldn't get this one to work :(
 *
 * Uncommenting the `const localizer...` line (which is required) causes:
 * "TypeError: _reactBigCalendar.default is undefined"
 */

//const localizer = BigCalendar.momentLocalizer(moment);
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

//ReactDOM.render(<BigCalendarDemo />, document.getElementById('big-calendar'));




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
