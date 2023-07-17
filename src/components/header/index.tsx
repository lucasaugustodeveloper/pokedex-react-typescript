import Logo from '../../assets/icons/pokedex.svg'

const Header = () => (
  <header className="container mx-auto flex justify-center w-full max-w-screen-2xl mt-14">
    <img src={Logo} alt="Logo Pokedex" className='mr-2 w-32 h-32' />
    <h1 className='text-9xl text-white'>Pokedex</h1>
  </header>
)

export default Header
