import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.css';

class UserDetailCover extends Component
{
  constructor()
  {
    super();
    this.state = {
      cover: 'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg'
    }
  }
  render()
  {
    const { firstName, lastName } = this.props;
    return(
      <div className="UserDetailCover">
        <img src = {this.state.cover} className="UserDetailCover-img" alt="avatar"/>
        <div>
            <h2 className="UserDetailCover-name">{ firstName + " " + lastName }</h2>
        </div>
      </div>
    )
  }
}

UserDetailCover.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default UserDetailCover;
