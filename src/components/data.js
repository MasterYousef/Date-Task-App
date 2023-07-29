import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Data = ({person}) => {
  return (
    <Row className="pt-3 justify-content-center d-flex">
    <Col sm={8}>
     <h3>لديك {person.length} مواعيد </h3>
     </Col>
   </Row>
  )
}
export default Data
