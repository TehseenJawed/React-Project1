import React from "react";
import { Navbar } from "react-bootstrap";
export default function Topbar() {
  return (
    <div>
      <Navbar bg='light'>
        <Navbar.Brand className='col-12 align-middle'>
          Expense Tracker
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
