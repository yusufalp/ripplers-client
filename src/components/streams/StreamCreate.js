import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/';
import StreamFrom from '../streams/StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h2>Create a Stream</h2>
        <StreamFrom onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);