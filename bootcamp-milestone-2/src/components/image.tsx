import styles from './image.module.css';

type ImageProps = {
    src: string;
    alt: string;
};


export default function Image({src, alt}: ImageProps){
    return(
        <div className={styles.Image}>
          <img src={src} alt={alt}></img>
        </div>
    );
};