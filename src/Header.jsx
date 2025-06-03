function Header() {
  return (
    <div className="h-12 max-w-[992px] px-8 py-4">
      <div className="flex">
        <img src="logo.png" alt="" />
        <nav className="flex">
          <ul className="flex">
            <li>Market</li>
            <li>Features</li>
            <li>White Papers</li>
            <li>About Us</li>
          </ul>

          <div>EN</div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
