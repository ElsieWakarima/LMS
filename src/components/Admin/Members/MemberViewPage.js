import React, { useState } from 'react';
import { FiUser, FiSearch } from 'react-icons/fi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const MemberViewPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [memberType, setMemberType] = useState('all');

  // Dummy data for member records
  const dummyMembers = [
    { sno: 1, name: 'John Doe', memberno: 'MEM001', email: 'john@example.com', mobileno: '0712345678', member_type: 'student' },
    { sno: 2, name: 'Jane Smith', memberno: 'MEM002', email: 'jane@example.com', mobileno: '0723456789', member_type: 'lecture' },
    { sno: 3, name: 'David Johnson', memberno: 'MEM003', email: 'david@example.com', mobileno: '0734567890', member_type: 'admin' },
    // Add more dummy member records as needed
  ];

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMemberTypeChange = (event) => {
    setMemberType(event.target.value);
  };

  const filteredMembers = dummyMembers.filter((member) => {
    if (memberType === 'all') {
      return member.memberno.toLowerCase().includes(searchTerm.toLowerCase());
    } 

      return (
        member.memberno.toLowerCase().includes(searchTerm.toLowerCase()) &&
        member.member_type === memberType
      );
    
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="bg-white rounded-lg shadow p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Member View</h2>
        <div className="mb-4">
          <div className="flex items-center">
            <FiSearch className="text-xl mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by Member Number"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
          <select
            className="mt-2 border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={memberType}
            onChange={handleMemberTypeChange}
          >
            <option value="all">All Members</option>
            <option value="student">Students</option>
            <option value="lecture">Lecturers</option>
            <option value="admin">Admins</option>
          </select>
        </div>
        {filteredMembers.length > 0 ? (
          <div className="space-y-4">
            {filteredMembers.map((member) => (
              <div key={member.sno} className="flex items-center border-b pb-2">
                <FiUser className="text-2xl mr-2 text-gray-500" />
                <div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-500">
                    Member Number: {member.memberno} | Member Type: {member.member_type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No members found.</p>
        )}
      </FadeInDiv>
    </div>
  );
};

export default MemberViewPage;
