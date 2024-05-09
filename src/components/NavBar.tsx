import { Button } from './ui/button';

const NavBar = () => {

  const handleLogin = () => {
    console.log('Logout')
  }

  return (
    <div className='flex justify-between items-center overflow-x-hidden'>
      <img src='/hyggex-logo.svg' alt='hyggex logo' className='cursor-pointer' onClick={() => window.location.href = '/'}/>
      <nav className="hidden gap-6 lg:flex items-center">
        <h1
          className={
            "group font-medium tracking-wide text-[#a1a1aa] hover:text-foreground cursor-pointer transition-all duration-150 ease-in-out md:block"
          }
        >
          <span className="bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Home</span>
        </h1>
        <h1
          className={
            "group font-semibold tracking-wide text-foreground hover:text-foreground cursor-pointer transition-all duration-150 ease-in-out md:block"
          }
        >
          <span className="bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Flashcard</span>
        </h1>
        <h1
          className={
            "group font-medium tracking-wide text-[#a1a1aa] hover:text-foreground cursor-pointer transition-all duration-150 ease-in-out md:block"
          }
        >
          <span className="bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Contact</span>
        </h1>
        <h1
          className={
            "group font-medium tracking-wide text-[#a1a1aa] hover:text-foreground cursor-pointer transition-all duration-150 ease-in-out md:block"
          }
        >
          <span className="bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">FAQ</span>
        </h1>
        <Button className='rounded-full px-8 bg-gradient-to-t from-[#164EC0] to-[#06286E]' onClick={handleLogin}>Login</Button>
      </nav>
    </div>
  )
}

export default NavBar;