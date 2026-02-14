import Button from './Button'
import { Nav } from './styled/NavBar.styled'

const NavBar = () => {
  return (
    <Nav>
        <ul>
            <li>
                <Button variant={"primary-outline"} href={"login.html"}>
                    Login
                </Button>
            </li>
            <li>
                <Button variant={"primary"} href={"register.html"}>
                    Register
                </Button>
            </li>
        </ul>
    </Nav>
  )
}

export default NavBar