import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecks()

  return (
    <>
      {/*{isLoading && <Skeleton height={100} count={10} style={{ marginBottom: '10px' }} />}*/}
      <ul className={s.list}>
        {isLoading && decks.length === 0 && <DeckItemSkeleton count={10} />}
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
    </>
  )
}

// decks.length === 0 - проверка, чтоб Skeleton работал только при первой загрузке