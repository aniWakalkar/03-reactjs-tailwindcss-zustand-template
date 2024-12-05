import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Counter", href: "/counter" },
  { name: "About", href: "/aboutUs" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sticky top-0 bg-white border-b font-serif shadow-sm">
      {({ open }) => (
        <>
          <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo Section */}
              <div className="flex items-center">
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
                <h3 className="text-lg font-medium ml-2">TestApp</h3>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 hover:bg-gray-200 hover:text-black rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-600 hover:bg-gray-200 hover:text-black rounded-md focus:outline-none">
                  <span className="sr-only">Toggle menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-600 hover:bg-gray-200 hover:text-black rounded-md px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>

          <Outlet />
        </>
      )}
    </Disclosure>
  );
}