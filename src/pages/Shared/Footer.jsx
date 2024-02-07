import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='  py-6 px-2'>


      <footer className="footer gap-10 grid grid-cols-1 lg:grid-cols-3 place-items-start md:place-items-center  justify-between">
        <div>
          <Link to={'/'} className="">User Management</Link>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twetter</a>
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">Email</a>
        </div>
        <div>
          <h4>About Us</h4>
          <small>
            <span className='text-error'>User Management</span>

          </small>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

      </footer>
      <p className='text-center mt-6 text-error'>&copy; 2024 <span className="text-pink-full">Fighting Spirit</span>. All rights reserved.</p>
    </div>

  );
}

export default Footer;
