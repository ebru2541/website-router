import { NavBarTitle, Nav, NavDiv, NavLinkNew } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <NavDiv>
        <NavBarTitle>CLARUSWAY</NavBarTitle>
      </NavDiv>
      <NavDiv>
        <NavLinkNew
          to="/"
          style={({ isActive }) => ({ color: isActive && "#c1df17" })}
        >
          HOME
        </NavLinkNew>
        <NavLinkNew
          to="/about"
          style={({ isActive }) => ({ color: isActive && "#c1df17" })}
        >
          ABOUT
        </NavLinkNew>
        <NavLinkNew
          to="/services"
          style={({ isActive }) => ({ color: isActive && "#c1df17" })}
        >
          SERVICES
        </NavLinkNew>
        <NavLinkNew
          to="/contact"
          style={({ isActive }) => ({ color: isActive && "#c1df17" })}
        >
          CONTACT
        </NavLinkNew>
      </NavDiv>
    </Nav>
  );
};

export default Navbar;
