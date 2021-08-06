import React from "react";
import { Card, Row, Col, From, Form } from "react-bootstrap";

export const LeftContent = () => {
  return (
    <div>
      <Card className="leftContent">
        <Form.Control
          type="Serach"
          placeholder="search for word"
        ></Form.Control>
      </Card>
    </div>
  );
};
