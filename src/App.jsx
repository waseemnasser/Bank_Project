import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Careers from './pages/Careers';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Security from './pages/Security';
import About from './pages/About';
import { SectionTitle } from './components/SectionTitle/SectionTitle';
import { FooterTitle } from './components/FooterTitle/FooterTitle';
import { SliderSec } from './components/SliderSec/SliderSec';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
      {/* <SectionTitle titlewhite={"Our"} titlegreen={"Testimonials"} filter={true} paragraph={"Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"}></SectionTitle>
      <FooterTitle title={"Start your financial journey with"} paragraph={"Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"}></FooterTitle> */}
      <SliderSec></SliderSec>
    </>
  );
}

export default App;