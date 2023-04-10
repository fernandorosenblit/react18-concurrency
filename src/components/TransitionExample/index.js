import { useState, useTransition } from 'react'
import cn from 'classnames'

import Loading from '../common/Loading'

import CharactersList from './CharactersList'
import _characters from '../../utils/characters'

const filterCharacters = (term) => {
  if (!term) return _characters

  return _characters.filter((character) =>
    character.name.toLowerCase().includes(term.toLowerCase())
  )
}

// const multiply = () => {
//   const test = [
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//     ..._characters,
//   ]

//   const test2 = test.map((e, i) => ({ ...e, id: i }))

//   console.log(test2)
// }

const TransitionExample = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [characters, setCharacters] = useState(_characters)
  const [isPending, startTransition] = useTransition()
  const [enableTransition, setEnableTransition] = useState(false)

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    if (enableTransition) {
      startTransition(() => setCharacters(filterCharacters(e.target.value)))
    } else {
      setCharacters(filterCharacters(e.target.value))
    }
  }

  return (
    <div className="flex flex-col p-5 grow">
      <div className="flex justify-evenly items-center w-full my-8 mx-auto">
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-[#B535F6] rounded-sm bg-white checked:bg-[#B535F6] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value={enableTransition}
            onClick={() => setEnableTransition((prev) => !prev)}
          />
          <label
            className={cn('form-check-label inline-bloc', {
              'text-white': !enableTransition,
              'text-[#B535F6]': enableTransition,
            })}
            htmlFor="flexCheckDefault"
          >
            Enable Transition
          </label>
        </div>
        <input
          className="p-2 w-1/2 rounded-lg"
          onChange={handleInputChange}
          value={searchTerm}
          placeholder="Search by name"
        />
        <span className="text-white">{`Results: ${characters.length}`}</span>
      </div>
      {enableTransition ? (
        isPending ? (
          <Loading />
        ) : (
          <CharactersList characters={characters} />
        )
      ) : (
        <CharactersList characters={characters} />
      )}
    </div>
  )
}

export default TransitionExample
