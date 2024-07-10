// Write your code here
const AppItem = props => {
  const {sendApp} = props
  const {appName, imageUrl} = sendApp
  return (
    <li className="box-container">
      <img className="img" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
