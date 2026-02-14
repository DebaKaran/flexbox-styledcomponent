import Button from './Button'
import { Logo, LogoLink, Nav } from './styled/NavBar.styled'

const NavBar = () => {
  return (
    <Nav>
        <LogoLink href='index.html'>
            <Logo src="images/quill.svg" alt="quill logo" />
        </LogoLink>
        <ul>
            <li>
                <Button $variant={"primary-outline"} href={"login.html"}>
                    Login
                </Button>
            </li>
            <li>
                <Button $variant={"primary"} href={"register.html"}>
                    Register
                </Button>
            </li>
        </ul>
    </Nav>
  )
}

export default NavBar