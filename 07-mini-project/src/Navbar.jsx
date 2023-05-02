import './assets/style/index.css'

const Navbar = () => {
    return (
        <div className=''> 
            <ul>
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/Signup'}>Sign Up</a></li>
                <li><a href={'/Login'}>Login</a></li>
            </ul>
        </div>
    )
}

export default Navbar