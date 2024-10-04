import { useEffect,useRef } from "react";
import api from '../../api/axiosconfig';
import {useParams} from 'react-router-dom';
import { Container,Row,Col } from "react-bootstrap";

import React from 'react'
import ReviewForm from "../reviewForm/ReviewForm";

const review = () => {

    const revText=useRef();
    let params=useParams();
    const movieId=params.movieId;

    useEffect( () =>{
        getMovieDate(movieId);
    },[]
    )
  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
            <img src={movieId?.poster} alt="" />
            </Col>
            <Col>
              {
                <>
                <Row>
                    <Col>
                    <ReviewForm handleSumbit={addReview} revText={revText} labeltext="Write a Review?"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                    </Col>
                </Row>
                </>
              }
              {
                reviews?.map( (r) =>{
                    return(
                      <>
                      <Row>
                        <Col>{r.body}</Col>
                      </Row>
                      <Row>
                        <Col>
                          <hr />
                        </Col>
                        </Row>
                      </>
                    )
                })
              }
            </Col>
        </Row>
        <Row>
                    <Col>
                    <hr />
                    </Col>
                </Row>
    </Container>
  )
}

export default review