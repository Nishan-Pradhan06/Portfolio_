const Contacts = () => {
    return (
        <>
            <section class="contact" id="contact">
                <p class="section__text__p1">Get in Touch</p>
                <div class="title"><span>Contact Me</span></div>
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="topic">Address</div>
                            <div class="text--two">Morang</div>
                            <div class="text--two">Belbari-11-Laxmimarga</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">Phone</div>
                          
                            <div class="text--two">+977 9817326306</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                      
                            <div class="text--two">nishanpradhan500@gmail.com</div>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="topic-text">Message Me!</div>
                        <p>For the further details you can contact me from here by direct malling me or you can personally message me in instagram. </p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" required/>
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email" required/>
                            </div>
                            <div class="input-box message-box">
                                <textarea placeholder="Enter your message"></textarea>
                            </div>
                            <div class="button">
                                <input type="submit" value="Send Now"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacts;