import styles from './pageTitle.module.css';

type PageTitleProps = {
    title: string;
}

export default function PageTitle({title} : PageTitleProps){
    return(
        <h1 className={styles.pageTitle}>{title}</h1>
    );
}