import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '@/assets/logo.png'
import { useNavigate } from 'react-router-dom'

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
          <a href='#about' className='text-foreground hover:text-primary transition-colors'>
            About
          </a>
          <a href='#services' className='text-foreground hover:text-primary transition-colors'>
            Services
          </a>
          <a href='#testimonials' className='text-foreground hover:text-primary transition-colors'>
            Testimonials
          </a>
          <a href='#contact' className='text-foreground hover:text-primary transition-colors'>
            Contact
          </a>
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
            <a
              href='#about'
              className='text-foreground hover:text-primary transition-colors py-2'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href='#services'
              className='text-foreground hover:text-primary transition-colors py-2'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href='#testimonials'
              className='text-foreground hover:text-primary transition-colors py-2'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href='#contact'
              className='text-foreground hover:text-primary transition-colors py-2'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className='bg-primary text-primary-foreground hover:bg-primary/80 w-full mt-4'>Contact Us</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
