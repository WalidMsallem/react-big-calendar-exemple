import React , {useState,useRef} from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import allEvent from '../utils/events'
import { Modal } from 'antd';
import AddEventModal from './AddEventModal'
import ExampleControlSlot from '../utils/controlSlot'
import 'react-big-calendar/lib/sass/styles.scss'
const propTypes = {}
const localizer = momentLocalizer(moment)

const now = new Date()

const  MyCalendar= ({...args}) =>{

 const [events , setEvents] =useState  (allEvent)
 const [visible , setVisible] =useState  (false)
 const [detailModal , setDetailModal] =useState  (false)
 const [eventValue , setEventValue] =useState  (false)

 const  FormRef = useRef(null)
 const handleSelect = (props) => {
  setVisible(true)
    const { start, end }= props

      setEventValue( {start, end})   
 console.log('set' ,start )
  }
  const closeModal = () => {
    setVisible(false)
  }
  
  const submitEvent = () => {
    const { start, end }= eventValue

    const { validateFields } = FormRef.current
    validateFields((err, values) => {
      if (err) {
        return
      }
  
      console.log('qqqq' , values.startTime._d )
   
     setEvents([...events,{
                title : values.title ,
                start :values.startTime._d  ,
                 end  :values.endTime._d ,
                 type : values.type
                }])
    setVisible(false)
    })
 
  }
  const renderEvent = (event) => {
    var Style = {
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block'
  };
        if (event.type === 'bootCamp') {
          Style.backgroundColor = 'red'
      return ( {style : Style , className :'test0' } )
    }
    if (event.type === 'workshop') {
       Style.backgroundColor = 'yellow'
      return ( {style : Style , className :'test1' } )
    }
    if (event.type === 'oneToOne') {
      Style.backgroundColor = 'green'
      return ( {style : Style , className :'test3' } )
    }
    if (event.type === 'event') {
      Style.backgroundColor = 'white'
      Style.color = 'red'
      Style.border = '1px solid'
      Style.borderColor = 'black'

      return ( {style : Style , className :'test5' } )
    }
    return ( {style : Style , className :'test6' } )

  }
  const customDayPropGetter = date => {
    if (date.getDate() === 6 || date.getDate() === 7) {
      return {
        className: 'special-day',
        style: {
          backgroundColor: date.getDate() === 7 ? '#faa' : '#afa',
        },
      }
    }
  
    else return {}
  }
  const  onSelectEvent=(event) => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>{event.title}</p>
        </div>
      ),
      onOk() {},
    });
  }
    return (
      <>
        <ExampleControlSlot.Entry waitForOutlet>
          <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
          </strong>
        </ExampleControlSlot.Entry>
        {visible && (
          <AddEventModal
          setEvents={setEvents}   
            ref={FormRef}
            title= 'Add Event'
            visible={visible}
            handleCancel={closeModal}
            handleOk={submitEvent}
            submitButtonTitle = 'submit'     
            eventValue  = {eventValue}
          />
        )}

<div style = {{height : '80vh'}}>
<Calendar

eventPropGetter={renderEvent}
         selectable
         dayPropGetter={customDayPropGetter}           
         localizer={localizer}
         events={events}
         // defaultView={Views.MOUNTH}
         // scrollToTime={new Date(1970, 1, 1, 6)}
         onSelectEvent={event => onSelectEvent(event)}
        onSelectSlot={handleSelect}
       />
</div>

      </>
    )
}

MyCalendar.propTypes = propTypes

export default MyCalendar