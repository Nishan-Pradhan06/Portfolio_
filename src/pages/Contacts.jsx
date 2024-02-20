import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contacts = () => {
    const form = useRef();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [notify, setNotify] = useState(false);
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        setNotify(false);
        setNotify(true);
        setMessage("Sending...");

        emailjs
            .sendForm("service_z299hb8", "template_45510pi", form.current, {
                publicKey: "ql6kUL0sBgscvgHmP",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    form.current.reset();
                    setNotify(false);
                    setNotify(true);
                    setMessage("Sent");

                    setTimeout(() => {
                        setNotify(false);
                        setMessage("");
                    }, 2000);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setMessage("Sending Failed");
                    setTimeout(() => {
                        setNotify(false);
                        setMessage("");
                    }, 2000);
                }
            )
            .finally(() => {
                setIsButtonDisabled(false);
            });
    };

    return (
        <>
            <section className="contact" id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <div className="title"><span>Contact Me</span></div>
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div>
                            <div className="text--two">Morang</div>
                            <div className="text--two">Belbari-11-Laxmimarga</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>

                            <div className="text--two">+977 9817326306</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>

                            <div className="text--two">nishanpradhan500@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Message Me!</div>
                        <p>For further details, you can contact me from here by direct mailing me or you can personally message me on Instagram.</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-box">
                                <input type="text" name="from_name" placeholder="Enter your name" required />
                            </div>
                            <div className="input-box">
                                <input type="text" name="from_email" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box message-box">
                                <textarea name="message" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" disabled={isButtonDisabled} value="Send Now">
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                fill="currentColor"
                                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Send</span>
                            </button>

                        </form>
                        {notify && (
                            <div class="custom-container">
                                <p class="custom-text">{message}</p>
                            </div>

                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;
