import React, { Component } from 'react'
import axios from 'axios';

import './Dropzone.css'
import url from "../../constants/url";


class Dropzone extends Component {
  constructor(props) {
    super(props)
    this.state = { hightlight: false,file:null}
    this.fileInputRef = React.createRef()

    this.openFileDialog =   this.openFileDialog.bind(this)
    this.onFileAdded = this.onFileAdded.bind(this)
    // this.onDragOver = this.onDragOver.bind(this)
    // this.onDragLeave = this.onDragLeave.bind(this)
    // this.onDrop = this.onDrop.bind(this)
  }

  openFileDialog() {
    // if (this.props.disabled) return
    this.fileInputRef.current.click()
  }

  onFileAdded(evt) {
    const file = evt.target.files[0]
    console.log(file.name)
    // if (this.props.onFilesAdded) {
    //   const array = this.fileListToArray(files)
    //   this.props.onFilesAdded(array)
    // }
    axios.post(url["BASE_API_URL"]+'upload/',{
      "test_id": 7,
      "file_name": file.name
    },{
    headers:{
      "Authorization":'Bearer '+ JSON.parse(localStorage.getItem("user"))['token'],
      'Content-Type':'application/json'
    }})
    .then(res=>{ 
      const upload_url = res.data['upload_url']
      console.log(upload_url)
      let config = {
          onUploadProgress: function(progressEvent){
              // setcompleted(Math.round((progressEvent.loaded * 100) / progressEvent.total));
              console.log(Math.round((progressEvent.loaded * 100) / progressEvent.total))
          }
      }

      const formData = new FormData();
      formData.append("file",file,file.name);
  
      axios.put(upload_url,formData,config)
      .then("load", event => {
          // setdownload(true)
          console.log("Successful")
      })
      .catch(error=>{
          console.log(error.message)
      })
  }).catch(err=>console.log(err))
  }

  // onDragOver(evt) {
  //   evt.preventDefault()

  //   if (this.props.disabled) return

  //   this.setState({ hightlight: true })
  // }

  // onDragLeave() {
  //   this.setState({ hightlight: false })
  // }

  // onDrop(event) {
  //   event.preventDefault()

  //   if (this.props.disabled) return

  //   const files = event.dataTransfer.files
  //   if (this.props.onFilesAdded) {
  //     const array = this.fileListToArray(files)
  //     this.props.onFilesAdded(array)
  //   }
  //   this.setState({ hightlight: false })
  // }

  // fileListToArray(list) {
  //   const array = []
  //   for (var i = 0; i < list.length; i++) {
  //     array.push(list.item(i))
  //   }
  //   return array
  // }

        
  render() {
    return (
      <div
        className={`Dropzone ${this.state.hightlight ? 'Highlight' : ''}`}
        // onDragOver={this.onDragOver}
        // onDragLeave={this.onDragLeave}
        // onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFileAdded}
        />
        <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        />
        <span>Upload Files</span>
      </div>
    )
  }
}

export default Dropzone