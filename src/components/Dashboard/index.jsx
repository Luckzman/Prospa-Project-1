import React from 'react';
import Navbar from '../Navbar';
import Card from '../Card';
import data from './fixtures';
import './Dashboard.scss';
import NewCard from '../NewCard';



function Dashboard({ toggleSideBar }) {
  return (
    <div className="dashboard">
      <Navbar toggleSideBar={toggleSideBar} />
      <main className="main">
        <div className="container">
          <h2>All accounts</h2>
          <hr/>
          <div className="content">
            {data.map((data, index) => 
            <Card key={index+'a'}
              acctNum={data.accountNum}
              acctType={data.accountType}
              amt={data.amount}
              children={data.img}
              className={data.className}
            />)}
            <NewCard />
          </div>
        </div>
      </main>
      <div className="footer">
        <div className="footer-content">
          <h2>All transactions</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;