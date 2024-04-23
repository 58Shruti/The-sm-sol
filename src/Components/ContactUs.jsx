import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function ContactUs() {


  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: ''
  });

  const data = localStorage.setItem('key', setFormData.fullName);
  console.log(data +  "   data")
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      
      <div className='h-screen w-full relative'>
     <img className='h-screen w-full object-contain' src='\src\Components\Images\19362653.jpg'/>
      <div className='absolute h-screen w-full top-0 left-0 bg-[#916DCF] opacity-70'></div>


          <div className='absolute top-10 left-0'>
         <h1 className='text-center text-[3.8vw] text-white font-bold w-full mb-2'>CONTACT US</h1>
          <p className='text-center text-[2vw] text-white tracking-tight leading-none mb-3'>To know more about our services please feel free to get in touch with us through our contact us form. We will be happy to resolve all your queries regarding our services.</p>

    
      <div className='absolute  w-full flex justify-center items-center md:ms-32 ' >

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">

      {/* <Form.Group as={Col} md="2"></Form.Group> */}
      <Form.Group as={Col} md="4" controlId="validationCustom01">
     
      <Form.Label>FULL NAME</Form.Label>
          <Form.Control
            required
                      type="text"
                      name="fullName"
                      placeholder="Name Here"
                      value={formData.fullName}
                      onChange={handleChange}
          />
         
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>PHONE</Form.Label>
          <Form.Control
            required
                      type="text"
                      name="phone"
                      placeholder="Number here"
                      value={formData.phone}
                      onChange={handleChange}
          />
        </Form.Group>

         {/* <Form.Group as={Col} md="2"></Form.Group> */}
        <Form.Group as={Col} md="8" controlId="validationCustom01">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
             required
                      type="email"
                      name="email"
                      placeholder="Email here"
                      value={formData.email}
                      onChange={handleChange}
          />
        </Form.Group>
      

        {/* <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>SUBJECT</Form.Label>

        <FloatingLabel
        controlId="floatingTextarea"
        label=""
        className="mb-3"
      >
      <FloatingLabel controlId="floatingTextarea2" label="">
        <Form.Control
         required
          as="textarea"
          style={{ height: '100px' }}
          value={formData.subject}
          onChange={handleChange}
        />
      </FloatingLabel>
      </FloatingLabel>

      </Form.Group> */}
      <Form.Group as={Col} md="2"></Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom04">
                    <Form.Label>SUBJECT</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      name="subject"
                      style={{ height: '100px' }}
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    
                  </Form.Group>


     
      </Row>
     <div className='w-full flex items-center  justify-center ms-10'>
      
      <Button  type="submit">SEND MESSAGE</Button>
     </div>
      
    </Form>
    </div>
    

    </div>
   </div>


    </>
  )
    
}

export default ContactUs;
