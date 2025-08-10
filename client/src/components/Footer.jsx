import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        {/* Brand Info */}
        <div className="md:max-w-96">
          <img className="h-9" src={assets.logo} alt="QuickAi Logo" />
          <p className="mt-6 text-sm leading-relaxed">
            Unlock the full potential of AI with{" "}
            <span className="text-gray-800 font-medium">QuickAi</span>.<br />
            From crafting captivating articles to generating stunning visuals,
            our premium tools are designed to transform the way you create and
            work.
          </p>
        </div>

        {/* Links & Newsletter */}
        <div className="flex-1 flex items-start md:justify-end gap-20">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">Stay Updated</h2>
            <div className="text-sm space-y-2">
              <p>
                Get the latest news, insights, and AI tips — delivered straight
                to your inbox every week.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-primary w-24 h-9 p-2 text-white rounded cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        © 2025 Sagar Negi. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
