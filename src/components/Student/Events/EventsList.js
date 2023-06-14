import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data
    axios.get('/listevents.php')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-8">
        <h1 className="text-4xl text-center font-bold mb-8">Upcoming Events</h1>

        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white hover:bg-gray-100  rounded-md shadow-lg p-6 mb-8"
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          >
            <h2 className="text-xl font-bold mb-2">{event.workshop}</h2>
            <p className="text-gray-500 mb-2">
              <span className="font-bold">Date:</span> {event.date1}
            </p>
            <p className="text-gray-500 mb-2">
              <span className="font-bold">Location:</span> {event.location}
            </p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


