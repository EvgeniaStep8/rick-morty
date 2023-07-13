import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';
import { CardFragment } from './Card.generated';
import ArrowIcon from '../icons/ArrowIcon';

interface ICardProps {
	card: CardFragment,
}

const Card: FC<ICardProps> = ({ card })  => {
	const navigate = useNavigate();

	const onArrowClick = () => {
		navigate(`/characters/${card.id}`)
	};

	return (
		<div className={styles.card}>
			<img src={card?.image || '#'} alt={card?.name || 'cardImage'} className={styles.image} />
			<div className={styles.container}>
				<h2 className={styles.title}>{card.name}</h2>
				<ArrowIcon className={styles.arrow} onClick={onArrowClick} />
			</div>
		</div>
	);
}

export default Card;