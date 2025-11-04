import PageTitle from "@/components/pageTitle";
import style from '@/app/portfolio/page.module.css';

export default function Portfolio(){
    return(
        <div>
            <PageTitle title="My Portfolio"></PageTitle>
            <p className={style.para}>Welcome to my portfolio!</p>
        </div>
        
    );
}