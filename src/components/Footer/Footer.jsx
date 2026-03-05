const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12 md:py-[13]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 mb-12">
            {/* 1. Brand Section */}
            <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
              <p className="font-bold text-[15px] mb-4 tracking-tight">
                CS — Ticket System
              </p>
              <p className="text-[13px] text-gray-400 leading-relaxed max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>

            {/* 2. Company */}
            <div>
              <p className="font-semibold text-sm mb-5 text-gray-100">
                Company
              </p>
              <ul className="space-y-3">
                {["About Us", "Our Mission", "Contact Sales"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Services */}
            <div>
              <p className="font-semibold text-sm mb-5 text-gray-100">
                Services
              </p>
              <ul className="space-y-3">
                {[
                  "Products & Services",
                  "Customer Stories",
                  "Download Apps",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Information */}
            <div>
              <p className="font-semibold text-sm mb-5 text-gray-100">
                Information
              </p>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms & Conditions", "Join Us"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* 5. Social Links */}
            <div className="sm:col-span-2 md:col-span-1">
              <p className="font-semibold text-sm mb-5 text-gray-100">
                Social Links
              </p>
              <ul className="space-y-3">
                {[
                  {
                    icon: "fa-brands fa-x-twitter",
                    label: "@CS_Ticket",
                    hover: "hover:text-white",
                  },
                  {
                    icon: "fa-brands fa-linkedin-in",
                    label: "LinkedIn",
                    hover: "hover:text-blue-400",
                  },
                  {
                    icon: "fa-brands fa-facebook-f",
                    label: "Facebook",
                    hover: "hover:text-blue-600",
                  },
                  {
                    icon: "fa-regular fa-envelope",
                    label: "support@cst.com",
                    hover: "hover:text-red-400",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href="#"
                      className={`flex items-center gap-3 text-[13px] text-gray-400 ${item.hover} transition-colors duration-200`}
                    >
                      <i
                        className={`${item.icon} w-5 text-center text-base`}
                      ></i>
                      <span className="truncate">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center">
            <p className="text-[12px] text-gray-500">
              © 2026{" "}
              <span className="text-gray-400 font-medium">
                CS — Ticket System
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
