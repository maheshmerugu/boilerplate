import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,Link
} from "react-router-dom";
import AddTask from './Components/AddTask';
import TasksList from './Components/TasksList';
import editTask from './Components/EditTask';
import EditTask from './Components/EditTask';

const bgColors = { "Default": "#81b71a",
                    "Blue": "#e3f2fd",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div className='container'>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: bgColors.Blue}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Todos</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/addtodo">Add Todo</Link>

              </li>       

            
            </ul>


                   
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


</div>


    <Routes>
      <Route path="/" element={<TasksList />} />
      <Route path="/addtodo" element={<AddTask />} />
      <Route path="/edittodo/:id" element={<EditTask />} />


    </Routes>
  </BrowserRouter>
    );
  }
}

export default App;