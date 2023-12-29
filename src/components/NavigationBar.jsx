import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavigationBar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    // Update activePath when the location changes
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={activePath === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activePath.startsWith('/about') ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activePath.startsWith('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={activePath.startsWith('/blog') ? 'active' : ''}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
