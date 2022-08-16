import React, { Component } from 'react';
import './addTask.css'
class AddTask extends Component {
    render() {
        return (

            <div className='container'>

                <div className='card'>
                             <div className='card-title'>
                                 <h3 className='task'>Add New Task</h3>
                             </div>

                             <div className='card-body'>

                                <form>
                                      <input class="form-control form-control-lg" type="text" placeholder="Task" />

                                      <button className=' form-control btn btn-primary'>Add Task</button>

                                </form>

                             </div>
                
                </div>

            </div>
           
        );
    }
}

export default AddTask;