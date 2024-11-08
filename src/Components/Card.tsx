import classes from './Card.module.css';
interface CardProps {
  image: string;
  title?: string;
  description?: string;
}

export default function Card({ image, title, description }: CardProps) {
  const handleClick = () => {
    window.open(image, '__blank');
  };
  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={image}
        alt={title}
        loading='lazy'
        onClick={handleClick}
      />
      <div className={classes.caption}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}
