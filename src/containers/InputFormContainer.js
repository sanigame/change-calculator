import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Panel, Button, ButtonToolbar } from 'react-bootstrap';
import { RenderField } from '../components';
import { createValidator, required, currency } from '../utils/validation';
import { amountCalculateAction } from '../actions';

class InputFormContainer extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Input amount</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <form onSubmit={handleSubmit}>
              <Field name="amount" label="amount" component={RenderField} />
              <ButtonToolbar>
                <Button bsStyle="primary" type="submit">Submit</Button>
              </ButtonToolbar>
            </form>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

InputFormContainer = reduxForm({
  form: 'amountForm',
  validate: createValidator({
    amount: [required, currency]
  }),
  onSubmit: (values, dispatch) => {
    dispatch(amountCalculateAction(values.amount))
  }
})(InputFormContainer)

export default InputFormContainer;