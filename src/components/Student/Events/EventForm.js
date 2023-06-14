import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [workshop, setWorkshop] = useState('');
  const [date1, setDate1] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the event object
    const event = {
      workshop,
      date1,
      location
    };

    // Send a POST request to the PHP script
    axios.post('/path/to/your/php/script.php', {
      action: 'insert',
      ...event
    })
      .then(response => {
        console.log('Event inserted successfully:', response.data);
        // Reset the form fields
        setWorkshop('');
        setDate1('');
        setLocation('');
      })
      .catch(error => {
        console.error('Error inserting event:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Update Events</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workshop">
            Workshop
          </p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="workshop"
            type="text"
            placeholder="Workshop"
            value={workshop}
            onChange={e => setWorkshop(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date1">
            Date
          </p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date1"
            type="date"
            value={date1}
            onChange={e => setDate1(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="checkbox-2">
            Location
          </p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
