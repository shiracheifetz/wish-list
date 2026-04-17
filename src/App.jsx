import './App.css'
import List from './List';

function App() {
  const wishListItems = [ 
      { "id": 1, "value": "New Laptop" }, 
      { "id": 2, "value": "Headphones" }, 
      { "id": 3, "value": "Camera" }, 
      { "id": 4, "value": "New Bag" }
  ] 
  return (
    <>
    <div>
      <header className="website-header">
        <h2>Wish List</h2>
      </header>
      <List items={wishListItems}/>
    </div>
    </>
  )
}

export default App