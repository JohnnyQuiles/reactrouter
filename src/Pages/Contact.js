import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function Contact() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    // const params = useParams();
    // const searchParams = useSearchParams();
    return (
        <div className='contact-page'>
            <NavBar />
            <h1>Contact Page</h1>
            
            <input type="text" value={name} placeHolder="Name" onChange={(e) => {
                setName(e.target.value);
            }}/>
            <br />

            <button onClick={async () => {
                console.log("Submit");
                navigate(`/contact/form`);
            }}>Submit</button>
            <Outlet />
        </div>
    )
}
export default Contact;