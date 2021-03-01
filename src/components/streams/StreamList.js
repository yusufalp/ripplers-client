import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )
    }
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <p>{stream.title}</p>
          <p>{stream.description}</p>
          <div>{this.renderAdmin(stream)}</div>
        </div>
      )
    })
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/new">
            Create New Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <div>{this.renderList()}</div>
        <div>{this.renderCreate()}</div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);