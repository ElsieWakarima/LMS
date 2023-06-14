import React, { useState } from 'react';
import axios from 'axios';

const AddEvent = () => {
  const [workshop, setWorkshop] = useState('');
  const [date1, setDate1] = useState('');
  const [location, setLocation] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new event object
    const newEvent = {
      workshop,
      date1,
      location,
    };

    // Send a POST request to the PHP script to insert the event
    axios
      .post('/path/to/your/php/script.php', newEvent)
      .then((response) => {
        // Handle success or show a success message
        console.log('Event inserted successfully');
      })
      .catch((error) => {
        // Handle error or show an error message
        console.error('Error inserting event:', error);
      });

    // Reset the form fields
    setWorkshop('');
    setDate1('');
    setLocation('');
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workshop">
            Workshop
          </p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="workshop"
            type="text"
            value={workshop}
            onChange={(e) => setWorkshop(e.target.value)}
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
            onChange={(e) => setDate1(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-end">
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

export default AddEvent;
