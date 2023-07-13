import { FC } from 'react';
import styles from './Character.module.css';
import { useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from './Character.generated';

const Character: FC = () => {
  const { id } =useParams();
	const stringId = id ? id : '';
	const { data, loading, error } = useGetCharacterByIdQuery({
		variables: {
		  id: stringId,
		},
	});

	return (
		<div className={styles.Character}>
			{loading && <p className={styles.info}>Loading...</p>}
			{error && <p className={styles.info}>{error.message}</p>}
			<img src={data?.character?.image || '#'} alt='Фото персонажа' className={styles.image}></img>
		</div>
	)
};

export default Character;