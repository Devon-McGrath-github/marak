import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class ContactForm extends Component {
  console.log(state)
  render() {
    const {fields: {title, email, date, time, location, requirements, tasks, description}, handleSubmit} = this.props;
    {/* handleSubmit is a placeholder once backend is setup it can be implemented*/}
    {/* For assistance styling the form see: http://redux-form.com/5.3.1/#/examples/simple?_k=z8o7tk */}
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" placeholder="Project Title" {...title}/>
        </div>
        <div>
          <label>Email: </label> {/* do we even want an email form? */}
          <input type="email" placeholder="Email" {...email}/>
        </div>
        <div>
          <label>Date: </label>
          <input type="text" placeholder="date" {...date}/> {/* Will hopefully insert moment.js values here */}
        </div>
        <div>
          <label>Time: </label>
          <input type="text" placeholder="Time" {...time}/> {/* Will hopefully insert moment.js values here */}
        </div>
        <div>
          <label>Location: </label>
          <input type="text" placeholder="Location" {...location}/>
        </div>
        <div>
          <label>Requirements: </label>
          <input type="text" placeholder="Requirements" {...requirements}/>
        </div>
        <div>
          <label>Tasks: </label>
          <div>
              <select {...tasks} value={tasks.value || ''}>
                <option value='Hard Labour'>Hard Labour</option>
                <option value='light Labour'>Light Labour</option>
              </select>
          </div>
        </div>
        <div>
        <div>
          <label>Description</label>
          <div>
            <textarea
              {...description}
              value={description.value || ''}/>
              {/* // required for reset form to work (only on textarea's)
              // see: https://github.com/facebook/react/issues/2533 */}
          </div>
        </div>
      </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ContactForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'contact',                           // a unique name for this form
  fields: ['title', 'date', 'email', 'time', 'location', 'requirements', 'tasks', 'description'] // all the fields in your form
})(ContactForm);

export default ContactForm;
