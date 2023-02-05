import { useEffect, useState } from "react";

import ResumePdf from "./CoreyCasmedesFall2022.pdf"


function Resume() {
    
    useEffect(() => {
        window.open(ResumePdf);

    })
    return (
        <div></div>
    );
//     const [experiences, setExperiences] = useState(
//         [
//             {
//                 title: "Software Performance Engineer",
//                 company: "Apple",
//                 location: "Austin, TX",
//                 startDate: "May 2021",
//                 endDate: "",
//                 details: [
//                     "Architected and implemented automated performance and server testing tool for Apple Wallet & Pay applications",
//                     "Developed integration testing as a service to rapidly expand business and onboard hundreds of partners",
//                     "Improved the user experience, efficiency, and user rate by rebuilding a legacy UI using react, nodejs, express.js and kube",
//                     "Mentored junior engineers and interns to enable their successful through pair programming and code reviews"
//                 ]
//             },
//             {
//                 title: "Software Engineer",
//                 company: "Capital One",
//                 location: "Plano, TX",
//                 startDate: "August 2019",
//                 endDate: "May 2021",
//                 details: [
//                     "Develop innovative and insightful loss forecasting solutions for internal Credit Risk Management problems and audits",
//                     "Transformed our product portfolio using an agile framework and technologies including Python, R, AWS, and Spark",
//                     "Extensive experience with a variety of AWS services to architect and deploy infrastructure in a cloud environment",
//                     "Volunteer and facilitate community outreach events such as CODERS and UT Dallas partnership InnovateHer"
//                 ]
//             },
//         ]
//     )


//     return (

//         <div className="grid grid-cols-1 mx-20 lg:mx-72 place-items-center font-arial min-h-full ">
   
//             <h2
//                 className='my-8 font-assistant-extrabold text-6xl'
//             >
//                 Experience
//             </h2>



//             {experiences.map((experience) => (
//                 <div className="font-clean justify-self-start py-4 bg-white border-gray-200 border shadow-md rounded-lg px-4 my-4 hover:scale-110 ease-in duration-500 min-w-full">
//                     <h3 className="text-2xl">
//                         {experience.title}
//                     </h3>
                    
//                     <h3 className="text-2xl">
//                         {experience.company}, {experience.location}
//                     </h3>

//                     <h3 className="text-lg text-stone-400 font-assistant-light">
//                         {experience.startDate} - {experience.endDate}
//                     </h3>

//                     <ul className="list-disc list-inside">
//                         {experience.details.map((detail) => (
//                             <li>{detail}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}


//         </div>
//     );
// }
}
export default Resume;