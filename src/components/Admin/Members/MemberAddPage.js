import React, { useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const MemberAddPage = () => {
  const [memberData, setMemberData] = useState({
    name: '',
    memberNo: '',
    email: '',
    mobileNo: '',
    memberType: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMemberAdd = () => {
    // Add your logic here to add the member to the table
    console.log('Adding member:', memberData);
    // You can make an API call or perform any other necessary actions
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="bg-white rounded-lg shadow p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add Member</h2>
        <div className="flex items-center mb-6">
          <FiUserPlus className="text-3xl mr-3" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={memberData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center mb-6">
          <FiUserPlus className="text-3xl mr-3" />
          <input
            type="text"
            name="memberNo"
            placeholder="Member Number"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={memberData.memberNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center mb-6">
          <FiUserPlus className="text-3xl mr-3" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={memberData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center mb-6">
          <FiUserPlus className="text-3xl mr-3" />
          <input
            type="tel"
            name="mobileNo"
            placeholder="Mobile Number"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={memberData.mobileNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center mb-6">
          <FiUserPlus className="text-3xl mr-3" />
          <select
            name="memberType"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={memberData.memberType}
            onChange={handleInputChange}
          >
            <option value="">Select Member Type</option>
            <option value="student">Student</option>
            <option value="lecture">Lecture</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex items-center mb-6">
          <FiUserPlus className="text-3xl mr-3" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={memberData.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          onClick={handleMemberAdd}
        >
          Add Member
        </button>
      </FadeInDiv>
    </div>
  );
};

export default MemberAddPage;
