import React, { Component } from "react";

// import logo from "../logo.svg";
// import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { BrowserRouter as Routesr, Route } from "react-router-dom";
// import Results from "../Answered/Results";

class AnsweredQTile extends Component {
  render() {
    return (
      <Card
        size='sm'
        bg={"dark"}
        text={"white"}
        border='dark'
        style={{ width: "25rem" }}
        className='mb-2 second-tab'>
        <Card.Header>{this.props.author} asks: </Card.Header>

        <Container>
          <Row>
            <Col xs={3}>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt='17x18'
                  src={this.props.avatar}
                />
              </Figure>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title> Would you rather... </Card.Title>
                <Card.Text>{this.props.optionOne.text}</Card.Text>

                <Button variant='secondary' size='md' onClick={() => {}}>
                  <Link
                    className='link'
                    to={`/questions/question:${this.props.id}`}>
                    View This Poll
                  </Link>
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, Questions, Users }, { id }) {
  const question = Questions[id];
  const avatar = Users[question.author].avatarURL;
  return {
    authedUser,
    optionOne: question.optionOne,

    author: Users[question.author].name,
    avatar,
    id,
  };
}

export default connect(mapStateToProps)(AnsweredQTile);
