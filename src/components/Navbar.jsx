const Navbar = () => {
  return (
    <>
      <div className="header">
        <h1>Beer</h1>
        <p>Because you can't drink bacon</p>
        <input type="text" />
        <button>Search</button>
      </div>
      <div id="navbar">
        <a href="#">Home</a>
        <a href="#">News</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
};

export default Navbar;
