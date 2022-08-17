    import React, { Component } from 'react'
    import './addTask.css'
    import axios from 'axios'
    import {Link} from 'react-router-dom'
import AddTask from './AddTask'
import EditTask from './EditTask'

    
    export default class TasksList extends Component {

        constructor(props){
            super(props)

            this.state={
                tasksList:[],
                edit_id:'',

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

        editClick=(e)=>{

         this.setState({edit_id:e.target.value});

         <EditTask props = {this.state.edit_id}/>             

         
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
                            <Link to={`/edittodo/${task.id}`}  params={{ testvalue: "hello" }} onClick={this.editClick} class="btn btn-primary">Edit</Link>


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
    