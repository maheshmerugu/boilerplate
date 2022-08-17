import React, { Component } from 'react'
import './addTask.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class EditTask extends Component {
    constructor(props){
        super(props)

      this.state={
        data:[],
        task:''
      }


       
    }


    componentDidMount() {

        const pathname = window.location.pathname;
        const edit_id = pathname.substring(pathname.lastIndexOf('/') + 1);

        axios.get(`https://62fb8073abd610251c0a6411.mockapi.io/v1/todos/${edit_id}`)
          .then(res => {
            console.log(res.data);

            this.setState({data:res.data})
           
          })
      }


      handlechange=(e)=>{
            this.setState({task:e.target.value});
      }


      submit=(e)=>{
        e.preventDefault();

        const pathname = window.location.pathname;
        const edit_id = pathname.substring(pathname.lastIndexOf('/') + 1);

        axios({
            method: 'put',
            url: `https://62fb8073abd610251c0a6411.mockapi.io/v1/todos/${edit_id}`,
            data: {
           task:this.state.task,
            }
          }).then(res => {
           console.log(res.status);

           if(res.status == '200'){

            toast.info('Task updated Successfully!', {
                position: toast.POSITION.TOP_RIGHT
            });

           }
          
          }).catch(function (error) {
            console.log(error);
          })

    }


  render() {
    return (
        <div className='container'>

        <div className='card'>
                     <div className='card-title'>
                         <h3 className='task'>Edit Task</h3>
                     </div>

                     <div className='card-body'>

                        <form onSubmit={this.submit}>
                              <input className="form-control form-control-lg" defaultValue={this.state.data.task} name="task" type="text" onChange={this.handlechange} placeholder="Task" />
                              <button   className='form-control btn btn-primary submitbtn'>Update Task</button>

                        </form>

                     </div>
        
        </div>

        <ToastContainer />


    </div>    )
  }
}
