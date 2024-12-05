import React from 'react';

function Footer() {
  return (
    <footer className="py-14 bg-white text-gray-500 border-gray-400 border rounded-xl p-2 m-5">
      <div className="flex justify-evenly items-center mx-auto">
        <div className="pagedone-1 p-5 col-span-4 flex flex-col justify-between text-wrap">
        <p className="font-semibold text-black mb-4">Pagedone</p>
        <ul className="space-y-2">
            <li className='text-wrap'>Trusted in more than 100 countries & 5 million customers. Have any query?</li>
            <li>
            <button 
                type="button" 
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            >
                Contact us
            </button>
            </li>
        </ul>
        </div>
        <div className='pagedone'>
            <p className='font-semibold text-black'>Pagedone</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className='products'>
            <p className='font-semibold text-black'>Products</p>
            <ul>
                <li>Figma UI System</li>
                <li>Icons Assets</li>
                <li>Responsive Blocks</li>
            </ul>
        </div>
        <div className='support'>
            <p className='font-semibold text-black'>Support</p>
            <ul>
                <li>Customer Support</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='subscribe'>
            <p className='font-semibold text-black'>Subscribe</p>
            <ul>
                <li>Subscribe to get the latest news from us</li>
                <li><button type="button" class="text-purple-700 border border-purple-700 bg-white hover:bg-white focus:ring-4 focus:ring-purple-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-purple-800">Subscribe --</button></li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        fdfdf
      </div>
    </footer>
  );
}

export default Footer;
