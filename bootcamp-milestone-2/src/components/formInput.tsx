import style from '@/components/formInput.module.css';


export default function FormInput(props: {label: string, name: string, type: string, placeholder: string}){
    return(
        <div className={style.input}>
            <label htmlFor={props.name}>{props.label}</label><br/>
            <input type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} required/>
        </div>
    );
}