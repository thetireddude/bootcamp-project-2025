import style from '@/app/resume/page.module.css';
import PageTitle from '@/components/pageTitle';
import Entry from '@/components/entry';
import Section from '@/components/section';

export default function Resume(){
    return(
        <div>
            <PageTitle title="My Resume"></PageTitle>
            <div className={style.downloadBtn}>
                <a href="resume.pdf" download >Download Resume</a>
            </div>
            <div className={style.resume}>
                <Section title="Education" entries={[
                    {
                        title: "Bachelor's of Science - Computer Science",
                        info: "California Polytechnic State University, San Luis Obispo | Sept 2024 - Present",
                        description: []
                    }
                ]}/>
                <Section title="Experience" entries={[
                    {
                        title: "Hack4Impact Developer (Member)",
                        info: "Hack4Impact | Sept 2025 - Present",
                        description: [
                            "Built and designed a portfolio website during the Bootcamp.", 
                            "Collaborated within a team to build full-stack projects for clients in the local community."
                        ]
                    }
                ]}/>
                <Section title="Skills" entries={[
                    {
                        title: "",
                        info: "",
                        description: [
                            "HTML",
                            "CSS",
                            "Javascript",
                            "React.js",
                            "Next.js"
                        ]
                    }
                ]}/>
                <Section title="Projects" entries={[
                    {
                        title: "Personal Portfolio Website",
                        info: "Built a portfolio website using HTML, CSS< Javascript and front-end frameworks",
                        description: [
                            "Implemented HTML & CSS styled pages",
                            "Linked pages via a navbar",
                            "Utilised front-end and backend frameworks like React.js and Next.js"
                        ]
                    }
                ]}/>
                <Section title="Coursework" entries={[
                    {
                        title: "",
                        info: "",
                        description: [
                            "Hack4Impact Bootcamp",
                            "Data Structures and Algorithms",
                            "Object Oriented Programming"
                        ]
                    }
                ]}/>
            </div>
        </div>
    );
}