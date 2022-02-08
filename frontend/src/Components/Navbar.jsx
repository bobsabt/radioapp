import radio from "../Logo/radio.png";

const Navbar = () => {

  return (
    <div>
       <nav className=' placement navbar'>
            <div className='placement title-container'>
                <img src={radio} alt="logo"/>
                <p>My RadioSite</p>
            </div>
       </nav>
    </div>
  );
};

export default Navbar;