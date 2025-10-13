import { FC } from "react";
import Transition from "../../ui/transition/Transition";
import Footer from "../../ui/footer/Footer";
import LeadSocialMedia from "../../features/contact/LeadSocialMedia";

const Contact: FC = () => {
  return (
    <div>
      <Transition className="transition_contact" text="Say Hello!!" />
      <LeadSocialMedia />
      <Footer className="absolute" />
    </div>
  );
};

export default Contact;
