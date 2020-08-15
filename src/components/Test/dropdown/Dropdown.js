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
                  case "selectedMachine":
                    return <option value={item['id']}>{(item['attributes']['noOfWells']+'wells(' + item['attributes']['dimX'] + 'x' +  item['attributes']['dimY'] + ') ' +  item['attributes']['name'])}</option>
                  case "selectedKit":
                    return <option value={item['id']}>{("("+item['attributes']['geneType']+") "+item['attributes']['name'])}</option>
                  case "testconductedby":
                    return <option value={item['id']}>{item['attributes']["firstName"] +' '+ item['attributes']['lastName']}</option>
                }}              
              }
            )}
          </select>
        </form>
      </div>
    );
}




