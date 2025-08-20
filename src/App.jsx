import './App.css'
import CounterApp from './CounterApp'
import Event from './Event'
import Footer from './footer'
import Header from './header'
import Javascript from './Javascript'
import List from './List'
import UserCard from './UserCard'

function App() {
  const lists = [
    { id: 1, name: 'apple', price: '260$' },
    { id: 2, name: 'mango', price: '260$' },
    { id: 3, name: 'cherry', price: '260$' },
  ]
  return (
    <>
      <Header title="Chào bạn đến với React"></Header>
      <Footer footerText="Hẹn gặp lại"></Footer>
      <CounterApp></CounterApp>
      <Event></Event>
      <UserCard name="Nam" age="20"></UserCard>
      <List lists={lists} />
      <Javascript />
    </>
  )
}

export default App
