import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> RESTUrant App</p>
      <div className="appdownload-platforms">
       <a href="https://play.google.com/store/apps?hl=en&pli=1" target='_blank'><img src={assets.play_store} alt="" className="app-download-platforms" /></a> 
        <a href="https://www.apple.com/eg/app-store/" target='_blank'><img src={assets.app_store} alt="" /></a>
      </div>
    </div>
  )
}

export default AppDownload
