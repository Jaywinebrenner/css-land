
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import { faArrowLeft, faFileArrowDown, faTrashCan, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'

const Events = ({eventsData}) => {
  console.log("events Data", eventsData)

  useEffect(() => {
      window.innerWidth <= 700 ? setIsMobile(true) : null;
  }, []);


  return (
    <div className="events-wrapper">
    <h1 className='title'>EVENT CALENDAR</h1>
    <div className='events'>
      {
        eventsData.events.map((e) => {
            return (
              <Link
                    href={{
                      pathname: '/events/[slug]',
                      query: { 
                        slug: e.slug,
                        id: e.id
                      },
                    }}
                  >
              <div className='event' key={`event-key=${e}`}>
                <h1>{e.title}</h1>
                <p>{e.cost}</p>
                <img src={e.image.url}/>
                <div dangerouslySetInnerHTML={{ __html: e.excerpt}}/>
              </div>
              </Link>
            )

        })
      }

      </div>
    </div>
    )
  }

export default Events;



export async function getServerSideProps() {

    // const eventsRes = await fetch(process.env.EVENTS_API)
    const eventsRes = await fetch('https://jaytown.tannereustice.com/wp-json/tribe/events/v1/events')
    let eventsData = await eventsRes.json();
  
  
    return {
      props: {
        eventsData, 
      },
    };
  }
  