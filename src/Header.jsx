function Header() {
  return (
    <div className="h-12 max-w-[992px] px-8 py-4">
      <div className="flex gap-8">
        <img className="w-12" src="logo.png" alt="" />
        <nav className="flex w-full items-center justify-between">
          <ul className="flex gap-4 ">
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
