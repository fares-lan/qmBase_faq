import "./topbar.css";
import { FaBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Topbar() {
  // Function to handle click on "Getting Started Guide" section
  const handleGettingStartedClick = () => {
    window.alert("Here you can find the guide for the frequent questions.");
  };

  // Rendering the Topbar component
  return (
    <>
      <div className="header">
        <h1 className="header-title">Frequent Questions</h1>
        <p className="header-sub">
          Simple answers to your most common questions
        </p>

        <div className="buttons">
          <div onClick={handleGettingStartedClick} className="button guide">
            <FaBook />
            Getting started guide
          </div>
          <a
            href="mailto:fareslandoulsi00@gmail.com"
            className="button support"
          >
            <MdEmail />
            Email support
          </a>
        </div>
      </div>
    </>
  );
}
