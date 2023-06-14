import React, { useEffect, useState } from 'react';
import { BiSave, BiTrash, BiEdit, BiSearch } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const MemberManagementPage = () => {
  const [members, setMembers] = useState([]);

  const handledata = () => {
    axios.get('/listmember.php')
      .then(response => {
        setMembers(response.data);
        if (searchMemberNo === '') {
          setSearchResults(response.data);
        }
        console.log(response.data)

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


      // setLoading(false);
    }, 1500);
  }, []);

  const [editingMember, setEditingMember] = useState(null);
  const [newMember, setNewMember] = useState({
    sno: '',
    name: '',
    memberno: '',
    email: '',
    mobileno: '',
    memberType: '',
    password: '',
  });

  const [sno, setsno] = useState('')
  const [name, setname] = useState('')
  const [memberno, setmemberno] = useState('')
  const [email, setemail] = useState('')
  const [mobileno, setmobileno] = useState('')
  const [memberType, setmemberType] = useState('')
  const [password, setpassword] = useState('')



  const [searchMemberNo, setSearchMemberNo] = useState('');
  const [searchResults, setSearchResults] = useState(members);

  const handlename = (event) => {
    setname(event.target.value);
  };

  const handlemembersno = (event) => {
    setmemberno(event.target.value);
  };

  const handleemail = (event) => {
    setemail(event.target.value);
  };

  const handlemobileno = (event) => {
    setmobileno(event.target.value);
  };

  const handlemembertype = (event) => {
    setmemberType(event.target.value);
  };


  const handlepassword = (event) => {
    setpassword(event.target.value);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchMemberNo(event.target.value);
  };

  const handleAddMember = () => {

    if (memberno !== '' && name !== '') {
      const jarray = [];


      jarray.push({
        memberno,
        name,
        email,
        password,
        memberType
      });
      let mydata = 0
      mydata = JSON.stringify(jarray);
      // alert('ok')

      console.log(mydata)
      const url = "/insertmembers.php";

      const b = false;

      axios
        .post(url, mydata, { headers: { "Content-Type": "application/json" } })
        .then((response) => {
          // alert('error')
          // check response
          console.log(response)
          if (response.data[0].status === 1) {
            alert('Member added Successfully');
            setEditingMember(false)
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

  const handleEditMember = (sno, memberno,mobileno, name, email, password, memberType) => {
    setsno(sno)
    setmemberno(memberno)
    setmobileno(mobileno)
    setname(name)
    setemail(email)
    setpassword(password)
    setmemberType(memberType)
    setEditingMember(true)

  };

  const handleUpdateMember = () => {
    const jarray = [];
    jarray.push({
      sno,
      memberno,
      name,
      email,
      password,
      memberType,
      mobileno
    });
    let mydata = 0
    mydata = JSON.stringify(jarray);
    // alert('ok')

    console.log(mydata)
    const url = "/updatemembers.php";

    const b = false;

    axios
      .post(url, mydata, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        // alert('error')
        // check response
        console.log(response)
        if (response.data[0].status === 1) {
          alert('Course Updated Successfully');
          setEditingMember(false)
          handledata()

        } else {

          alert('Invalid Details');
        }
      })
      .catch((error) => {

        console.log(error)
      })
  };

  const handleDeleteMember = (sno) => {
    const jarray = [];
    jarray.push({
      sno,
      mkey: 1090,
    });
    let mydata = 0
    mydata = JSON.stringify(jarray);
    // alert('ok')

    console.log(mydata)
    const url = "/delete_members.php";

    const b = false;

    axios
      .post(url, mydata, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        // alert('error')
        // check response
        alert('course deleted successfully')
        handledata()
      })
      .catch((error) => {

        console.log(error)
      })


  };

  const handleSearchMember = () => {
    const results = members.filter((member) => member.memberno.includes(searchMemberNo));
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Member Management</h2>

        {/* Add or Edit Member Form */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">{editingMember ? 'Edit Member' : 'Add Member'}</h3>

          <div className="mb-4">
            <p htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </p>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handlename}
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
              value={memberno}
              onChange={handlemembersno}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </p>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleemail}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="mobileno" className="block text-sm font-medium text-gray-700">
              Mobile No
            </p>
            <input
              type="text"
              id="mobileno"
              name="mobileno"
              value={mobileno}
              onChange={handlemobileno}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="memberType" className="block text-sm font-medium text-gray-700">
              Member Type
            </p>
            <input
              type="text"
              id="memberType"
              name="memberType"
              value={memberType}
              onChange={handlemembertype}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </p>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={handlepassword}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          {editingMember ? (
            <button
              type="button"
              onClick={handleUpdateMember}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
            >
              Update Member
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAddMember}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
            >
              Add Member
            </button>
          )}
        </div>

        {/* Search Member */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">Search Member</h3>
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
              onClick={handleSearchMember}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ml-2"
            >
              <BiSearch className="inline-block w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Display Member Cards */}
        {searchResults.length > 0 ? (
          searchResults.map((member) => (
            <div key={member.sno} className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex justify-end">
                <BiEdit
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                  onClick={() => handleEditMember(
                    member.sno,
                    member.memberno,
                    member.mobileno,
                    member.name,
                    member.email,
                    member.password,
                    member.member_type)}
                />
                <BiTrash
                  className="text-red-500 hover:text-red-600 cursor-pointer ml-2"
                  onClick={() => handleDeleteMember(member.sno)}
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.memberno}</p>
              <p className="text-gray-500">{member.email}</p>
              <p className="text-gray-500">{member.mobileno}</p>
              <p className="text-gray-500">{member.member_type}</p>
              <p className="text-gray-500">{member.password}</p>
            </div>
          ))
        ) : (
          <p>No members found.</p>
        )}
      </FadeInDiv>
    </div>
  );
};

export default MemberManagementPage;
