
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import eventsData from '../../data/eventsData';

const Event = () => {
  console.log("events Data", eventData)
  // const [event, setEvent] = useState();
  const router = useRouter();


  useEffect(() => {
    const fetchData = async () => {
      const {id} = router.query;
      console.log("ID", id)
      // const eventRes = await fetch(`https://jaytown.tannereustice.com/wp-json/tribe/events/v1/events/${id}`)
      // let eventData = await eventRes.json();
      // setEvent(eventData); 
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
      {/* <h1> {event && event.title} </h1> */}
      <h1> event.title </h1>
      {/* <h3>{event && event.start_date}</h3> */}
      <h3>event.start_date</h3>
        <div className='event-single__body'>
          <div key={`event-key=`}>
            {/* <p>{event && event.cost}</p> */}
            <p>event.cost</p>
            {/* {event && <img src={event.image.url}/>} */}
            <img src=""/>
            event image here
          {/* <div dangerouslySetInnerHTML={{ __html: event && event.description}}/></div> */}
          <div>Event Description</div>
        </div>
      </div>
      </div>
    )
  }

export default Event;




// export async function getServerSideProps() {

//   const eventRes = await fetch('https://jaytown.tannereustice.com/wp-json/tribe/events/v1/events/225')
//   let eventData = await eventRes.json();


//   return {
//     props: {
//       eventData, 
//     },
//   };
// }


