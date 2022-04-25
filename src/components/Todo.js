import React from 'react';


export default function Todo(props) {
    console.log(props.name);
    return(
        <li className="todo stack-small">
          <div className="c-cb">
            <input id={props.id} type="checkbox" defaultChecked={props.completed} />
            <label className="todo-label" htmlFor={props.id}>
             {props.name}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn" onClick={() => alert('oLÁ Edit')}>
              Edit <span className="visually-hidden">{props.name}</span>
            </button>
            <button type="button" className="btn btn__danger" onClick={() => alert('oLÁ Delete')}>
              Delete <span className="visually-hidden">{props.name}</span>
            </button>
          </div>
        </li>
    );
}