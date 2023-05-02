import Layout from "./Layout"
import { Context } from "./UserContext"
import { useContext } from "react"
import { useState } from "react"

const Signup = () => {
    // You have to pass data to signup() function to successful registration.
    const { signup } = useContext(Context)
    // example of signup with button onClick event listerner.
    // <button onClick= { () => Signup({
    //     username: '',
    //     password: '',
    //     fullname: '',
    //     organization: 'mok'
    // }) } > Text </button>

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullname] = useState();
    const [organixation, setOrganixation] = useState();


    return (
        <Layout>
            <div>
                <label name="username" placeholder="Username" >Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" value={username} />
                <br />
                <label name="password" placeholder="Password" >Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} />
                <br />
                <label name="fullname" placeholder="Fullname"  >Fullname</label>
                <input onChange={(e) => setFullname(e.target.value)} type="text" name="fullname" value={fullname} />
                <br />
                <label name="organixation" placeholder="Organixation" >Organixation</label>
                <input onChange={(e) => setOrganixation(e.target.value)} type="text" name="organixation" value={organixation} />
                <br />
                <button onClick={() => signup({ 
                    username1: username, 
                    password1: password,
                    fullname: fullname,
                    organixation: organixation
                })}>Signup</button>
            </div>
        </Layout>
    )
}

export default Signup