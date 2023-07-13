import { FC } from 'react';
import styles from './Character.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetCharacterByIdQuery } from './Character.generated';

const Character: FC = () => {
  const { id } =useParams();
	const stringId = id ? id : '1';

	const navigate = useNavigate();

	const { data, loading, error } = useGetCharacterByIdQuery({
		variables: {
		  id: stringId,
		},
	});

	const onButtonClick = () => {
		navigate('/');
	}

	return (
		<div className={styles.Character}>
			{loading && <p className={styles.info}>Loading...</p>}
			{error && <p className={styles.info}>{error.message}</p>}
			<img src={data?.character?.image || '#'} alt='Фото персонажа' className={styles.image}></img>
			<button type='button' className={styles.button} onClick={onButtonClick}></button>
			<div className={styles.container}>
				<h2 className={styles.title}>{`File ${data?.character?.name}`}</h2>
				<p className={styles.text}>{`Name: ${data?.character?.name}`}</p>
				<p className={styles.text}>{`Gender: ${data?.character?.gender}`}</p>
				<p className={styles.text}>{`Species: ${data?.character?.species}`}</p>
				<p className={styles.text}>{`Home: ${data?.character?.origin?.name}`}</p>
				<p className={styles.text}>{`Location: ${data?.character?.location?.name}`}</p>
				<p className={styles.text}>{`Status: ${data?.character?.status}`}</p>
			</div>
		</div>
	)
};

export default Character;