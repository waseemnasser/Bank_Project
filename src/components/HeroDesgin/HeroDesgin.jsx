import './HeroDesgin.css'
const HeroDesgin = ({ title , description , imageBackground }) => {
  return (
    <div className="rh-hero">
      <div className='rh-description'>
        <h1 className="LexendMedium">{title}</h1>
        <p className="LexendLight">{description}</p>
         </div>
      <div className="rh-img">
        <img src ={imageBackground} alt='hero-img' />
      </div>
    </div>
  );
};

export default HeroDesgin