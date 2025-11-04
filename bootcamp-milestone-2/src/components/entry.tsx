import style from '@/components/entry.module.css';
import ULlist from '@/components/unorderedList';

export default function Entry(props: {title: string, info: string, description: string[]}){
    return(
        <div className={style.entry}>
            <h3 className={style.title}>
                {props.title}
            </h3>
            <div className={style.info}>
                {props.info}
            </div>
            <div className={style.description}>
                <ULlist items={props.description}/>
            </div>
        </div>
    );
}