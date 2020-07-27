import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./requestSent.scss";

class RequestSent extends Component {
  render() {
    return (
      <Card border="light">
        <Card.Title>REQUEST SENT!</Card.Title>
        
        <Card.Text className="requestSent">
        We have received your request, our team will get back to you shortly on your email Anirudha@gmail.com
        </Card.Text>
        <Card.Text>
        <a href = "/requestsent#">Visit out website</a> to know more about our product.
        </Card.Text>
      </Card>
    );
  }
}

export default RequestSent;
