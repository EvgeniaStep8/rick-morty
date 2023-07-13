import { FC } from 'react';
import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useGetCharactersQuery } from './Cards.generated';

const Cards: FC = () => {
	const { data, loading, error } = useGetCharactersQuery();

	return (
		<>
		  {loading && <p>Loading...</p>}
		  {error && <p>{error.message}</p>}
			{data?.characters?.results && <section className={styles.Cards}>{
				data.characters.results.map((card) => (
					card && <Card card={card} />
				))
			}</section>}
		</>
	)
}

export default Cards;