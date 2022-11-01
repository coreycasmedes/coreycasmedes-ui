import { useState } from "react";


function Resume() {

    const [experiences, setExperiences] = useState(
        [
            {
                title: "Software Performance Engineer",
                company: "Apple",
                location: "Austin, TX",
                startDate: "May 2021",
                endDate: "",
                details: [
                    "Worked on integratino as a service for new apple pay partners",
                    "Built internal performance testing tool to gain better insight on server side performance",
                    "Mentored junior engineers and interns"
                ]
            },
            {
                title: "Software Engineer",
                company: "Capital One",
                location: "Plano, TX",
                startDate: "August 2019",
                endDate: "May 2021",
                details: [
                    "Worked on enhancing credit risk management ",
                    "Built tools to generate Comprehensive Credit Analysis Review for government audits",
                    "Created new internal tools to automate risk scenarios using data and ML"
                ]
            },
            {
                title: "Software Engineer",
                company: "Capital One",
                location: "Plano, TX",
                startDate: "August 2019",
                endDate: "May 2021",
                details: [
                    "Worked on enhancing credit risk management ",
                    "Built tools to generate Comprehensive Credit Analysis Review for government audits",
                    "Created new internal tools to automate risk scenarios using data and ML"
                ]
            },
            {
                title: "Software Performance Engineer",
                company: "Apple",
                location: "Austin, TX",
                startDate: "May 2021",
                endDate: "",
                details: [
                    "Worked on integratino as a service for new apple pay partners",
                    "Built internal performance testing tool to gain better insight on server side performance",
                    "Mentored junior engineers and interns"
                ]
            },
        ]
    )


    return (

        <div className="grid place-items-center my-36">
            <h1
                className='text-4xl'
            >
                Corey Casmedes
            </h1>
            <h3
                className='text-xl text-stone-400'
            >
                Software Engineer
            </h3>

            <h1
                className='text-4xl'
            >
                Experience
            </h1>
            {experiences.map((experience) => (
                <div className="p-8">
                    <h3 className="text-2xl">
                        {experience.title}
                    </h3>
                    
                    <h3 className="text-2xl">
                        {experience.company}, {experience.location}
                    </h3>

                    <h3 className="text-lg text-stone-400">
                        {experience.startDate} - {experience.endDate}
                    </h3>

                    <ul className="list-disc list-inside">
                        {experience.details.map((detail) => (
                            <li>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}


        </div>
    );
}

export default Resume;