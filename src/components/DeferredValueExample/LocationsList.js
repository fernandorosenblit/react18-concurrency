import { useDeferredValue, useEffect, useMemo } from 'react'

const LocationsList = ({ input, enableDeferrerValue, locations }) => {
  const defferedInput = useDeferredValue(input)

  useEffect(() => {
    enableDeferrerValue
      ? console.log(
          `-----------------------\n${input} (input)\n${defferedInput} (deferred input)\n-----------------------`
        )
      : console.log(
          `-----------------------\n${input} (input)\n${new Date().getTime()} (timestamp)\n-----------------------`
        )
  }, [enableDeferrerValue, input, defferedInput])

  const deferredLocationsList = useMemo(
    () =>
      locations.map(({ name, type }) => (
        <div className=" flex flex-col border-2 border-[#5B1CE6] rounded-lg bg-[#030328] py-16 px-2">
          <h1 className="text-xl font-bold text-[#61d718] mb-2 text-center">
            {name}
          </h1>
          <p className="text-white text-base text-center">
            <span className="font-bold text-[#9a35ef]">Type: </span> {type}
          </p>
          <p className="text-white text-base text-center break-words">
            <span className="font-bold text-[#9a35ef] ">Description: </span>{' '}
            {defferedInput}
          </p>
        </div>
      )),
    [defferedInput, locations]
  )

  const locationsList = useMemo(
    () =>
      locations.map(({ name, type }) => (
        <div className=" flex flex-col border-2 border-[#5B1CE6] rounded-lg bg-[#030328] py-16 px-2">
          <h1 className="text-xl font-bold text-[#61d718] mb-2 text-center">
            {name}
          </h1>
          <p className="text-white text-base text-center">
            <span className="font-bold text-[#9a35ef]">Type: </span> {type}
          </p>
          <p className="text-white text-base text-center break-words">
            <span className="font-bold text-[#9a35ef]">Description: </span>{' '}
            {input}
          </p>
        </div>
      )),
    [input, locations]
  )

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {enableDeferrerValue ? deferredLocationsList : locationsList}
    </div>
  )
}

export default LocationsList
