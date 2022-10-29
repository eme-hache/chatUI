import UserPreview from './components/UserPreview'
import { useState } from 'react'

import {
  RiSearchLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiMessage2Line,
  RiMenu3Fill,
} from 'react-icons/ri'
import Chat from './components/Chat'
import About from './components/About'

const ATTACHED_USERS = [
  {
    avatar: 'https://img.freepik.com/free-photo/glad-sporty-woman-touching-her-brown-hair-while-posing-sandy-beach-enchanting-caucasian-girl-yellow-swimwear-fooling-around-tropical-island_197531-9002.jpg',
    name: 'Ania James',
    lastMessage: 'Hello',
    hourLastMessage: '4:30pm',
    unread: 2,
    status: '',
    isActive: true,
    isTyping: true,
    isGroup: false,
    about: 'Its a beautiful day'
  },
  {
    avatar: 'https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129544.jpg',
    name: 'Design Team',
    lastMessage: 'Hello everyone',
    hourLastMessage: '9:36am',
    unread: 0,
    status: 'seen',
    isActive: false,
    isTyping: false,
    isGroup: true,
    about: '60 members'
  },
  {
    avatar: 'https://img.freepik.com/free-photo/senior-couple-hugging-home_1098-1297.jpg',
    name: 'Ahmed Medi',
    lastMessage: 'Wow, really cool 🔥',
    hourLastMessage: '10:20am',
    unread: 0,
    status: 'sent',
    isActive: false,
    isTyping: false,
    isGroup: false,
    about: 'Only messages'
  }
]

const ALL_USERS = [
  {
    avatar: 'https://img.freepik.com/free-photo/college-life-modern-lifestyle-education-concept-cheerful-good-looking-redhead-female-student-with-foxy-long-hair-wearing-headphones-neck-backpack-smiling-camera_1258-73003.jpg',
    name: 'Sarah Jhonson',
    lastMessage: 'Hello',
    hourLastMessage: '4:30pm',
    unread: 0,
    status: '',
    isActive: true,
    isTyping: true,
    isGroup: false,
    about: 'Only calls'
  },
  {
    avatar: 'https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129544.jpg',
    name: 'Design Team',
    lastMessage: 'Hello everyone',
    hourLastMessage: '9:36am',
    unread: 0,
    status: 'seen',
    isActive: false,
    isTyping: false,
    isGroup: true,
    about: '60 members'
  },
  {
    avatar: 'https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129544.jpg',
    name: 'Design Team',
    lastMessage: 'Hello everyone',
    hourLastMessage: '9:36am',
    unread: 0,
    status: 'seen',
    isActive: false,
    isTyping: false,
    isGroup: true,
    about: '60 members'
  },
  {
    avatar: 'https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129544.jpg',
    name: 'Design Team',
    lastMessage: 'Hello everyone',
    hourLastMessage: '9:36am',
    unread: 0,
    status: 'seen',
    isActive: false,
    isTyping: false,
    isGroup: true,
    about: '60 members'
  },
  {
    avatar: 'https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129544.jpg',
    name: 'Design Team',
    lastMessage: 'Hello everyone',
    hourLastMessage: '9:36am',
    unread: 0,
    status: 'seen',
    isActive: false,
    isTyping: false,
    isGroup: true,
    about: '60 members'
  },
]

function App () {
  const [detailsActive, setDetailsActive] = useState(false)
  const [menuActive, setMenuActive] = useState(true)
  const [currentUser, setCurrentUser] = useState({})

  const toggleMenu = user => {
    if (user) {
      setCurrentUser(user)
    }

    setMenuActive(!menuActive)
  }

  const toggleDetails = () => {
    setDetailsActive(!detailsActive)
  }

  return (
    <div className='flex flex-col bg-[#1E1F24]'>
      <header className='bg-[#141517] h-[8vh] w-full flex items-center justify-between px-8'>
        <div>
          <h1 className={`${menuActive ? 'block' : 'hidden'} text-2xl text-white font-bold`}>chatUI</h1>
          <button
            onClick={toggleMenu}
            className={`${menuActive ? 'hidden' : 'block'} bg-[#22222A] p-3 rounded-full text-white text-xl`}
          >
            <RiMenu3Fill />
          </button>
        </div>

        <form className='hidden md:block'>
          <div className='relative'>
            <input
              type='text'
              className='bg-[#050505] outline-none py-1 pl-4 pr-8 rounded text-gray-300'
              placeholder='Search'
            />
            <RiSearchLine className='absolute right-2 top-2 text-gray-300' />
          </div>
        </form>

        <div className='flex items-center gap-6'>
          <div className='relative'>
            <RiNotification3Line className='text-xl text-gray-300' />
            <span className='bg-purple-600 absolute rounded-full text-[10px] text-white py-[2px] px-[6px] -top-2 -right-2'>3</span>
          </div>

          <div className='flex items-center gap-2'>
            <img
              className='w-6 h-6 object-cover rounded-full ring-2 ring-white'
              src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg'
            />

            <RiArrowDownSLine className='text-gray-300' />
          </div>
        </div>
      </header>

      <main className='flex'>
        <section
          className={`lg:max-w-[25%] bg-[#22222A] z-10 p-8 overflow-y-scroll fixed lg:static transition-all w-full h-[92vh] ${menuActive ? 'left-0' : '-left-full'} scrollbar-thin scrollbar-thumb-gray-500 overflow-y-scroll scrollbar-thumb-rounded-full`}
        >
          {/* Title and search input */}
          <div className='mb-8'>
            <h1 className='text-white text-3xl mb-4 font-semibold'>Messages</h1>
            <form className='hidden md:block'>
              <div className='relative'>
                <input
                  type='text'
                  className='bg-[#050505] outline-none py-2 pl-4 pr-8 rounded text-gray-300 w-full'
                  placeholder='Search'
                />
                <RiSearchLine className='absolute right-2 top-3 text-gray-300' />
              </div>
            </form>
          </div>

          {/* Atached users list */}
          <div>
            {ATTACHED_USERS.map(user => <UserPreview toggleMenu={toggleMenu} user={user} />)}
          </div>

          {/* All messages */}
          <h5 className='text-gray-300 flex items-center gap-2 my-8'>
            <RiMessage2Line />
            All messages
          </h5>

          {/* All users list */}
          <div>
            {ALL_USERS.map(user => <UserPreview toggleMenu={toggleMenu} user={user} />)}
          </div>
        </section>

        <section
          className={`${detailsActive ? 'lg:max-w-[50%] ' : 'lg:max-w-[75%]'} bg-[#141517] w-full relative h-[92vh] transition-all flex-1`}
        >
          {/* Current chat info */}
          <Chat user={currentUser} toggleDetails={toggleDetails} />
        </section>

        <section
          className={`${detailsActive ? 'right-0 w-full lg:w-[25%]' : '-right-full '} bg-[#1E1F24] h-[92vh] transition-all fixed`}
        >
          <About toggleDetails={toggleDetails} />
        </section>
      </main>
    </div>
  )
}

export default App
