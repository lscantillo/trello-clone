import React from 'react'
import Image from 'next/image'

function Card({ title, user, comments = [], id, setDragged }) {
  function handleDragStart(e) {
    e.dataTransfer.setData('id', e.target.id)
    setDragged(
      {
        data: {
          title,
          user,
          comments,
          id,
        },
        list: e.target.closest('[data-id]').dataset.id
      }
    )
  }
  return (
    <div draggable onDragStart={handleDragStart} className='flex flex-col gap-4 p-2 text-gray-900 bg-white rounded-sm'>
      <div className='flex justify-between'>
        <p>
          {title}
        </p>
        <span> <Image src="/edit.png" width={20} height={20}/></span>
      </div>
      <div className='flex justify-between'>
        <span className='flex gap-1'>
          <Image src="/comment.png" width={20} height={20}/>
          {comments.length > 0 ? comments.length : null}
        </span>
        <span> <Image className='rounded-full' src={user.avatar} width={20} height={20}/></span>
      </div>
    </div>
  )
}

export default Card