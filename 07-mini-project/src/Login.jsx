import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from "react"

const Login = () => {
    // You have to pass data to signup() function to successful login.
    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => signup({
        //     username: 'mock',
        //     password: 'mock',
        // })}>Text</button>
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <Layout>
            <div>
                <label name="username" placeholder="Username" >Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" value={username}/>
                <br/>
                <label name="password" placeholder="Password" >Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" value={password} />
                <br/>
                <button onClick={() => login({ username: username, password: password })}>Login</button>
            </div>
        </Layout>
    )
}

export default Login