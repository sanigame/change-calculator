import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import {  InputFormContainer, TableListContainer, } from '../containers';

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <InputFormContainer />
          </Col>
          <Col xs={12} md={8}>
            <TableListContainer />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default MainLayout;