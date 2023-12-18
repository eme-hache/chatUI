import {
  RiArrowDropDownLine,
  RiCloseFill
} from 'react-icons/ri'

import { BsPlusLg } from 'react-icons/bs'

export default function About ({ toggleDetails }) {
  return (
    <div className='h-full relative p-8 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-500 overflow-y-scroll scrollbar-thumb-rounded-full'>
      <button
        onClick={toggleDetails}
        className='absolute t-4 l-4'
      >
        <RiCloseFill className='text-3xl text-gray-500' />
      </button>

      {/* Preview */}
      <div className='flex flex-col items-center mb-6'>
        <img
          className='rounded-full h-24 w-24 object-cover mb-8'
          src='https://img.freepik.com/free-photo/glad-sporty-woman-touching-her-brown-hair-while-posing-sandy-beach-enchanting-caucasian-girl-yellow-swimwear-fooling-around-tropical-island_197531-9002.jpg'
        />

        <h1 className='text-black dark:text-gray-300 font-semibold text-xl mb-2'>
          Ania James
        </h1>

        <p className='text-gray-500 font-normal text-sm'>
          @aniajames09
        </p>
      </div>

      {/* Attachment */}
      <div className='mb-6'>
        <div className='flex items-center justify-between text-gray-600 dark:text-gray-500 mb-4'>
          <h2 className=' text-normal font-semibold'>
            Attachments
          </h2>

          <RiArrowDropDownLine className='text-4xl' />
        </div>

        {/* File */}
        <div className='flex flex-1 gap-4 items-center mb-4'>
          <div>
            <img
              className='h-10 w-10 rounded-full bg-[#292933] object-cover'
              src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
            />
          </div>

          <div className='overflow-hidden flex flex-col flex-1'>
            <h5 className='text-gray-600 dark:text-gray-300 font-semibold truncate'>
              Very important file.figma
            </h5>
            <p className='text-gray-500 text-xs'>
              7.5 MB 3.22.22, 11:15 AM
            </p>
          </div>
        </div>

        {/* File */}
        <div className='flex gap-4 items-center mb-4'>
          <div>
            <img
              className='h-10 w-10 rounded-full bg-[#292933] object-cover'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png'
            />
          </div>

          <div className='overflow-hidden flex flex-col flex-1'>
            <h5 className='text-gray-600 dark:text-gray-300 font-semibold truncate'>
              List of something.xdasdasdasdasdasd
            </h5>
            <p className='text-gray-500 text-xs'>
              7.5 MB 3.22.22, 11:15 AM
            </p>
          </div>
        </div>

        {/* File */}
        <div className='flex gap-4 items-center'>
          <div className=''>
            <img
              className='h-10 w-10 rounded-full bg-[#292933] object-cover'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SVG_logo.svg/2048px-SVG_logo.svg.png'
            />
          </div>

          <div className='overflow-hidden flex flex-col flex-1'>
            <h5 className='text-gray-600 dark:text-gray-300 font-semibold truncate'>
              Very important file
            </h5>
            <p className='text-gray-500 text-xs'>
              7.5 MB 3.22.22, 11:15 AM
            </p>
          </div>
        </div>
      </div>

      {/* View all */}
      <h3 className='font-semibold text-xs text-[#5051FB] mb-6'>
        View all
      </h3>

      {/* Members */}
      <div className=''>
        <div className='flex items-center justify-between text-gray-600 dark:text-gray-500 mb-4'>
          <h2 className=' text-normal font-semibold'>
            Members
          </h2>

          <RiArrowDropDownLine className='text-4xl' />
        </div>

        {/* Add member */}
        <div className='flex gap-3 items-center mb-6'>
          <div className='w-12 h-12 bg-gray-200 dark:bg-[#292933] flex items-center justify-center rounded-full'>
            <BsPlusLg className='text-[#5051FB]' />
          </div>
          <h4 className='text-[#5051FB] font-semibold text-sm'>
            Add Member
          </h4>
        </div>

        {/* Member */}
        <div className='flex items-center gap-3 mb-6'>
          <img
            className='w-10 h-10 rounded-full object-cover'
            src='https://img.freepik.com/free-photo/college-life-modern-lifestyle-education-concept-cheerful-good-looking-redhead-female-student-with-foxy-long-hair-wearing-headphones-neck-backpack-smiling-camera_1258-73003.jpg'
          />
          <h5 className='text-gray-600 dark:text-gray-300 font-semibold'>
            Sarah Jhonson
          </h5>
        </div>

        {/* Member */}
        <div className='flex items-center gap-3 mb-6'>
          <img
            className='w-10 h-10 rounded-full object-cover'
            src='https://img.freepik.com/free-photo/senior-couple-hugging-home_1098-1297.jpg'
          />
          <h5 className='text-gray-600 dark:text-gray-300 font-semibold'>
            Ahmed Medi
          </h5>
        </div>

        {/* Member */}
        <div className='flex items-center gap-3 mb-6'>
          <img
            className='w-10 h-10 rounded-full object-cover'
            src='https://img.freepik.com/free-photo/senior-couple-hugging-home_1098-1297.jpg'
          />
          <h5 className='text-gray-600 dark:text-gray-300 font-semibold'>
            Ahmed Medi
          </h5>
        </div>

        {/* Member */}
        <div className='flex items-center gap-3 mb-6'>
          <img
            className='w-10 h-10 rounded-full object-cover'
            src='https://img.freepik.com/free-photo/senior-couple-hugging-home_1098-1297.jpg'
          />
          <h5 className='text-gray-600 dark:text-gray-300 font-semibold'>
            Ahmed Medi
          </h5>
        </div>

        {/* Member */}
        <div className='flex items-center gap-3 mb-6'>
          <img
            className='w-10 h-10 rounded-full object-cover'
            src='https://img.freepik.com/free-photo/senior-couple-hugging-home_1098-1297.jpg'
          />
          <h5 className='text-gray-600 dark:text-gray-300 font-semibold'>
            Ahmed Medi
          </h5>
        </div>
      </div>
    </div>
  )
}