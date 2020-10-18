import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { TotalResult } from '../components';

class TableListContainer extends Component {
  render() {
    const { amount } = this.props;
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Data</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.keys(amount).map((key) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{amount[key]}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <TotalResult amount={amount} />
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.amount
})

export default connect(mapStateToProps)(TableListContainer);