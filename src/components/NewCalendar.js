import React from 'react';
import Calendar from 'react-calendar';

function NewCalendar() {


  return(
    <div id='new-calendar'>
      <Calendar calendarType={'US'} onClickDay={(day) => alert(`New date is: ${day}` )}/>
    </div>
  );
}

export default NewCalendar;