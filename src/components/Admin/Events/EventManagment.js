import React, { useState, useEffect } from 'react';
import { BiSave, BiTrash, BiEdit, BiSearch } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const EventManagementPage = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const [searchWorkshop, setSearchWorkshop] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [workshop, setworkshop] = useState('')
  const [date1, setdate1] = useState('')
  const [location, setlocation] = useState('')
  const [sno, setsno] = useState('')

const handledata =()=>{
  axios.get('/listevents.php')
  .then(response => {
    setEvents(response.data);
    if (searchWorkshop === '') {
      setSearchResults(response.data);

    }
  })
  .catch(error => {
    console.error('Error fetching events:', error);
  });
}

  useEffect(() => {
    // Simulate loading data from an API or database
    setTimeout(() => {
      // Fetch events data
     handledata()
      // Add more dummy data here...


      setLoading(false);
    }, 1500);
  }, []);

  const handleworkshop = (event) => {
    setworkshop(event.target.value)
  };
  const handledate1 = (event) => {
    setdate1(event.target.value)
  };
  const handlelocation = (event) => {
    setlocation(event.target.value)
  };
  const handleAddEvent = () => {
    if (workshop !== '' && date1 !=='' && location !== '') {
      const jarray = [];


      jarray.push({
        workshop,
        sno,
        date1,
        location
      });
      let mydata = 0
      mydata = JSON.stringify(jarray);
      // alert('ok')
  
      console.log(mydata)
      const url = "/insertevents.php";
  
      const b = false;
  
      axios
        .post(url, mydata, { headers: { "Content-Type": "application/json" } })
        .then((response) => {
          // alert('error')
          // check response
          console.log(response)
          if (response.data[0].status === 1) {
            alert('event added Successfully');
            setEditingEvent(false)
            handledata()
  
          } else {
  
            alert('Invalid Details');
          }
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data);
            alert(error.response.status);
            alert(error.response.headers);
          }
        })
    } else {
      alert('invalid value')
    }

  };

  const handleEditEvent = (sno, workshop, date1, location) => {
    setEditingEvent(true)
    setsno(sno)
    setworkshop(workshop)
    setdate1(date1)
    setlocation(location)
  };

  const handleUpdateEvent = () => {
    const jarray = [];
    jarray.push({
      workshop,
      sno,
      date1,
      location
    });
    let mydata = 0
    mydata = JSON.stringify(jarray);
    // alert('ok')

    console.log(mydata)
    const url = "/updateevents.php";

    const b = false;

    axios
      .post(url, mydata, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        // alert('error')
        // check response
        console.log(response)
        if (response.data[0].status === 1) {
          alert('event Updated Successfully');
          setEditingEvent(false)
          handledata()
          

        } else {

          alert('Invalid Details');
        }
      })
      .catch((error) => {

        console.log(error)
      })



  };

  const handleDeleteEvent = (sno) => {
    const jarray = [];
    jarray.push({
      sno,
      mkey: 1090,
    });
    let mydata = 0
    mydata = JSON.stringify(jarray);
    // alert('ok')

    console.log(mydata)
    const url = "/delete_events.php";

    const b = false;

    axios
      .post(url, mydata, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        // alert('error')
        // check response
        alert('event deleted successfully')
        handledata()
        
      })
      .catch((error) => {

        console.log(error)
      })
  };

  const handleSearchChange = (event) => {
    setSearchWorkshop(event.target.value);
  };

  const handleSearchEvent = () => {
    const filteredEvents = events.filter((event) =>
      event.workshop.toLowerCase().includes(searchWorkshop.toLowerCase())
    );
    setSearchResults(filteredEvents);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Event Management</h2>

        {/* Add/Edit Event Form */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">{editingEvent ? 'Edit Event' : 'Add Event'}</h3>

          <div className="mb-4">
            <p htmlFor="workshop" className="block text-sm font-medium text-gray-700">
              Workshop
            </p>
            <input
              type="text"
              id="workshop"
              name="workshop"
              value={workshop}
              onChange={handleworkshop}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="date1" className="block text-sm font-medium text-gray-700">
              Date
            </p>
            <input
              type="date"
              id="date1"
              name="date1"
              value={date1}
              onChange={handledate1}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </p>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handlelocation}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="flex justify-end">
            {editingEvent ? (
              <button
                type="button"
                onClick={handleUpdateEvent}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAddEvent}
                className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2"
              >
                Add
              </button>
            )}
          </div>
        </div>

        {/* Search Event */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">Search Event</h3>
          <div className="flex items-center">
            <input
              type="text"
              id="searchWorkshop"
              name="searchWorkshop"
              value={searchWorkshop}
              onChange={handleSearchChange}
              placeholder="Enter Workshop Name"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
            <button
              type="button"
              onClick={handleSearchEvent}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md ml-2 px-4 py-2"
            >
              <BiSearch />
            </button>
          </div>
        </div>

        {/* Display Events */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.map((event) => (
              <div
                key={event.sno}
                className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{event.workshop}</h3>
                  <p>Date: {event.date1}</p>
                  <p>Location: {event.location}</p>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleEditEvent(event.sno, event.workshop, event.date1, event.location)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-2 py-1 mr-2"
                  >
                    <BiEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteEvent(event.sno)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-1"
                  >
                    <BiTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </FadeInDiv>
    </div>
  );
};

export default EventManagementPage;
