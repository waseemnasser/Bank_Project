
import "./FeaturesCard.css"
function FeaturesCard() {


  const FeaturesData = [{
    aa_title: "24/7 Account Access",
    aa_description: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."

  },
  {
    aa_title: "Mobile Banking App",
    aa_description: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."

  },
  {
    aa_title: "Secure Transactions",
    aa_description: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."

  },
  {
    aa_title: "Bill Pay and Transfers",
    aa_description: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."

  },]



  return (
    <div className="aa-container-feature">
      {FeaturesData.map((e, index) => (
        <div className="aa-features-card">
          <div className="aa-features-heading LexendRegular">
            <p key={index}>{e.aa_title}</p>
            <img src="assets/images/Icons/features-arrow.svg" alt="arrow" />
          </div>
          <p className="aa-features-description LexendRegular" key={index}>{e.aa_description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeaturesCard

