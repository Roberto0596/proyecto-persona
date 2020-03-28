import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions';
import { CircleLoader } from 'react-spinners';
import UserItem from '../components/UserItem';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';


class Home extends Component
{
  constructor()
  {
    super();
  }

  componentWillMount()
  {
    this.props.getUsers();
  }

  render()
  {
    let users = [];
    if (this.props.users.data)
    {
      users = this.props.users.data.map((currentValue,index,array)=>{
        return (
          <UserItem
          key={ index }
          name = {currentValue.name}
          last_name = {currentValue.last_name}
          facebook = {currentValue.facebook}
          id={ currentValue.id } />
        )
      })
    }

    if (this.props.users.type === "START_GET_USERS")
    {
      return (<div className="loader"><CircleLoader
      color="#FFF"
      loading={true}/></div>)
    }
    else {
      return (
        <div className="Home">
        { users }
        </div>
      )
    }

  }
}

//esta funcion convierte el valor del stor que yo quiero
//en propiedades para el componente
function mapStateToProps(state)
{
  return {
    users: state.getUsers
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({
    getUsers
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
