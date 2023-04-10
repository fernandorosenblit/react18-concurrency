import CharacterCard from './CharacterCard'
import NoResults from '../common/NoResults'

const CharactersList = ({ characters }) => {
  if (!characters.length) {
    return <NoResults />
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {characters.map((character) => (
        <CharacterCard key={`${character.id}`} character={character} />
      ))}
    </div>
  )
}

export default CharactersList
