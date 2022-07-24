import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'

import signupEmail from '../../kiosk/assets/ZoneA.png'
import signupPassword from '../../kiosk/assets/ZoneA.png'
import signupBday from '../../kiosk/assets/ZoneA.png'

import './EditInfo.css'

function EditInfo() {

  return (
    <div>
      <h1>Edit Info</h1>
    </div>
  )
}

export default EditInfo

