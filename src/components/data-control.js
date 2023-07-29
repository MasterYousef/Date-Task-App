import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const DataControll = ({onDelate,onAdd}) => {
  return (
    <Row className=" pt-2 justify-content-center">
    <Col sm={8} className="d-flex justify-content-between ">
    <button className="btn btn-primary" onClick={onDelate}>مسح الكل</button>
    <button className="btn btn-primary" onClick={onAdd}>عرض البيانات</button>
    </Col>
    </Row>
  )
}
export default DataControll