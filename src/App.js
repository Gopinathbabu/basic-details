import './App.scss';
import './employeeList.scss';
// import Header from './Header';
// import Footer from './Footer';
import Content from './Content';
import ShowEmployeeList from './employeeList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/basic-details/' element={<ShowEmployeeList />} />
          <Route path='/basic-details/add/' element={<Content />} />
        </Routes>
      </Router>
      {/* <Content></Content> */}
      {/* <ShowEmployeeList></ShowEmployeeList> */}
      {/* <Footer></Footer> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
