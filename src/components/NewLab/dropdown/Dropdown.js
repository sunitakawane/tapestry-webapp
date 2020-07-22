import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function City() {
  const [value,setValue]=useState('Bangalore');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <div className="App container">
      
      <DropdownButton
      alignRight
      title={value}
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="option-1">Delhi</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Mumbai</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">Pune</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton>
    </div>
  );
}

export default City;
