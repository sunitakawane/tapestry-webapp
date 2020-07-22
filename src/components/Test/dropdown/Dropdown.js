import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function DropdownContent(props) {
  const [value,setValue]=useState(props.value);
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
      variant="Secondary "
      onSelect={handleSelect}
        >
            {props.item.map(
            item => <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>)}
              <Dropdown.Divider />
      </DropdownButton>
    </div>
  );
}

export default DropdownContent;
