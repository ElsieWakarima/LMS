import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List, ListItem, ListItemText, makeStyles } from '@mui/material';



const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data
    axios
      .get('/listevents.php')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleUpdate = (event) => {
    // Handle update logic here
    alert('Update event:', event);
  };

  const handleDelete = (event) => {
    // Handle delete logic here
    alert('Delete event:', event);
  };

  return (
    <div >
      <h1>Events List</h1>
      <List>
        {events.map((event) => (
          <ListItem key={event.sno}>
            <ListItemText primary={event.workshop} secondary={`Date: ${event.date1}, Location: ${event.location}`} />
            <div >
              <Button variant="contained" color="primary" onClick={(event) => handleUpdate(event.workshop)}>
                Update
              </Button>
              <Button variant="contained" color="secondary" onClick={(event) => handleDelete(event)}>
                Delete
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EventsList;
