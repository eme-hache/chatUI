import { RiAddLine, RiEmotionHappyLine, RiImage2Line, RiMore2Fill, RiSendPlaneLine } from 'react-icons/ri'
import { BiMap, BiMicrophone } from 'react-icons/bi'

export default function Chat ({ toggleDetails }) {
  return (
    <div className='h-full w-full'>
      {/* Header */}
      <header className='h-[15%] lg:h-[20%] flex justify-between min-w-0 px-8'>
        <button
          className='mr-4'
          onClick={toggleDetails}
        >
          <img
            className='object-cover h-14 w-14 lg:h-20 lg:w-20 rounded-full'
            src='https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129544.jpg'
          />
        </button>

        <div className='flex items-center flex-1 justify-between min-w-0'>
          <button
            onClick={toggleDetails}
            className='min-w-0'
          >
            <div className='overflow-hidden flex flex-col'>
              <h1 className='lg:text-3xl text-gray-300 truncate'>Desing Teamasldjnaksudhauisdhajksdbnjkasdhkajsdhlashjdjkashdfbjshdfgjsdhfbjsdhfgjshdgfjshdfgjsdhfg</h1>
              <p className='text-gray-500 truncate text-left'>60 members</p>
            </div>
          </button>

          <div className='ml-4'>
            <div className='flex items-center gap-3'>
              <label className='text-gray-500'>Add</label>

              <button className='bg-[#050505] p-2.5 rounded-full text-gray-300'>
                <RiAddLine />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Chat */}
      <div className='h-[75%] lg:h-[67%] p-8 scrollbar-thin scrollbar-thumb-gray-500 overflow-y-scroll scrollbar-thumb-rounded-full'>
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
        <div className='flex gap-4 mb-8'>
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
        <div className='flex flex-row-reverse gap-4'>
          <img
            className='w-10 h-10 object-cover rounded-full'
            src='https://img.freepik.com/free-photo/senior-couple-hugging-home_1098-1297.jpg'
          />
          <div>
            <h4 className='text-gray-300 font-semibold mb-2 text-right'>
              Me
              <span className='text-gray-500 font-normal text-sm ml-2'>10:12am</span>
            </h4>

            <div className='flex flex-row-reverse items-center gap-2 mb-2'>
              <p className='bg-[#5051F9] p-2 px-4 rounded-tl-lg rounded-br-lg rounded-bl-lg text-gray-300'>
                Hi, are you still web designer?
              </p>

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>

            <div className='flex flex-row-reverse items-center gap-2 mb-2'>
              <p className='bg-[#5051F9] p-2 px-4 rounded-tl-lg rounded-br-lg rounded-bl-lg text-gray-300'>
                Would love to see some design 😊
              </p>

              <button className='text-gray-300'>
                <RiMore2Fill />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Text area */}
      <div className='bg-[#22222A] h-[10%] lg:h-[13%] w-full flex items-center px-8'>
        <form className='relative w-full'>
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