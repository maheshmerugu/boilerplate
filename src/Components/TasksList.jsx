    import React, { Component } from 'react'
    import './addTask.css'
    
    export default class TasksList extends Component {

        constructor(){
            super()

            this.state={
                tasksList:[],

            }
        }
      render() {
        return (
          <div className='container'>

            <div className='card'>
                <div className='card-title'>
                    <h3 className='task'>Tasks List</h3>

                    <div className='card-body'>

                    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

                    </div>

                </div>

            </div>

          </div>
        )
      }
    }
    