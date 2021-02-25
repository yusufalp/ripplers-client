import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions/';

class StreamCreate extends React.Component {
  renderError = (meta) => {
    if (meta.touched && meta.error) {
      return (
        <p>{meta.error}</p>
      )
    }
  }

  renderInput = (formProps) => {
    // console.log(formProps.meta)
    return (
      <div>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title.';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);