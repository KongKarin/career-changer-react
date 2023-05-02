import { useContext } from "react"
import { Context } from "./UserContext"


const Admin = () => {
    // You have to get all user from fetchData() and display as table html.
    const { fetchData } = useContext(Context)
    // example of fetchData() usage
    // const data = fetchData()
    // data will return array of user object, otherwise empty array
    // example of user Object show below
    // {
    //     id: 0, 
    //     username: 'example',
    //     fullname: 'example',
    //     organization: 'example'
    // }

    const users = fetchData(
        {
        id: '', 
        username: '',
        fullname: '',
        organization: ''
        }
    )

    return (
        <div>
            {/* this is example of mapping array of object to html. */}
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Full name</td>
                        <td>Organization</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {[{username: 'hello'}].map(item => {
                        <div>{item.username}</div>)}
                    } */}

                    {users.map((item) => 
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.fullname}</td>
                            <td>{item.organization}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}
 
export default Admin