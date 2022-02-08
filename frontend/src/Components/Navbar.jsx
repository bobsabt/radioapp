import radio from "../Logo/radio.png";

const Navbar = () => {

  return (
    <>
       <nav className=' navbar'>
            <div className='placement title-container'>
                <img src={radio} alt="logo"/>
                <p>My RadioSite</p>
            </div>
       </nav>
    </>
  );
};

export default Navbar;