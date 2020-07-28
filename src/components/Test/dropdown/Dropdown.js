import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'




function DropdownContent(props) {
  // {/* <p>{wells[index]}</p> */}
  const name = props.name
  const list= props.list
  
  return (
    <div>
      <form>
        <select class="dropdowncontent" name={name} onChange={props.onChange} onFocus={props.onFocus}>
          {list.map(item=>
            <option value={item}>{item}</option>
          )}
        </select>
      </form>
    </div>
  );
}

export default DropdownContent;
