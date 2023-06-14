import React, { useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { FaUserAlt } from 'react-icons/fa'

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const FeeUpdatePage = () => {
    const [feeAmount, setFeeAmount] = useState('');

    const handleFeeAmountChange = (event) => {
        setFeeAmount(event.target.value);
    };

    const handleFeeUpdate = () => {
        // Add your logic here to update the fee
        console.log(`Updating fee amount: ${feeAmount}`);
        // You can make an API call or perform any other necessary actions
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <FadeInDiv className="bg-white rounded-lg shadow p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Update Fee</h2>
                <div className="flex items-center mb-6">
                    <FaUserAlt className="text-3xl mr-3" />
                    <input
                        type="text"
                        placeholder="Student Number"
                        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        value={feeAmount}
                        onChange={handleFeeAmountChange}
                    />
                </div>
                <div className="flex items-center mb-6">
                    <FiDollarSign className="text-3xl mr-3" />
                    <input
                        type="text"
                        placeholder="Enter Fee Amount"
                        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        value={feeAmount}
                        onChange={handleFeeAmountChange}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
                    onClick={handleFeeUpdate}
                >
                    Update Fee
                </button>
            </FadeInDiv>
        </div>
    );
};

export default FeeUpdatePage;
