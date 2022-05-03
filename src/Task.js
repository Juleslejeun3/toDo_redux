import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}
 function Task(todo) {
    
    
    return (
        <div>
        {todo.description}
        
        </div>
    )
}
export default connect(mapStateToProps)(Task)