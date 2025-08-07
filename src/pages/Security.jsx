import HeroDesgin from '../components/HeroDesgin/HeroDesgin'

export default function Security() {
  return (
    <div>
       <HeroDesgin 
                     title={
                <>
                   Your Security is Our<span className="highlighted-text">Top Priority</span> Careers!
                </>
            }
           description = "At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
           imageBackground ='' />
    </div>
  )
}