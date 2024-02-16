import projectOne from '/projectOne.png'
import projectTwo from '/projectTwo.png'
import projectThree from '/projectThree.png'
const Projects = () => {
    return (
        <>
            <section class="projects" id="projects">
                <div class="content">
                    <p class="section__text__p1">Browse My Recent</p>
                    <div class="title"><span>Projects</span></div>
                    <div class="experience-details-container">
                        <div class="about-containers">
                            <div class="details-container color-container">
                                <div class="article-container">
                                    <img src={projectOne}
                                        alt="Project 1" class="project-img" />
                                </div>
                                <h2
                                    class="experience-sub-title project-title">Flutter
                                    Web Portfolio</h2>
                                <div class="btn-container">
                                    <a
                                        href="https://github.com/Nishan-Pradhan06/flutter-web-portfolio"
                                        target="_blank"
                                        class="btn btn-color-2 project-btn">Github</a>
                                    <a href="https://nishanpradhan.vercel.app/#/"
                                        target="_blank"
                                        class="btn btn-color-2 project-btn">Live
                                        Demo</a>
                                </div>
                            </div>
                            <div class="details-container color-container">
                                <div class="article-container">
                                    <img src={projectTwo}
                                        alt="Project 2" class="project-img" />
                                </div>
                                <h2
                                    class="experience-sub-title project-title">Flutter
                                    E-Notes App</h2>
                                <div class="btn-container">
                                    <a
                                        href="https://github.com/Nishan-Pradhan06/Flutter_E-Note-App.git"
                                        target="_blank"
                                        class="btn btn-color-2 project-btn">Github</a>
                                    <a
                                        href="https://appetize.io/app/tgnvwn2pj2iqg4jxpvnr4zdh4i?device=pixel7pro&osVersion=13.0"
                                        target="_blank"
                                        class="btn btn-color-2 project-btn">Live
                                        Demo</a>
                                </div>
                            </div>
                            <div class="details-container color-container">
                                <div class="article-container">
                                    <img src={projectThree}
                                        alt="Project 2" class="project-img" />
                                </div>
                                <h2
                                    class="experience-sub-title project-title">Random
                                    Quotes Generator</h2>
                                <div class="btn-container">
                                    <a
                                        href="https://github.com/Nishan-Pradhan06/RandomQuotes-Generator"
                                        target="_blank"
                                        class="btn btn-color-2 project-btn">Github</a>
                                    <a
                                        href="https://appetize.io/app/pp7e5w577sruqp6r3ud4l6yo4u?device=pixel7pro&osVersion=14.0"
                                        target="_blank"
                                        class="btn btn-color-2 project-btn">Live
                                        Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Projects;