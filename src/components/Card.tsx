import { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {
	name: string,
	image: string
}

const Card: FC<CardProps> = ({ name, image })  => {
	return (
		<div className={styles.card}>
		  <img src={image} alt={name} className={styles.image} />
			<div className={styles.container}>
				<h2 className={styles.title}>{name}</h2>
				<button type="button" className={styles.like}></button>
			</div>
		</div>
	);
}

export default Card;