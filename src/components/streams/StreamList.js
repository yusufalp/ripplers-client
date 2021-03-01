import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <p>{stream.title}</p>
          <p>{stream.description}</p>
        </div>
      )
    })
  }
  render() {
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams)
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);