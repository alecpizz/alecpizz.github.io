import { GuestBook } from './GuestBook';
import { Counter } from './Counter';
import { CollapsableSection } from './CollapseSection';
const GOOGLE_ENTRY_ID_Name = "entry.2034266698";
const GOOGLE_ENTRY_EMAIL_NAME = "entry.201621194";
const GOOGLE_ENTRY_MESSAGE = "entry.532042263";
const GOOGLE_FORM_ID = "1y90FiBFw-RozbayQfsP4R7Zm7vD01Li6yzWKi8pMW4k";
const GOOGLE_FORM_NAME = "Form Responses 1";

export const Sidebar = () => {
    return (
        <aside className='sidebar-container'>
            <h2>about me</h2>
            <CollapsableSection title="software developer">
                <img src="alecpic.jpg" className="author-pic" width={150} height={150}></img>
                <p className='sidebar-description'>Alec Pizziferro - <b>He/Him</b></p>
                <p className='sidebar-description'>Hello! I'm Alec and I enjoy writing software. I specialize in VR game development and engineering, but also have experience in web development, low-level engine development, app development, and more. When I'm not writing software I enjoy fishkeeping and learning new things.I'm currently a senior in college and am about to complete my bachelor's of science in Computer Science with a minor in Game Design.</p>
                <a className='sidebar-description' href='https://drive.google.com/file/d/1eUTquXLtjQCdKk6rvIjH2mhdHGcGFH9g/view?usp=sharing'>Click <b>me</b> to view my resume!</a>
            </CollapsableSection>
            <h2>contact me</h2>
            <CollapsableSection title="socials">
                <nav>
                    <ul>
                        <li><a href="mailto:alecpizz@gmail.com">Email</a></li>
                        <li><a href='https://discord.com/users/140313471756664832'>Discord</a></li>
                        <li><a href='https://www.youtube.com/@alecpizz'>YouTube</a></li>
                        <li><a href='https://www.linkedin.com/in/alecpizz'>Linkedin</a></li>
                        <li><a href="https://github.com/alecpizz">GitHub</a></li>
                    </ul>
                </nav>
            </CollapsableSection>
            <h2>skills</h2>
            <CollapsableSection title="software i know">
                <nav>
                    <ul>
                        <li>Unity - 5 Years</li>
                        <li>C# - 5 Years</li>
                        <li>C++ - 2 Years</li>
                        <ul>
                            <li>OpenGL, Engine Dev - 1 year</li>
                        </ul>
                        <li>Java - 1 Year</li>
                        <li>Photoshop - 5 Years</li>
                        <li>Premiere - 2 Years</li>
                        <li>Blender - 3 Years</li>
                        <li>VEGAS - 4 Years</li>
                        <li>Git, Plastic SCM - 4 Years</li>
                        <li>Web Development - 1 Year</li>
                        <ul>
                            <li>MERN Stack - 1 Year</li>
                            <li>SQL, MongoDB - 5 Months</li>
                        </ul>
                        <li>Godot - 2 Months</li>
                        <li>Python - 1 Year</li>
                    </ul>
                </nav>
            </CollapsableSection>
            <h2>guest book</h2>
            <CollapsableSection title="enjoying your stay?" initiallyVisible={false}>
                <Counter></Counter>
                <form name="gform" id="gform" target='hidden_iframe' encType='text/plain' action="https://docs.google.com/forms/d/e/1FAIpQLSclkI8Sa5bCsc8iboK9NAQ4D3-NvJIneFMIyP2aPIQ_ypBwFw/formResponse?">
                    <label for={GOOGLE_ENTRY_ID_Name}>Name: </label>
                    <br></br>
                    <input className="sign-entry-field" type="text" name={GOOGLE_ENTRY_ID_Name} id={GOOGLE_ENTRY_ID_Name} placeholder="John Doe." required></input>
                    <br></br>
                    <label for={GOOGLE_ENTRY_EMAIL_NAME}>Email: </label>
                    <br></br>
                    <input className="sign-entry-field" type="text" name={GOOGLE_ENTRY_EMAIL_NAME} id={GOOGLE_ENTRY_EMAIL_NAME} placeholder='johndoe@email.com' required></input>
                    <label for={GOOGLE_ENTRY_MESSAGE}>Message:</label>
                    <br></br>
                    <textarea className="sign-entry-box" name={GOOGLE_ENTRY_MESSAGE} id={GOOGLE_ENTRY_MESSAGE} placeholder='hello world!' required></textarea>
                    <br></br>
                    <input className='sign-button' type="submit" value="Sign"></input>
                </form>
                <h2>previous alec explorers</h2>
                <div className='guestbook-container'>
                    <GuestBook key={GOOGLE_FORM_ID} Google_Form_ID={GOOGLE_FORM_ID} Google_Form_Name={GOOGLE_FORM_NAME}></GuestBook>
                </div>
            </CollapsableSection>
        </aside>
    )
}