import {
  Home,
  Contact,
  CandlestickChart,
  BookMarked,
  UserRoundSearch,
} from 'lucide-react'
import './style.scss'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingUp = prevScrollPos > currentScrollPos

      setIsNavVisible(
        currentScrollPos < 110 || (isScrollingUp && currentScrollPos > 110),
      )
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const navLinks = [
    { to: '/', label: 'Accueil', icon: <Home size={32} strokeWidth={0.75} /> },
    {
      to: '/competence/',
      label: 'Compétence',
      icon: <CandlestickChart size={32} strokeWidth={0.75} />,
    },
    {
      to: '/portfolio/',
      label: 'Portfolio',
      icon: <BookMarked size={32} strokeWidth={0.75} />,
    },
    {
      to: '/Apropos/',
      label: 'A propos',
      icon: <UserRoundSearch size={32} strokeWidth={0.75} />,
    },
    {
      to: '/contact/',
      label: 'Contact',
      icon: <Contact size={32} strokeWidth={0.75} />,
    },
  ]
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <nav className={isNavVisible ? 'visible' : 'hidden'}>
      <ul className={'nav'}>
        {navLinks.map(({ to, label, icon }, index) => (
          <li key={index} className={'nav__btn'}>
            <Link
              to={to}
              className={`nav__btn--link ${currentPath === to ? 'nav__btn--link--active' : ''}`}
            >
              <div className={'nav__btn--icon'}>{icon}</div>
              <p>{label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
