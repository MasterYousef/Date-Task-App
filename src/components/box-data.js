import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const BoxData = ({person}) => {
  return (
    <Row className=" pt-1 justify-content-center">
    <Col sm={8}>
    <div className="box p-3">
    {person.length ? ( person.map((e)=>{
      return  <div key={e.id} className="d-flex border-bottom my-2 mx-2">
      <img src={e.img} class="img-fluid img-avatar mb-2" alt=""/>
        <div className="px-2">
          <p className="d-inline fs-5">{e.name}</p>
          <p className="fs-6">{e.data}</p>
        </div>
    </div>
    })): <h3 className='text-center'>لا يوجد مواعيد اليوم </h3>}
      
    </div>
    </Col>
  </Row>
  )
}
export default BoxData