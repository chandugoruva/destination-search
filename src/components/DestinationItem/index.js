import './index.css'

const DestinationItem = props => {
  const {each} = props
  const {name, imgUrl} = each
  return (
    <li className="bg-sub-image">
      <img src={imgUrl} alt="search icon" className="img" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
