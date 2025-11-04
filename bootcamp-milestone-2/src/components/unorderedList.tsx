import style from '@/components/unorderedList.module.css';

export default function UnorderList({items}: {items: string[]}){
    return(
        <ul className={style.list}>
            {items.map((item, i) =>
                <li key={i}>{item}</li>
            )}
        </ul>
    );
}