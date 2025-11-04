import style from '@/components/section.module.css';
import Entry from '@/components/entry';

type EntryData = {
    title: string;
    info: string;
    description: string[];
}
export default function Section(props: {title: string, entries: EntryData[]}){
    return(
        <div className={style.section}>
            <h2 className={style.sectionTitle}>{props.title}</h2>
            {(props.entries).map((entry, i) =>

                <Entry key={i} title={entry.title} info={entry.info} description={entry.description}/>
            )}
        </div>
    );
}