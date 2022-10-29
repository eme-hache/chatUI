import {
  RiCheckboxBlankCircleFill,
  RiCheckDoubleFill,
} from 'react-icons/ri'

export default function UserPreview ({ user, toggleMenu }) {
  const handleToggleMenu = () => {
    toggleMenu(user)
  }

  return (
    <a href='#' onClick={handleToggleMenu} className='flex w-full gap-4 lg:gap-2 mb-8'>
      <div className=' relative flex items-center justify-center'>
        <img
          className='w-10 h-10 object-cover rounded-full'
          src={user.avatar}
        />
        {user.isActive && <RiCheckboxBlankCircleFill className='absolute text-green-500 right-0 bottom-1 text-sm' />}
      </div>

      <div className='flex flex-col flex-1 justify-between min-w-0'>
        <div className='flex items-center justify-between'>
          <div className='overflow-hidden flex'>
            <span className='text-gray-300 font-semibold truncate'>
              {user.name}
            </span>
          </div>

          <h3 className='text-gray-500'>
            {user.hourLastMessage}
          </h3>
        </div>

        <div className='flex justify-between'>
          {user.isTyping
            ? <p className='text-green-300'>Typing...</p>
            : <p className='text-gray-500'>{user.lastMessage}</p>}

          <div>
            {user.unread > 0
              && <span className='bg-red-600 text-white rounded-full py-1 px-2 text-xs'>
                {user.unread}
              </span>}
            {user.status === 'seen'
              && <RiCheckDoubleFill className='text-xl text-green-300' />}
          </div>
        </div>
      </div>
    </a>
  )
}