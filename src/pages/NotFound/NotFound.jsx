import './NotFound.scss'

const NotFound = ({displaySettings, timeLeft}) => {
  return (
    <div className={displaySettings ? 'displayNone' : 'display'}>
        <div className='notFound'>
            <h2>Page is not found</h2>
            <p>{`You will be redirect to Home page in ${timeLeft / 1000} sec`}</p>
        </div>
    </div>
  )
}
export default NotFound