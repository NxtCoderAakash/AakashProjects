import './index.css'

const NotFound = props => {
  const {getData} = props

  return (
    <div className="bg-container-failure">
      <div className="failure-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
          alt="failure view"
          className="failure-image"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <button onClick={getData}>Retry</button>
      </div>
    </div>
  )
}

export default NotFound
