import { ActiveLink } from './ActiveLink';
import { menuItems } from './MenuItems';

export const NavBar = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      {
        menuItems.map((props) => (
          <ActiveLink
            key={props.href}
            {...props}
          />
        ))
      }
    </nav>
  );
}