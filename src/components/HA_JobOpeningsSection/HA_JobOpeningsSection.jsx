import HA_JobOpeningsCard from "../HA_JobOpeningsCard/HA_JobOpeningsCard";
import SectionTitle from "../SectionTitle/SectionTitle";


const HA_JobOpeningsSection = () => {
  return (
    <div>
      <SectionTitle
        titlegreen="Job Openings"
        paragraph="Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry"
        filter={false}
        order={false}        
      />
      <HA_JobOpeningsCard />
    </div>
  );
};

export default HA_JobOpeningsSection;
