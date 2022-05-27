import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';


function UbahUser(props){
    return (
        <div className='position-absolute bg-light p-5 rounded' style={{zIndex : '2', width : '70%'}}>
            <h1 className='text-center pb-3'>Mengubah User</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                        
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="User"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Admin"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                
                            </div>
                        ))}
                    </Form.Group>
                <Button variant="primary" type="submit">
                    Ubah
                </Button>
                <Button variant="secondary" type="" style={{marginLeft : '20px'}}>
                    Keluar
                </Button>
            </Form>
        </div>
    )
}

export default UbahUser;