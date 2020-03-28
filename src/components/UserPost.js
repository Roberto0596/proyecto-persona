import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css';

class UserPost extends Component
{
  render()
  {
    const{title,message} = this.props;
    return (
      <div className="UserPost">
      <h1>{title}</h1>
      <h1>{message}</h1>
      </div>
    )
  }
}

UserPost.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  message: PropTypes.string
}

export default UserPost
