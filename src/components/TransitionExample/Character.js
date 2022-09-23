import cn from 'classnames'

const UserCard = ({ character }) => {
  const { name, status, image, species } = character
  return (
    <div className=" flex flex-col border-2 border-[#5B1CE6] rounded-lg bg-[#030328] p-4">
      <img src={image} alt={name} className="rounded-lg w-3/4 self-center" />
      <h1 className="text-xl font-bold text-[#61d718] mt-8 mb-2 text-center">
        {name}
      </h1>
      <div className="flex items-center justify-center ">
        {status === 'unknown' ? (
          <span className="text-base mr-2 text-gray-400">?</span>
        ) : (
          <div
            className={cn('w-2 h-2 rounded-full  mr-2', {
              'bg-[#61d718]': status === 'Alive',
              'bg-red-500': status !== 'Alive',
            })}
          />
        )}
        <span
          className={cn('text-white text-base text-center', {
            'text-gray-400': status === 'unknown',
            'text-white': status !== 'unknown',
          })}
        >
          {status}
        </span>
      </div>
      <p className="text-white text-base text-center">
        <span className="font-bold text-[#9a35ef]">Species: </span> {species}
      </p>
    </div>
  )
}

export default UserCard
