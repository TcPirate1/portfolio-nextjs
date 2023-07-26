import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">TC&#39;s Portfolio</Link>
      </div>
      <a
        href="https://docs.google.com/document/d/1Zc8H68AbxdvvOT3dOLtYWYYkKmHn9I2PPiGwvmVeANs/edit?usp=sharing"
        className="cta-btn"
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;
