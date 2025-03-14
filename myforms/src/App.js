import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"});
  const [validationStates, setIsValid] = useState({emailState:true, passwordState:true});
  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });
 
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})

    if (formValues.password.length <9 || (!formValues.password.match(/[\w]+/) ||!formValues.password.match(/[\d]+/))){
        setIsValid({...validationStates, passwordState: false});
    }else{
      setIsValid({...validationStates, passwordState: true});
    }

    console.log(validationStates.passwordState);

  });
 
  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });
  const clickSubmit = (() => {
    //Call fetch
    console.log("Clicked")

    //Validate email 
    if (!formValues.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      setIsValid({...validationStates, emailState: false});
      console.log("si estoy")
    }else{
      setIsValid({...validationStates, emailState: true});
    }
    console.log("hhheyy",validationStates.emailState)
    //alert(JSON.stringify(formValues))
  })

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
     
      <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isInvalid={!validationStates.emailState}/>
        { !validationStates.emailState && <Form.Text className="text-muted">Your email should follow an established format.</Form.Text>}
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password}  isInvalid={!validationStates.passwordState} />

        { !validationStates.passwordState && <Form.Text className="text-muted">Your password should have numbers and letters and should be at least 9 char long.</Form.Text>}

        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Favorite Class</Form.Label>
        <Form.Select onChange={handleSelectChange}>
          <option value="1">ISIS3710</option>
          <option value="2">Programación con tecnologias web</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={clickSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;