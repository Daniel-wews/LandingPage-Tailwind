import burguerMenu from '../assets/images/icon-menu.svg'
export default function NavBar (){
    return(
        <>
        <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-4 sm:items-center ">
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
        </ul>
        <img className='w-10 h4 cursor-pointer sm:hidden' src={burguerMenu} alt="menu hamburguer" />
        </>
    )
}