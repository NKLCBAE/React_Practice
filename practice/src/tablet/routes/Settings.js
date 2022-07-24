import React from "react"
import {useState} from "react";
import './Settings.css'
// import { Link } from "react-router-dom";
import Select from "react-select";


function Settings() {
  const statusOpt = [
    {value: 'online', label: '온라인'},
    {value: 'offline', label: '오프라인'},
    {value: 'doNotDisturb', label: '방해금지'},
    {value: 'away', label: '자리비움'},
  ]


  const [select, setSelect] = useState(statusOpt[0].value)
  const handleChange = event => {
    setSelect(event.target.value);
  }

  console.log('2'+select)
  return (
    <div>
      <h1>settings page</h1>
      <div className="selectYourStatus">
        <select value={select} onChange={handleChange} className="selectStatus">
          {statusOpt.map(option => (
            <option key={option.value} value={option.value} defaultvalue={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Settings;

