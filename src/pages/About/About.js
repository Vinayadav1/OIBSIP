import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";

const teamMembers = [
  {
    name: "John Doe",
    designation: "CEO",
    image: "https://via.placeholder.com/150",
    bio: "John is the visionary behind our company, driving innovation and strategy with passion. With over 20 years of experience in the industry, he leads our team with a commitment to excellence and a focus on customer satisfaction.",
  },
  {
    name: "Jane Smith",
    designation: "CTO",
    image: "https://via.placeholder.com/150",
    bio: "Jane is responsible for overseeing all technological developments. Her expertise in cutting-edge technologies ensures we stay ahead in the competitive tech landscape. Jane's background includes leading successful projects and implementing innovative solutions.",
  },
  {
    name: "Alice Johnson",
    designation: "Marketing Manager",
    image: "https://via.placeholder.com/150",
    bio: "Alice crafts our marketing strategies, from campaign planning to execution. Her creative approach and deep understanding of market trends help us reach new heights. With a background in digital marketing and brand management, Alice drives our promotional efforts.",
  },
];

function About() {
  return (
    <div className="About">
      {/* <Navbar /> */}
      {/* <Header /> */}
      <div className="about-content">
        <section className="about-section">
          <div className="about-container">
            <img
              src="https://via.placeholder.com/500"
              alt="About Us"
              className="about-image"
            />
            <div className="about-text">
              <h1>About Us</h1>
              <p>
                Welcome to our website! We are dedicated to providing you with
                the best products and services. Our mission is to ensure
                customer satisfaction through quality and reliability. We
                believe in constantly evolving and adapting to meet the changing
                needs of our clients. Our team is committed to delivering
                exceptional results through innovative solutions and
                unparalleled dedication.
              </p>
              <p>
                With a rich history of successful projects and a track record of
                exceeding expectations, we take pride in our ability to tackle
                challenges and deliver outstanding outcomes. Our values of
                integrity, excellence, and customer-centricity drive us forward,
                and we are excited to continue our journey of growth and
                success.
              </p>
            </div>
          </div>
        </section>
        <section className="team-section">
          <h2 className="team-heading">Meet Our Team</h2>
          <div className="team-container">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                />
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="designation">{member.designation}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
