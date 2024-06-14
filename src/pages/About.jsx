import HeroImage from "/HeroImage.jpg";

const About = () => {
    return (
        <section id="about">
            <div className="content">
                <h2 className="section__text__p1">Get To Know More</h2>
                <div className="title"><span>About Me</span></div>
                <div className="about-details">
                    <div className="left">
                        <img src={HeroImage} alt="my profile" />
                    </div>
                    <div className="right">
                        <div className="topic">Developing Is My Passion</div>
                        <p>Hi! I am Nishan Pradhan from Morang, Nepal. I have recently completed my plus 2 education and am currently studying for my Bachelor's degree in Computer Application (BCA). Alongside my studies, I have been learning about Flutter cross-platform application development. I am passionate about technology and have been working on a project related to app development using Flutter. I am excited to continue learning and growing in this field and hope to make a positive impact in the world of technology.</p>
                        <div className="button">
                            <a href="#"><button>Download CV</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
