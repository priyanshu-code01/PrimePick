import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quaerat adipisci. Maiores explicabo, dolores culpa ab, laborum hic omnis amet odit aliquam blanditiis, fuga laboriosam!</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-1600-1600-1600</li>
            <li>priyanshu.code01@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className='text-gray-300' />
        <p className="text-center py-5 text-sm">&copy;2026 forever.com. All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
