import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '@/assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '@/routes/path'

const Header = () => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className='bg-card border-b border-border sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center justify-center'>
          <img onClick={() => navigate('/')} src={logo} alt='SGNExpress Logo' className='w-auto h-10 cursor-pointer' />
        </div>

        <nav className='hidden md:flex items-center space-x-8'>
          <Link to={PATH.LANDING_PAGE} className='text-foreground hover:text-primary transition-colors'>
            Home
          </Link>
          <Link to={PATH.LANDING_PAGE} className='text-foreground hover:text-primary transition-colors'>
            Services
          </Link>
          <Link to={PATH.BLOG_PAGE} className='text-foreground hover:text-primary transition-colors'>
            Blogs
          </Link>
          <Link to={PATH.CONTACT_PAGE} className='text-foreground hover:text-primary transition-colors'>
            Contact
          </Link>
        </nav>

        <Button className='hidden md:flex bg-primary text-primary-foreground hover:bg-primary/80'>Contact Us</Button>

        <button
          onClick={toggleMobileMenu}
          className='md:hidden p-2 text-foreground hover:text-primary transition-colors'
          aria-label='Toggle mobile menu'
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden bg-card border-t border-border'>
          <nav className='container mx-auto px-4 py-4 flex flex-col space-y-4'>
            <Link
              to={PATH.LANDING_PAGE}
              className='text-foreground hover:text-primary transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to={PATH.LANDING_PAGE}
              className='text-foreground hover:text-primary transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to={PATH.BLOG_PAGE}
              className='text-foreground hover:text-primary transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to={PATH.CONTACT_PAGE}
              className='text-foreground hover:text-primary transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className='bg-primary text-primary-foreground hover:bg-primary/80 w-full mt-4'>Contact Us</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
