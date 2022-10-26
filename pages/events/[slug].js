
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import { faArrowLeft, faFileArrowDown, faTrashCan, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Event = ({eventData}) => {
  console.log("events Data", eventData)
  const [event, setEvent] = useState();
  const router = useRouter();


  useEffect(() => {
    const fetchData = async () => {
      const {id} = router.query;
      console.log("ID", id)
      const eventRes = await fetch(`https://jaytown.tannereustice.com/wp-json/tribe/events/v1/events/${id}`)
      let eventData = await eventRes.json();
      setEvent(eventData); 
    }
    fetchData();
  }, []);


  return (
    <div className='event-single'>
      <div className='arrow-wrapper'>
        <Link href="/events">
          <FontAwesomeIcon className="event-arrow" icon={faArrowLeft} />
        </Link>
      </div>
      <h1> {event && event.title} </h1>
      <h3>{event && event.start_date}</h3>
        <div className='event-single__body'>
          <div key={`event-key=${event && event.id}`}>
            <p>{event && event.cost}</p>
            <img src={event && event.image.url}/>
          <div dangerouslySetInnerHTML={{ __html: event && event.description}}/></div>
        </div>
      </div>
    )
  }

export default Event;




export async function getServerSideProps() {

  const eventRes = await fetch('https://jaytown.tannereustice.com/wp-json/tribe/events/v1/events/225')
  let eventData = await eventRes.json();


  return {
    props: {
      eventData, 
    },
  };
}


