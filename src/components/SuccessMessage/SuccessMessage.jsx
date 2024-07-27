import React from 'react'
import './SuccessMessage.scss'

const SuccessMessage = ({displayForm, timeLeft}) => {
  return (
    <div className={displayForm ? 'displayNone' : 'display'}>
        <div className='successMsg'>
            <h2>Video Uploaded!</h2>
            <p className={displayForm ? 'displayNone' : 'display'}>
            Your video has been uploaded successfully</p>
            <p>{`You will be redirect to Home page in ${timeLeft / 1000} sec`}</p>
        </div>
    </div>
  )
}

export default SuccessMessage