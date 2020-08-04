import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss'

export default function DropdownContent(props) {
  // {/* <p>{wells[index]}</p> */}
  const name = props.name
  let list= props.list
  if(props.currentvalue !== undefined)
  {
    var index = list.indexOf(props.currentvalue)
    if (index !== -1) {
      list.splice(index,1)
    }
    list = [props.currentvalue].concat(list)
  }
  
  return (
    <div>
      <form>
        <select className="dropdowncontent" name={name} onChange={props.onChange} onFocus={props.onFocus}>
          {list.map(item=>
            <option value={item}>{item}</option>
          )}
        </select>
      </form>
    </div>
  );
}




