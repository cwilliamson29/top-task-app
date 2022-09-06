import React from "react";

function Overview(props) {

      const { tasks } = props;
      let count = 1;

      console.log(tasks)
      return (
            <ul>
                  {tasks.map((task)=>{

                        task.id = count
                        task.num = count++;
                        
                        return (
                              <div id={task.id}>
                                    <li key={task.id}><button onClick={() => props.onDelete(task.id)}>X</button>{"   "} {task.num} - { task.text }</li>
                              </div>
                        );
                  })}
            </ul>
      );
}

export default Overview;