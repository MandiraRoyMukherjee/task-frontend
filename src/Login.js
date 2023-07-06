import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();

   

    const handleSubmit=async(e)=>{
        // e.preventDefault()

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        try {
            let res = await fetch("http://localhost:5000/user/login", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              },
              body: JSON.stringify({
               email:email,
               password:password,

              }),
      
            });
            let resJson = await res.json();
            console.log(resJson);
            if (res.status === 200) {
              document.getElementById('email').value = '';
              document.getElementById('password').value = '';

      
              console.log("enter");
              alert("login successfully")
              navigate('/dashboard');

      
             } 
             else {
              console.log(" not enter");
              alert("An account with this email does not exist.")
              return false;
            }
          } catch (err) {
            alert("An account with this email does not exist.")
            console.log(err);
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
                    <p className=" mb-5">Please enter your login and password!</p>
                    <div className="mb-3">
                      <Form  >
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
                        <div className="d-grid">
                          <Button variant="primary" type="button" onClick={handleSubmit}>
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account?{" "}
                        <Link to="/">
                            Sign Up
                            </Link>
                          
                        </p>
                      </div>
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

export default Login;