import React from "react";
import {
  Card,
  Row,
  Col,
  Dropdown,
  ButtonGroup,
  DropdownButton,
} from "react-bootstrap";
import { LeftContent } from "../LeftContent/LeftContent";
import { RightContent } from "../RightContent/RightContent";
import "./Search.css";

export const Search = () => {
  return (
    <div>
      <Card className="dictionary">
        <Row>
          <Col lg={8}>
            {" "}
            <LeftContent />
          </Col>
          <Col lg={2}>
            <RightContent />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
