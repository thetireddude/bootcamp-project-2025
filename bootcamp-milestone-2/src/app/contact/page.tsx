import PageTitle from '@/components/pageTitle';
import style from '@/app/contact/page.module.css';
import FormInput from '@/components/formInput';

export default function Contact(){
    return(
        <div className={style.container}>
            <PageTitle title="Contact Me"/>
            <p>Feel free to reach out!</p>
            <div className={style.contactForm}>
                <form>
                    <FormInput label="Name" name="name" type="text" placeholder='John Doe'/>
                    <FormInput label="Email" name="email" type="email" placeholder='jdoe@example.com'/>
                    <div>
                        <label htmlFor="message">What do you want to talk about?</label><br/>
                        <textarea id="message" rows={5} cols={50} required/>
                    </div>
                    <div>
                        <input className={style.submitBtn} type="submit"/>
                    </div>
                </form>
            </div>
        </div>
        
    );
}