import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Form() {
    let currentURL = window.location.href;
    const [searchParams, setSearchParams] = useSearchParams();

    const nameSearchParam = searchParams.get("name");
    const phoneSearchParam = searchParams.get("phone");
    const ageSearchParam = searchParams.get("age");
    const emailSearchParam = searchParams.get("email");

    const [name, setName] = useState(nameSearchParam || "");
    const [phone, setPhone] = useState(phoneSearchParam || "");
    const [age, setAge] = useState(ageSearchParam || "");
    const [email, setEmail] = useState(emailSearchParam || "");
    const [contactURL, setContactURL] = useState(" ");

    const navigate = useNavigate();

    return (
        <main style={{ padding: "1rem 0" }}>
            <div className="Form">
                <h2>Create-User</h2>

                <label>Name:</label>
                <input type="text" value={name} placeHolder="Name" onChange={(e) => {
                    setName(e.target.value);
                    searchParams.set("name", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <br />

                <label>Phone:</label>
                <input type="text" value={phone} placeHolder="Phone Number" onChange={(e) => {
                    setPhone(e.target.value);
                    searchParams.set("phone", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <br />

                <label>Age:</label>
                <input type="text" value={age} placeHolder="Age" onChange={(e) => {
                    setAge(e.target.value);
                    searchParams.set("age", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <br />

                <label>Email:</label>
                <input type="text" value={email} placeHolder="Email" onChange={(e) => {
                    setEmail(e.target.value);
                    searchParams.set("email", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <br />

                <button onClick={async () => {
                    console.log("Submit");
                    navigate(`/contact/submitted`);
                }}>Submit</button>
            </div>
            <div className='generated-url'>
                <div className="contactURL">{contactURL}</div>
                <button onClick={() => {
                    setContactURL(currentURL);
                }}>
                    Generate Contact URL
                </button>
            </div>
        </main>
    );
}
export default Form; 