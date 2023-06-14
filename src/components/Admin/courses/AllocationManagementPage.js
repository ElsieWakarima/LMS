import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const AllocationPage = () => {
  const [allocations, setAllocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedAllocation, setEditedAllocation] = useState({ allocation_id: '', lecture_id: '', course_id: '' });

  useEffect(() => {
    // Fetch allocations from the server
    fetchAllocations();
  }, []);

  const fetchAllocations = async () => {
    try {
      const response = await axios.get('/api/allocations'); // Replace with your API endpoint
      setAllocations(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/allocations?lecture_id=${searchTerm}`); // Replace with your API endpoint
      setAllocations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAllocation = async () => {
    try {
      await axios.post('/api/allocations', editedAllocation); // Replace with your API endpoint
      setEditMode(false);
      setEditedAllocation({ allocation_id: '', lecture_id: '', course_id: '' });
      fetchAllocations();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateAllocation = async () => {
    try {
      await axios.put(`/api/allocations/${editedAllocation.allocation_id}`, editedAllocation); // Replace with your API endpoint
      setEditMode(false);
      setEditedAllocation({ allocation_id: '', lecture_id: '', course_id: '' });
      fetchAllocations();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditAllocation = (allocation) => {
    setEditMode(true);
    setEditedAllocation({ ...allocation });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedAllocation({ allocation_id: '', lecture_id: '', course_id: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4">Course Allocations</h2>

        {/* Search */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Lecture ID"
            className="border border-gray-300 rounded-l-md py-2 px-4 w-full"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-md px-4 py-2"
          >
            <AiOutlineSearch />
          </button>
        </div>

        {/* Allocations */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {allocations.map((allocation) => (
              <div key={allocation.allocation_id} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold">Allocation ID: {allocation.allocation_id}</h3>
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => handleEditAllocation(allocation)}
                      className="text-blue-500 hover:text-blue-600 mr-2"
                    >
                      <MdEdit />
                    </button>
                  </div>
                </div>
                {editMode && allocation.allocation_id === editedAllocation.allocation_id ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={editedAllocation.lecture_id}
                      onChange={(e) =>
                        setEditedAllocation({ ...editedAllocation, lecture_id: e.target.value })
                      }
                      placeholder="Lecture ID"
                      className="border border-gray-300 rounded-l-md py-2 px-4 w-full"
                    />
                    <input
                      type="text"
                      value={editedAllocation.course_id}
                      onChange={(e) =>
                        setEditedAllocation({ ...editedAllocation, course_id: e.target.value })
                      }
                      placeholder="Course ID"
                      className="border border-gray-300 rounded-r-md py-2 px-4 w-full"
                    />
                    <button
                      type="button"
                      onClick={handleUpdateAllocation}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-r-md px-4 py-2"
                    >
                      <FaSave />
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="bg-gray-500 hover:bg-gray-600 text-white rounded-r-md px-4 py-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <p>Lecture ID: {allocation.lecture_id}</p>
                    <p>Course ID: {allocation.course_id}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </FadeInDiv>
    </div>
  );
};

export default AllocationPage;
