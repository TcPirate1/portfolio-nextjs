import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">TC&#39;s Portfolio</Link>
      </div>
      <Link
        href="https://docs.google.com/document/d/1Zc8H68AbxdvvOT3dOLtYWYYkKmHn9I2PPiGwvmVeANs/edit?usp=sharing"
        className="cta-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Link>
    </div>
  );
};

export default Navbar;
