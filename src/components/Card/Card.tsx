import { FC } from "react";
import styles from "./Card.module.css";
import { CardFragment } from "./Card.generated";

interface ICardProps {
	card: CardFragment,
}

const Card: FC<ICardProps> = ({ card })  => {
	return (
		<div className={styles.card}>
			<img src={card?.image || '#'} alt={card?.name || 'cardImage'} className={styles.image} />
			<div className={styles.container}>
				<h2 className={styles.title}>{card.name}</h2>
				<button type="button" className={styles.like}></button>
			</div>
		</div>
	);
}

export default Card;