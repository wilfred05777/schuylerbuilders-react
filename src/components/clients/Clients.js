import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Clients extends Component {
    render() {
        const clients = [
          {
            id: '32342343242',
            firstName: 'WADA',
            lastName: 'Johnson',
            email: 'wada@gmail.com',
            phone: '23432423',
            balance: '300',
          },
          {
            id: '2222',
            firstName: 'Rowena',
            lastName: 'Bancairen',
            email: 'wada@gmail.com',
            phone: '23432423',
            balance: '500',
          },
        ]

        if(clients){
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                          {/* Create space in jsx */}
                          {' '} 
                            <i className="fas fa-users"></i> Clients{' '}
                        </h2>
                    </div>
                </div>
                <table className="table table-striped">
                  <thead className="thead-inverse">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Balance</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map(client=>(
                      <tr key={client.id}>
                        <td>{client.firstName} {client.lastName}</td>
                        <td>{client.email}</td>
                        <td>${parseFloat(client.balance).toFixed(2)}</td>
                        <td>
                        <Link to={`client/${client.id}`} className="btn btn-secondary btn-sm">
                          <i className="fas fa-arrow-circle-right"></i> Detail
                        </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          );
        } else{
            return <h1>Loading..</h1>
        }

        
    }
}
// export default Clients;
export default compose(
  firestoreConnect([{collection: 'clients'}]),
  connect((state, props)=>({
    clients: state.firestore.ordered.clients
  }))
)(Clients);