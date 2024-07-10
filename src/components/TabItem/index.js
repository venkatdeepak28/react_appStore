// Write your code here
import './index.css'

const TabItem = props => {
  let classValue
  const {tabValue, underline, clickChange} = props
  const {tabId, displayText} = tabValue
  const changeTabId = () => {
    clickChange(tabId)
  }
  if (tabId === underline) {
    classValue = 'custom-btn selected'
  } else {
    classValue = 'custom-btn'
  }
  return (
    <li className="list-el">
      <button className={`${classValue}`} type="submit" onClick={changeTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
