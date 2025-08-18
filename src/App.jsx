import './App.css'
import CounterApp from './CounterApp'
import Event from './Event'
import Footer from './footer'
import Header from './header'
import UserCard from './UserCard'

function App() {
  return (
    <>
      <Header title="Chào bạn đến với React"></Header>
      <Footer footerText="Hẹn gặp lại"></Footer>
      <CounterApp></CounterApp>
      <Event></Event>
      <UserCard name="Nam" age="20"></UserCard>
    </>
  )
}

export default App
