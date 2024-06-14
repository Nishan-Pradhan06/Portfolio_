const Home = () => {
    return (
        <>
            <main>
                <section className="home" id="home">
                    <div className="home-content">
                        <header className="text">
                            <h1 className="text-one">Hello,</h1>
                            <h2 className="text-two">I'm Nishan Pradhan</h2>
                            <ul className="text-three">
                                <li><span>Flutter Developer</span></li>
                                <li><span>Student</span></li>
                            </ul>
                            <p className="text-four">From Nepal</p>
                        </header>
                        <div className="button">
                            <a href="#contact"><button>Hire Me</button></a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home;