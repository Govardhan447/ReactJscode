import './index.css'

const Banners = props => {
  const {bannersDetails} = props
  const {key, headerText, description, className} = bannersDetails
  return (
    <li className={className}>
      <div className="container">
        <h1 className="header">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <div>
          <button className="more-btn">Show More</button>
        </div>
      </div>
    </li>
  )
}

export default Banners
