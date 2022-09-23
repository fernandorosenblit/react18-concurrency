import Character from './Character'
import NoResults from '../common/NoResults'

const CharactersList = ({ characters }) => {
  if (!characters.length) {
    return <NoResults />
  }

  return (
    <div className="grid grid-cols-6 gap-8">
      {characters.map((character) => (
        <Character key={`${character.id}`} character={character} />
      ))}
    </div>
  )
}

export default CharactersList
