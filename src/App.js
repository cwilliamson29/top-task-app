import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview'

export class App extends Component {
      constructor() {
            super();

            this.state = {
                  count: 0,
                  task: { text: '', num: 0 },
                  tasks: []

            }
            this.setCount = this.setCount.bind(this);
      }

      setCount = () => {
            this.setState()
      }

      handleChange = (e) => {
            this.setState({ task: { text: e.target.value } })
      }

      onSubmitTask = (e) => {
            e.preventDefault();
            this.setState({
                  tasks: this.state.tasks.concat(this.state.task),
                  task: { text: '', num: 1, id: uniqid() },

            });
      }

      handleDelete = itemId => {
            const tasks = this.state.tasks.filter(item => item.id !== itemId);
            this.setState({ tasks: tasks })
      }

      render() {

            const { task, tasks, count } = this.state;
            var taskVal = this.state.tasks.length;


            console.log()
            return (
                  <div>
                        <form onSubmit={this.onSubmitTask}>
                              <label htmlFor="taskInput">Enter Task</label>
                              <input onChange={this.handleChange} value={task.text} type="text" id="taskInput" />
                              <button type="submit"> Add Task </button>
                        </form>
                        <Overview tasks={tasks} onDelete={this.handleDelete} />
                  </div>
            );
      }
}

export default App;