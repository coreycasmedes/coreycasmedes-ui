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
                    "Architected and implemented automated performance and server testing tool for Apple Wallet & Pay applications",
                    "Developed integration testing as a service to rapidly expand business and onboard hundreds of partners",
                    "Improved the user experience, efficiency, and user rate by rebuilding a legacy UI using react, nodejs, express.js and kube",
                    "Mentored junior engineers and interns to enable their successful through pair programming and code reviews"
                ]
            },
            {
                title: "Software Engineer",
                company: "Capital One",
                location: "Plano, TX",
                startDate: "August 2019",
                endDate: "May 2021",
                details: [
                    "Develop innovative and insightful loss forecasting solutions for internal Credit Risk Management problems and audits",
                    "Transformed our product portfolio using an agile framework and technologies including Python, R, AWS, and Spark",
                    "Extensive experience with a variety of AWS services to architect and deploy infrastructure in a cloud environment",
                    "Volunteer and facilitate community outreach events such as CODERS and UT Dallas partnership InnovateHer"
                ]
            },
        ]
    )


    return (

        <div className="grid grid-cols-1 lg:mx-96 sm:mx-44 place-items-center my-36 font-sans">
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
                className='text-4xl my-6'
            >
                Experience
            </h1>
            {experiences.map((experience) => (
                <div className="justify-self-start">
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