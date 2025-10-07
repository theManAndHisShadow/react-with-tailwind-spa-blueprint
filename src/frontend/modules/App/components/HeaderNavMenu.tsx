import React, { ReactNode } from 'react';

interface HeaderNavMenuProps {
  children: ReactNode;
}

const HeaderNavMenu: React.FC<HeaderNavMenuProps> = ({ children }) => {
  const items = React.Children.toArray(children);

  return (
    <nav className='absolute top-0'>
      <ul className="flex flex-row gap-4 justify-center items-center m-8">
        {items.map((child, index) => (
          <li key={index}>
            {child}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavMenu;
