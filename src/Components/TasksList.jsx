    import React, { Component } from 'react'
    import './addTask.css'
    import axios from 'axios'
    
    export default class TasksList extends Component {

        constructor(){
            super()

            this.state={
                tasksList:[],

            }
        }


        componentDidMount() {
          axios.get(`https://62fb8073abd610251c0a6411.mockapi.io/v1/todos`)
            .then(res => {
              console.log(res.data);
              const tasksList = res.data;
              this.setState({ tasksList });
            })
        }
      
      

      render() {
        return (
          <div className='container'>

            <div className='card'>
                <div className='card-title'>
                    <h3 className='task'>Tasks List</h3>

                    <div className='card-body'>

                    <table className="table">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Task</th>
                        <th>Actions</th>

                       
                      </tr>
                    </thead>
                        <tbody>
                            {this.state.tasksList.map(task=>(
                             <tr>
                            <td key={task.id}>{task.id}</td>
                            <td>{task.task}</td>
                            <td >
                              <button className="btn btn-primary">Edit</button>
                              <button className="btn btn-danger">Delete</button>
                            </td>

                            </tr>
                            ))}
                           
                        
                         
                        </tbody>
                    </table>

                    </div>

                </div>

            </div>

          </div>
        )
      }
    }
    