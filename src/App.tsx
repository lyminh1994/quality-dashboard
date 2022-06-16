import logo from './logo.svg'
import styled from './App.module.css'

const App = () => {
  return (
    <div className={styled.App}>
      <img src={logo} alt="Quality Logo" />
      <h1 className={styled.H1}>Wah Gwan, Soon Come</h1>
      <p>What's Up, Coming Soon</p>
      <p>2020-03-08</p>
    </div>
  )
}

export default App
