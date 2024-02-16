import HeroImage from "/HeroImage.jpg";
const About = () => {
    return (
        <>
            <section class="about" id="about">
                <div class="content">
                    <p class="section__text__p1">Get To Know More</p>
                    <div class="title"><span>About Me</span></div>
                    <div class="about-details">
                        <div class="left">
                            {/* <img src="img/Profile.jpg" alt="images"> */}
                            <img src={HeroImage} alt="my profile"/>
                        </div>
                        <div class="right">
                            <div class="topic">Deveploping Is My Passion</div>
                            <p>Hi! I am Nishan Pradhan from Morang, Nepal. I haverecently completed my plus 2 education and am currently studying for my Bachelor's degree in Computer Application (BCA). Alongside my studies, I have been learning about Flutter cross-platform application development. I am passionate about technology and have been working on a project related to app development using flutter. I am excited to continue learning and growing in this field and hope to make a positive impact in the world of technology.</p>
                            <div class="button">
                                <a href><button>Download CV</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;