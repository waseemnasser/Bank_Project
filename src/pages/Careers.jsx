import HeroDesgin from '../components/HeroDesgin/HeroDesgin'
import heroImg from '/assets/images/careers/careers-hero.png'
export default function Careers() {
    return (
        <div>
            <HeroDesgin
                title={
                    <>
                        Welcome to <span className="highlighted-text">YourBank</span> Careers!
                    </>
                }
                description="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
                imageBackground={heroImg} />
        </div>
    )
}

