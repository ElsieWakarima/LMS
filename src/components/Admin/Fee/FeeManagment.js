import React, { useState, useEffect } from 'react';
import { BiSave, BiTrash, BiEdit, BiSearch } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const FeeManagementPage = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingFee, setEditingFee] = useState(null);
  const [newFee, setNewFee] = useState({
    sno: '',
    memberno: '',
    amount: '',
    date: '',
    status: '',
  });

  const [searchMemberNo, setSearchMemberNo] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulate loading data from an API or database
    setTimeout(() => {
      const dummyData = [
        {
          sno: 1,
          memberno: '1001',
          amount: '50',
          date: '2023-06-01',
          status: 'Paid',
        },
        // Add more dummy data here...
      ];
      setFees(dummyData);
      setLoading(false);
      if(searchMemberNo===''){
        setSearchResults(dummyData);
      }
    }, 1500);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFee((prevFee) => ({
      ...prevFee,
      [name]: value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchMemberNo(event.target.value);
  };

  const handleAddFee = () => {
    setFees((prevFees) => [...prevFees, newFee]);
    setNewFee({
      sno: '',
      memberno: '',
      amount: '',
      date: '',
      status: '',
    });
  };

  const handleEditFee = (fee) => {
    setEditingFee(fee);
    setNewFee(fee);
  };

  const handleUpdateFee = () => {
    setFees((prevFees) =>
      prevFees.map((fee) => (fee.sno === editingFee.sno ? newFee : fee))
    );
    setEditingFee(null);
    setNewFee({
      sno: '',
      memberno: '',
      amount: '',
      date: '',
      status: '',
    });
  };

  const handleDeleteFee = (sno) => {
    setFees((prevFees) => prevFees.filter((fee) => fee.sno !== sno));
  };

  const handleSearchFee = () => {
    const results = fees.filter((fee) => fee.memberno.includes(searchMemberNo));
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Fee Management</h2>

        {/* Add/Edit Fee Form */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">{editingFee ? 'Edit Fee' : 'Add Fee'}</h3>
          <div className="mb-4">
            <p htmlFor="sno" className="block text-sm font-medium text-gray-700">
              SNO
            </p>
            <input
              type="text"
              id="sno"
              name="sno"
              value={newFee.sno}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="memberno" className="block text-sm font-medium text-gray-700">
              Member No
            </p>
            <input
              type="text"
              id="memberno"
              name="memberno"
              value={newFee.memberno}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </p>
            <input
              type="text"
              id="amount"
              name="amount"
              value={newFee.amount}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </p>
            <input
              type="text"
              id="date"
              name="date"
              value={newFee.date}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </p>
            <input
              type="text"
              id="status"
              name="status"
              value={newFee.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          {editingFee ? (
            <button
              type="button"
              onClick={handleUpdateFee}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
            >
              Update Fee
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAddFee}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
            >
              Add Fee
            </button>
          )}
        </div>

        {/* Search Fee */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">Search Fee</h3>
          <div className="flex items-center">
            <input
              type="text"
              id="searchMemberNo"
              name="searchMemberNo"
              value={searchMemberNo}
              onChange={handleSearchChange}
              placeholder="Enter Member No"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
            <button
              type="button"
              onClick={handleSearchFee}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ml-2"
            >
              <BiSearch className="inline-block w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Display Fee Cards */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {searchResults.length > 0 ? (
              searchResults.map((fee) => (
                <FadeInDiv key={fee.sno} className="bg-white rounded-lg shadow p-4 mb-4">
                  <div className="flex justify-end">
                    <BiEdit
                      className="text-blue-500 hover:text-blue-600 cursor-pointer"
                      onClick={() => handleEditFee(fee)}
                    />
                    <BiTrash
                      className="text-red-500 hover:text-red-600 cursor-pointer ml-2"
                      onClick={() => handleDeleteFee(fee.sno)}
                    />
                  </div>
                  <h3 className="text-lg font-bold">Member No: {fee.memberno}</h3>
                  <p className="text-gray-500">Amount: {fee.amount}</p>
                  <p className="text-gray-500">Date: {fee.date}</p>
                  <p className="text-gray-500">Status: {fee.status}</p>
                </FadeInDiv>
              ))
            ) : (
              <p>No fees found.</p>
            )}
          </>
        )}
      </FadeInDiv>
    </div>
  );
};

export default FeeManagementPage;
