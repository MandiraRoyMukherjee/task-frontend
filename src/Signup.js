
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from "react-router-dom";
const Signup=()=>{
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        try {
            let res = await fetch("http://localhost:5000/user/register", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              },
              body: JSON.stringify({
               name:name,
               email:email,
               password:password,
               confirmPassword:confirmPassword
              }),
      
            });
            let resJson = await res.json();
            console.log(resJson);
            if (res.status === 201) {
              document.getElementById('name').value = '';
              document.getElementById('email').value = '';
              document.getElementById('password').value = '';
              document.getElementById('confirmPassword').value = '';
      
              console.log("data successfully added");
              navigate('/login');

      
             } 
             else {
              console.log("data not added");
              alert("All fields are required.")
              return false;
            }
          } catch (err) {
            console.log(err);
            alert("All fields are required.")
            return false;
          }

    }

    return(
        <div>
                <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <p className=" mb-5">Please Register Yourself,
                      Already Register? <Link to="/login">Signin</Link> </p>
                    <div className="mb-3">
                      <Form >
                      <Form.Group className="mb-3" controlId="name">
                          <Form.Label className="text-center">
                          Username
                          </Form.Label>
                          <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="password"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >

                        </Form.Group> */}
                        <Form.Group
                          className="mb-3"
                          controlId="confirmPassword"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >

                        </Form.Group> */}
                        <div className="d-grid">
                          <Button variant="primary" type="button" onClick={handleSubmit} >
                            Sign Up
                          </Button>
                        </div>
                      </Form>

                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
    )


}

export default Signup;