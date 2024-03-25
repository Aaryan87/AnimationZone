import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' >
            <p className='blue-gradient_text'>AZ</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>

            <NavLink to='/storybook' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                StoryBooks
            </NavLink>

            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>

            <NavLink to='/login' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Login
            </NavLink>

        </nav>
    </div>
  )
}

export default Navbar