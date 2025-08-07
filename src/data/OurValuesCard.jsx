const storedValueCardData = localStorage.getItem('ValueCardData'); 

let ValueCardData = storedValueCardData ? JSON.parse(storedValueCardData) : [ 
    {
        title: "Integrity",
        desc: "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."
    },
    {
        title: "Customer Centricity",
        desc: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."
    },
    {
        title: "Collaboration",
        desc: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."
    },
    {
        title: "Innovation",
        desc: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
    }
];

if (!storedValueCardData) {
    localStorage.setItem('ValueCardData', JSON.stringify(ValueCardData));
}
export const exportedValueCardData = ValueCardData;
