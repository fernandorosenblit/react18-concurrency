import { useState } from 'react'
import cn from 'classnames'

import LocationsList from './LocationsList'
import _locations from '../../utils/locations'

const replicateLocations = (n) => {
  const newArray = []
  for (let i = 0; i < n; i++) {
    newArray.push(..._locations)
  }
  return newArray
}

const DeferredValueExample = () => {
  const [input, setInput] = useState('')
  const [, setListSize] = useState(100)
  const [enableDeferrerValue, setEnableDeferrerValue] = useState(false)

  const [locations, setLocations] = useState(_locations)

  const handleInputChange = (e) => setInput(e.target.value)

  const handleListSizeChange = (e) => {
    setListSize(e.target.value)
    setLocations(replicateLocations(e.target.value))
  }

  return (
    <div className="flex flex-col p-5 grow">
      <div className="flex justify-evenly items-center w-full my-8 mx-auto">
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-[#B535F6] rounded-sm bg-white checked:bg-[#B535F6] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value={enableDeferrerValue}
            onClick={() => setEnableDeferrerValue((prev) => !prev)}
          />
          <label
            className={cn('form-check-label inline-bloc', {
              'text-white': !enableDeferrerValue,
              'text-[#B535F6]': enableDeferrerValue,
            })}
            htmlFor="flexCheckDefault"
          >
            Enable Deferred Value
          </label>
        </div>
        <input
          className="p-2 w-1/2 rounded-lg"
          onChange={handleInputChange}
          value={input}
          placeholder="Update locations description"
        />
        <div>
          <span className="text-white mr-2">Locations: {locations.length}</span>
          <select onChange={handleListSizeChange} className="p-3 rounded-lg">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <LocationsList
        input={input}
        enableDeferrerValue={enableDeferrerValue}
        locations={locations}
      />
    </div>
  )
}

export default DeferredValueExample
