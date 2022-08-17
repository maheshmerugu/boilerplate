    import React, { Component } from 'react'
    import './addTask.css'
    import axios from 'axios'
    import {Link} from 'react-router-dom'
import AddTask from './AddTask'
import EditTask from './EditTask'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    
    export default class TasksList extends Component {

        constructor(props){
            super(props)

            this.state={
                tasksList:[],
                edit_id:'',

            }
        }
loadtodos(){
  axios.get(`https://62fb8073abd610251c0a6411.mockapi.io/v1/todos`)
  .then(res => {
    console.log(res.data);
    const tasksList = res.data;
    this.setState({ tasksList });
  })
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
        }


        deleteTask=(e)=>{

          const pathname = window.location.pathname;
          const delete_id = pathname.substring(pathname.lastIndexOf('/') + 1);

          axios.delete(`https://62fb8073abd610251c0a6411.mockapi.io/v1/todos/${delete_id}`)
          .then(res => {
            console.log(res.status);

            if(res.status == '200'){


              toast.error('Task Deleted Successfully!', {
                position: toast.POSITION.TOP_RIGHT
            });

            this.loadtodos();



            }
          
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
                        <th>Created at</th>

                       
                      </tr>
                    </thead>
                        <tbody>
                            {this.state.tasksList.map(task=>(
                             <tr>
                            <td key={task.id}>{task.id}</td>
                            <td>{task.task}</td>
                            <td >
                            <Link to={`/edittodo/${task.id}`}   onClick={this.editClick} class="btn btn-primary">Edit</Link>

                            <Link to={`/delete/${task.id}`}   onClick={this.deleteTask} class="btn btn-danger">Delete</Link>
                            </td>

                            <td>{task.createdAt}</td>


                            </tr>
                            ))}
                           
                        
                         
                        </tbody>
                    </table>

                    </div>

                </div>

            </div>
            <ToastContainer />


          </div>
        )
      }
    }
    