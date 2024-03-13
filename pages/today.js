import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from '../utils/constants';
import Link from 'next/link';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDoc, doc } from "@firebase/firestore/lite";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Today = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState(null);

    const getFormattedDay = (day) => {
        return `${day.getDate()}${day.getMonth() + 1}${day.getFullYear()}`;
    };

    const getThisDayEvents = async (day) => {
        try {
            const daysRef = doc(db, `day/${day}`);
            const docSnap = await getDoc(daysRef);console.log("DAY", docSnap.data())
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                console.log("Document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error fetching document:", error);
            return null;
        }
    };

    const getEvents = (day) => {
        getThisDayEvents(getFormattedDay(day)).then((res) => {
            setEvents(res);
        });
    };

    useEffect(() => {
        getEvents(selectedDate);
    }, []);

    const formatForDisplay = (selectedDate) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const formattedDate = selectedDate.toLocaleDateString('en-US', options);

        return formattedDate;
    };
console.log("events", events)
    return (
        <section className="today">
            <div className="draw__top">
                <Link href="/bored">
                    <FontAwesomeIcon className="draw-arrow" icon={faArrowLeft} />
                </Link>
                <h1>TODAY IN HISTORY</h1>
            </div>
            <p className='info'>*This page was made with Firebase and the Puppeteer NPM package to scrape Wikipedia everyday via a Cron Job.</p>
            <h1 className='today'>{events && formatForDisplay(selectedDate)}</h1>
            <div className='today__wrapper'>
                <div className='image-wrapper'>
                    {events ? <img src={events.imgSource} alt="Event" /> : <p>Loading...</p>}
                </div>
                <div className='content-wrapper'>
        
                    {
                        events ?
                            <div className='list-wrapper'>
                                {events.list.map((item, i) => (
                                    <a target="_blank" className='list-item' href={item.link} key={`event-item-key=${i}`}>{item.text}</a>
                                ))}
                            </div>
                            :
                            <p>Hmmm. There does not seem to be a Wikipedia page with this info today.</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default Today;
