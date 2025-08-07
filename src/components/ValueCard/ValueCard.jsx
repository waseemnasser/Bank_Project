import './ValueCard.css'
export default function ValueCard({ title, desc }) {
    return (
        <div className='VC-Container'>
            <h3 className='.LexendMedium'>{title}</h3>
            <p className='.LexendLight'>{desc}</p>
        </div>
    )
}

