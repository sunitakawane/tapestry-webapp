import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss'

export default function DropdownContent(props) {
  // {/* <p>{wells[index]}</p> */}
  const name = props.name
  let list= props.list
  console.log(name)
  console.log(list)
  
  // let index = -1 
  // for(var item in list)
  // {
  //   index = index + 1
  //   if(item['id'] == props.currentvalue)
  //   {
  //     break
  //   }
  // }  
  // if (index !== -1){
  //   var currentvalue = list[index]
  //   list.splice(index,1)
  //   list = [currentvalue]
  //   console.log(list)
  // }

  // if(list === undefined)
  // {
    // return(<div>
    //   <form>
    //     <select className="dropdowncontent" name={name} onClick={props.onChange} onFocus={props.onFocus}>
    //     </select>
    //   </form>
    // </div>)
  // }
  

  return (
      <div>
        <form>
          <select className="dropdowncontent" name={name} onClick={props.onChange} onFocus={props.onFocus}>
            {list.map(item=>
                {{switch(name)
                {
                  case "selectedmachine":
                    return <option value={item['id']}>{(item['no_of_wells']+'wells(' + item['dim_x'] + 'x' + item['dim_y'] + ') ' + item['name'])}</option>
                  case "selectedkit":
                    return <option value={item['id']}>{("("+item['gene_type']+") "+item['name'])}</option>
                  case "testconductedby":
                    return <option value={item['id']}>{item["first_name"] +' '+ item['last_name']}</option>
                }}              
              }
            )}
          </select>
        </form>
      </div>
    );
}




