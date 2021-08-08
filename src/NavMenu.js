import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
      <NavLink className='nav_link' to='/blue'>
        Got to the Blue page
      </NavLink>
      <NavLink className='nav_link' to='/red'>
        Got to the Red page
      </NavLink>
      <NavLink className='nav_link' to='/green'>
        Got to the Green page
      </NavLink>
    </nav>
  );
};

export default NavMenu;
