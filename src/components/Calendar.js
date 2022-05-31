import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar({login}) {

  const userId = login.id

  const handleDateSelect = (dateSelectInfo) => {
    console.log(dateSelectInfo);
    let title = prompt('Notes for today\'s practice:')
    let calendarApi = dateSelectInfo.view.calendar

    if (title) {
      console.log(title);
      calendarApi.addEvent({
        title,
        start: dateSelectInfo.startStr,
        end: dateSelectInfo.endStr,
      })

      fetch(`http://localhost:4000/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: userId,
          title: title,
          start: dateSelectInfo.startStr,
          end: dateSelectInfo.endStr
        }),
      })
    } 
  };

  // const handleDateSelect = (selectInfo) => {
  //   let sessionLength = prompt('Yoga session length')
  //   let calendarApi = selectInfo.view.calendar

  //   calendarApi.unselect()

  //   if (sessionLength) {
  //     calendarApi.addEvent({
  //       sessionLength,
  //       dayClick: ,
  //     })
      
  //     fetch(`http://localhost:4000/${login.id}/events`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         sessionLength: sessionLength,
  //         start: selectInfo.startStr,
  //         end: selectInfo.endStr
  //       }),
  //     })
  //   }
  // };

  return(
    <FullCalendar 
    initialView="dayGridMonth"
    headerToolbar={{
      left: "title",
      center: "",
      right: "today prev,next"
    }}
    plugins={[dayGridPlugin, interactionPlugin]}
    // dateClick={handleDateClick}
    editable={true}
    selectable={true}
    select={handleDateSelect}    
    // events={{url: 'http://localhost:4000/events'}}
    />
  );
}

export default Calendar;