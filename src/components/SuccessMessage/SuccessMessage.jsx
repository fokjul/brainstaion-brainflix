import React from 'react'
import './SuccessMessage.scss'

const SuccessMessage = ({displaySettings, timeLeft, action}) => {

  return (
    <div className={displaySettings ? 'displayNone' : 'display'}>
        <div className='successMsg'>
            <h2>{`Video ${action}!`}</h2>
            <p className={displaySettings ? 'displayNone' : 'display'}>
            {`Your video has been ${action} successfully`}</p>
            <p>{`You will be redirect to Home page in ${timeLeft / 1000} sec`}</p>
        </div>
    </div>
  )
}

export default SuccessMessage