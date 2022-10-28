import { RiAddLine, RiEmotionHappyLine, RiImage2Line, RiMore2Fill, RiSendPlaneLine } from 'react-icons/ri'
import { BiMap, BiMicrophone } from 'react-icons/bi'

export default function Chat () {
  return (
    <div className=''>
      <div className='absolute left-0 top-0 w-full flex items-center gap-8 p-8 border-b border-gray-800'>
        <div className=''>
          <img
            className='object-cover h-20 w-20 rounded-full'
            src='https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129544.jpg'
          />
        </div>

        <div className='flex-1 flex items-center justify-between'>
          <div>
            <h1 className='text-3xl text-gray-300'>Desing Team</h1>
            <p className='text-gray-500'>60 members</p>
          </div>

          <div>
            <div className='flex items-center gap-3'>
              <label className='text-gray-500'>Add</label>

              <button className='bg-[#050505] p-2.5 rounded-full text-gray-300'>
                <RiAddLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-32 '>
        {/* Message block */}
        <div className='flex gap-4'>
          <img
            className='w-10 h-10 object-cover rounded-full'
            src='https://img.freepik.com/free-photo/college-life-modern-lifestyle-education-concept-cheerful-good-looking-redhead-female-student-with-foxy-long-hair-wearing-headphones-neck-backpack-smiling-camera_1258-73003.jpg'
          />
          <div>
            <h4 className='text-gray-300 font-semibold mb-2'>
              Sarah Jhonson
              <span className='text-gray-500 font-normal text-sm ml-2'>10:12am</span>
            </h4>

            <div className='flex items-center gap-2 mb-2'>
              <p className='bg-[#1E1F24] p-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500'>
                Hi, are you still web designer?
              </p>

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>

            <div className='flex items-center gap-2'>
              <p className='bg-[#1E1F24] p-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500'>
                Would love to see some design 😊
              </p>

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='my-8 flex items-center'>
          <hr className='border-gray-700 flex-1' />
          <p className='text-gray-500 text-xs text-center mx-4'>Today, March 24</p>
          <hr className='border-gray-700 flex-1' />
        </div>

        {/* Message block */}
        <div className='flex gap-4'>
          <img
            className='w-10 h-10 object-cover rounded-full'
            src='https://img.freepik.com/free-photo/glad-sporty-woman-touching-her-brown-hair-while-posing-sandy-beach-enchanting-caucasian-girl-yellow-swimwear-fooling-around-tropical-island_197531-9002.jpg'
          />
          <div>
            <h4 className='text-gray-300 font-semibold mb-2'>
              Ania James
              <span className='text-gray-500 font-normal text-sm ml-2'>10:12am</span>
            </h4>

            <div className='flex items-center gap-2 mb-2'>
              <p className='bg-[#1E1F24] p-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500'>
                Hey, happy to hear from you. Yes, I will be back in a couple of days.
              </p>

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>

            <div className='flex items-center gap-2 mb-2'>
              <p className='bg-[#1E1F24] p-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500'>
                Here are some Design i took earlier today.
              </p>

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>

            <div className='flex flex-wrap items-center gap-2 mb-2'>
              <img
                className='w-36 h-40 object-cover rounded-lg'
                src='https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg'
              />

              <img
                className='w-36 h-40 object-cover rounded-lg'
                src='https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg'
              />

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>
          </div>
        </div>

        {/* Message block */}
        <div className='flex gap-4'>
          <img
            className='w-10 h-10 object-cover rounded-full'
            src='https://img.freepik.com/free-photo/senior-couple-hugging-home_1098-1297.jpg'
          />
          <div>
            <h4 className='text-gray-300 font-semibold mb-2'>
              Me
              <span className='text-gray-500 font-normal text-sm ml-2'>10:12am</span>
            </h4>

            <div className='flex items-center gap-2 mb-2'>
              <p className='bg-[#1E1F24] p-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500'>
                Hi, are you still web designer?
              </p>

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>

            <div className='flex items-center gap-2 mb-2'>
              <p className='bg-[#1E1F24] p-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500'>
                Would love to see some design 😊
              </p>

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bg-[#22222A] left-0 bottom-0 w-full p-8'>
        <form className='relative'>
          <BiMicrophone className='text-gray-300 absolute left-4 text-xl top-[10px] hover:cursor-pointer' />
          <input
            className='py-2 pl-11 pr-36 bg-[#1E1F24] outline-none w-full rounded-full text-gray-300'
            type='text'
            placeholder='Type something here...'
          />

          <div className='flex absolute right-4 top-[10px] text-gray-300 items-center gap-2 text-xl'>
            <RiImage2Line className='hover:cursor-pointer' />
            <RiEmotionHappyLine className='hover:cursor-pointer' />
            <RiSendPlaneLine className='hover:cursor-pointer' />
            <BiMap className='hover:cursor-pointer' />
          </div>
        </form>
      </div>
    </div>
  )
}