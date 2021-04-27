import React,{useState, useEffect} from 'react'
import Calendar from 'tui-calendar'
import "tui-calendar/dist/tui-calendar.css"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Edt() {
    
    const [isload, setIsload] = useState(false)

    useEffect(() => {
        
    }, [])
    
    return (
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridWeek"
        weekends={false}
        events={[
            {
                title:' Cours Math',
                daysOfWeek: [ '2' ],
                startTime: '10:45:00',
                endTime: '11:45:00'
            },
            {
                title:' Cours Francais',
                daysOfWeek: [ '2' ],
                startTime: '11:45:00',
                endTime: '12:45:00'
            },
        ]}
      />
    )
}

export default Edt
