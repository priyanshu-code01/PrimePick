import React from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-112.5"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className='text-gray-500'>
            16/113, Mahatma Gandhi (MG) Marg, Civil Lines, Bada Chauraha, <br />
            Kanpur, Uttar Pradesh, 208001, India.
          </p>
          <p className='text-gray-500'>
            Tel: (415) 555-0123 <br />Email: admin@primepick.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at PrimePick</p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
}

export default Contact
