import React from 'react'
import Card from './card'
import List from './list'
import UsersLogo from './userslogo'
import { todoList, inProgressList, doneList } from './data'
import { useState } from 'react'

function Board() {
  const [dragged, setDragged] = React.useState(null)
  const [listOfLists, setListOfLists] = useState({todoList, inProgressList, doneList})
  function handleDrop(e) {
    const list = e.currentTarget.dataset.id
    console.log(dragged)
    const listOfListsClone = structuredClone(listOfLists)
    const newList = listOfListsClone[dragged.list].filter(item => item.id !== dragged.data.id)
    listOfListsClone[dragged.list] = newList
    listOfListsClone[list].push(dragged.data)
    setListOfLists(listOfListsClone)
  }
  return (
    <div className='flex flex-col flex-1 gap-4 p-4'>
      <div className='flex gap-4 text-center align-bottom'>
        <h1 className='text-2xl font-bold'>
          Development |
        </h1>
        <UsersLogo/>
      </div>
      <main className='flex flex-1 gap-6'>
        <List title="TO DO" handleDrop={handleDrop} id="todoList">
          {listOfLists.todoList.map((card) => (
            <Card {...card} key={card.id} title={card.title} setDragged={setDragged}/>
          ))}
        </List>
        <List title="IN PROGRESS" handleDrop={handleDrop} id="inProgressList">
         {listOfLists.inProgressList.map((card) => (
            <Card {...card} key={card.id} title={card.title} setDragged={setDragged}/>
          ))}
        </List>
        <List title="DONE" handleDrop={handleDrop} id="doneList">
          {listOfLists.doneList.map((card) => (
            <Card {...card} key={card.id} title={card.title} setDragged={setDragged}/>
          ))}
        </List>
      </main>
    </div>
  )
}

export default Board