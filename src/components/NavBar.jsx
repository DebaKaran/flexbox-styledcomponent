import AppLogo from './AppLogo'
import Button from './Button'
import { ActionItem, ActionList } from './styled/ActionList.styled'
import { Nav } from './styled/NavBar.styled'

const NavBar = () => {
  return (
    <Nav>
        
        <AppLogo href='index.html' src="images/quill.svg" alt="quill logo" />
        <ActionList>
            <ActionItem>
              <Button variant="primary-outline" href="login.html">
                    Login
              </Button>
            </ActionItem>
            <ActionItem>
              <Button variant="primary" href="register.html">
                    Register
              </Button>
            </ActionItem>
        </ActionList>
    </Nav>
  )
}

export default NavBar