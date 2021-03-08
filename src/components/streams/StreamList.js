import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import './StreamList.css';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`}>Edit</Link>
          <Link to={`/streams/delete/${stream.id}`}>Delete</Link>
        </div>
      )
    }
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <Link to={`/streams/show/${stream.id}`}>{stream.title}</Link>
          <p>Description: {stream.description}</p>
          <div>{this.renderAdmin(stream)}</div>
        </div>
      )
    })
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="create-button">
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