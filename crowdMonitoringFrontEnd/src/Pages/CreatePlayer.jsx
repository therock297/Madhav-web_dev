import React, { useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePlayer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [team, setTeam] = useState('');
  const [position, setPosition] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [sport, setSport] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSavePlayer = () => {
    setError(null);
    const data = {
      firstName,
      lastName,
      age,
      team,
      position,
      dateOfBirth,
      sport,
    };

    if (
      !firstName ||
      !lastName ||
      !age ||
      !team ||
      !position ||
      !dateOfBirth ||
      !sport
    ) {
      setError('Please enter all the fields.');
      return;
    }

    setLoading(true);
    axios
      .post('http://localhost:5004/players', data)
      .then((res) => {
        setLoading(false);
        navigate('/players');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError('An error occurred while saving the player.');
      });
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gradient-to-r from-blue-900 to-orange-500 rounded-lg shadow-lg font-apple">
      <BackButton />
      <h1 className="text-3xl text-center font-bold text-black mb-8 hover:text-white hover:font-semibold hover:text-lg hover:scale-105 transition duration-300">Create New Player</h1>
      {loading && <Spinner />}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-lg text-black font-bold mb-1 hover:text-white hover:font-semibold hover:text-lg hover:scale-105 transition duration-300">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-black font-bold mb-1 hover:text-white hover:font-semibold hover:text-lg hover:scale-105 transition duration-300">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-black font-bold mb-1 hover:text-white hover:font-semibold hover:text-lg hover:scale-105 transition duration-300">Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-black font-bold mb-1 hover:text-white hover:font-semibold hover:text-lg hover:scale-105 transition duration-300">Team</label>
          <input
            type="text"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-black font-bold mb-1 hover:text-white hover:font-semibold hover:text-lg hover:scale-105 transition duration-300">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-black font-bold mb-1 hover:text-white hover:font-semibold hover:text-lg hover:scale-105 transition duration-300">Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-black font-bold mb-1 hover:text-white hover:font-semibold hover:text-lg hover:scale-105 transition duration-300">Sport</label>
          <input
            type="text"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            className="input"
          />
        </div>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex justify-center mt-6">
        <button
          className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 hover:bg-red-500 transition duration-300"
          onClick={handleSavePlayer}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreatePlayer;
