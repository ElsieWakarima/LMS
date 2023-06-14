import React from 'react';

const students = [
  {
    id: 1,
    name: 'John Doe',
    major: 'Computer Science',
    year: 'Senior',
    hobbies: ['Playing guitar', 'Reading', 'Hiking'],
    profileImage: 'john-doe.jpg',
  },
  // Add more student data here
];

const StudentProfile = ({ studentId }) => {
  const student = students.find((student) => student.id === 1);

  if (!student) {
    return <div>No student found with the provided ID.</div>;
  }

  const { name, major, year, hobbies, profileImage } = student;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-12">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-600">{major}</p>
            <p className="text-gray-600">{year}</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Hobbies</h3>
          <ul className="list-disc ml-6 mt-2">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
