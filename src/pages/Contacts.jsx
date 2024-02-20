
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
                        <form ref={form}
                            onSubmit={sendEmail}>
                            <div class="input-box">
                                <input type="text" name="from_name" placeholder="Enter your name" required />
                            </div>
                            <div class="input-box">
                                <input type="text" name="from_email" placeholder="Enter your email" required />
                            </div>
                            <div class="input-box message-box">
                                <textarea name="message" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" disabled={isButtonDisabled} value="Send Now">
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
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
                            <div
                                className="w-3/5 md:w-[400px] bg-blue-500 text-white fixed mx-auto  bottom-16 h-10 rounded flex items-center justify-center animate-fade-down animate-once animate-duration-1000 animate-delay-400 animate-ease-in-out"
                            >
                                <p style=" fontstyle:font-semibold " className="">{message}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacts;