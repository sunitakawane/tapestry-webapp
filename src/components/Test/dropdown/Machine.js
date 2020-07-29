import React, { Component } from 'react'
import Select from 'react-select'

import './style.css'

export default function Machine(props){
    const name = props.name
    const list= props.list
    const options = list.map(item =>{ value: {item},label: {item}})
    
    return (
      <div>
        <form>
          <Select className="dropdowncontent" name={name} onChange={props.onChange} onFocus={props.onFocus} options={options}/>
        </form>
      </div>
    );
  
  }