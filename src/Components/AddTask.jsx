import React, { Component } from 'react';
import './addTask.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AddTask extends Component {

    constructor(){
        super()

        this.state={
            'task':''
        }
    }

    submit=(e)=>{
        e.preventDefault();

        axios({
            method: 'post',
            url: 'https://62fb8073abd610251c0a6411.mockapi.io/v1/todos',
            data: {
           task:this.state.task,
            }
          }).then(res => {
           console.log(res.status);

           if(res.status == '201'){

            toast.success('Task Added Successfully!', {
                position: toast.POSITION.TOP_RIGHT
            });

           }
          
          }).catch(function (error) {
            console.log(error);
          })

    }

    handlechange=(e)=>{

        this.setState({task:e.target.value})
    }
    render() {
        return (

            <div className='container'>

                <div className='card'>
                             <div className='card-title'>
                                 <h3 className='task'>Add New Task</h3>
                             </div>

                             <div className='card-body'>

                                <form onSubmit={this.submit}>
                                      <input className="form-control form-control-lg" type="text" onChange={this.handlechange} placeholder="Task" />

                                      <button   className='form-control btn btn-primary submitbtn'>Add Task</button>

                                </form>

                             </div>
                
                </div>

                <ToastContainer />


            </div>
           
        );
    }
}

export default AddTask;