import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Employee Management System (Code is changed and website is automatically updated through pipeline)</h2>
      <p>Use the navigation above to manage employee records.</p>

      <div className='btn'>
      <Link to="/employees"><Button primary>Employee List</Button></Link>
      <Link to="/add-employee"><Button secondary>Add Employee</Button></Link>
      <Button disabled>Disabled Button</Button>
      </div>
    </div>
  );
};

export default Home;




