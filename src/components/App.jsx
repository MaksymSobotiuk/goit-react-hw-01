import './App.css'

import Profile from "./Profile/Profile.jsx"
import userData from "../data/userData.json"

import FriendList from './FriendList/FriendList.jsx'
import friends from '../data/friends.json'

import TransactionHistory from './TransactionHistory/TransactionHistory.jsx'
import transactions from '../data/transactions.json'

function App() {

  return (
    <>
       <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

       <TransactionHistory items={transactions} />
    </>
  )
}
export default App