import { CollapsableSection } from "./CollapseSection"
export const Portfolio = () => {
    return (
        <CollapsableSection title="portfolio">
            <div className='portfolio-container'>
                <br></br>
                <section>
                    <h4>NervBox</h4>
                    <img src="keyart3.webp" width={"100%"} height={"100%"}></img>
                    <p>A full-physics VR simulation that lets you explore worlds and create experiences with your friends. Has many advanced never-before-seen methods of syncing fully physics-based characters, with very little limits to fidelity. Runs on Meta Quest and PCVR.</p>
                    <p>Within this project I worked on various aspects, from networking and physical interaction to NPC AI and gameplay logic. Guns, swords, and other players all put together results in a super complex project that I've spent the better part of 2 years on. Currently I am working on next-gen mod support.</p>
                    <p>I also made the cover art!</p>
                    <a href="https://nervbox.com">Click me for more information!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Fish Networking</li>
                            <li>Epic Online Services</li>
                            <li>PhysX</li>
                            <li>OpenXR</li>
                        </ul>
                    </nav>
                    <br></br>
                </section>

                <section>
                    <h4>In Harmony</h4>
                    <img src="inHarmony_logo.png" width={"75%"} height={"75%"}></img>
                    <p>A narrative-driven puzzle game built with a team of 30 people over the span of two semesters. Features 50 levels and various intertwined mechanics.</p>
                    <p>Within this project I worked on a little bit of everything, from building core infrastructure such as the grid system and turn-based system, to small polish features. I also made a large amount of tools to speed up level creation and building.</p>
                    <p>I also managed the Git repo for the project, ensuring that everyones work was properly getting integrated. The repo did not break a single time, even with in-experienced members!</p>
                    <a href="https://crowded-kitchen.itch.io/in-harmony">Click me for the itch page!</a>
                    <br></br>
                    <a href="https://github.com/alecpizz/CKCapstone/">Click me for the Git repo!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>GitHub</li>
                            <li>Unity Universal Render Pipeline</li>
                        </ul>
                    </nav>
                    <br></br>
                </section>

                <section>
                    <h4>MAGE Engine</h4>
                    <img src="MAGE.png" width={"100%"} height={"100%"}></img>
                    <p>A small game engine written in C++ over the span of one semester. Used to learn about engine architecture. The engine features a custom ECS, with 2D rendering capabilities. A small game was built with it.</p>
                    <a href="https://github.com/alecpizz/CIS456">Click me to visit the repo!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>C++</li>
                            <li>OpenGL</li>
                            <li>GLSL</li>
                            <li>SDL</li>
                        </ul>
                    </nav>
                    <br></br>
                </section>

                <section>
                    <h4>Cologne 2.0</h4>
                    <img src="cologne2.png" width={"100%"} height={"100%"}></img>
                    <p>A work-in-progress game without an engine. Features a voxel cone traced global illumination, real-time shadows and physics. This project serves as a place for me to study advanced graphics techniques and scale.</p>
                    <a href="https://www.youtube.com/watch?v=z94KUKSkaD8">Click me to see it in action!</a>
                    <br></br>
                    <a href="https://github.com/alecpizz/cologne2">Click me to visit the codebase!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>C++</li>
                            <li>OpenGL</li>
                            <li>Jolt</li>
                            <li>SDL3</li>
                            <li>ASSIMP</li>
                            <li>Dear ImGui</li>
                        </ul>
                    </nav>
                    <br></br>
                </section>

                <section>
                    <h4>Aickdreailes</h4>
                    <img src="aickdriles.png" width={"100%"} height={"100%"}></img>
                    <p>A toy game-engine written in C# using the Raylib library. The project took place over the span of about a month. The engine features quake-style player movement, PBR lighting, runtime field generation and physics integration. A basic entity-system was also made.</p>
                    <a href="https://www.youtube.com/watch?v=c1dVjSWAoc8">See a video!</a>
                    <br></br>
                    <a href="https://github.com/alecpizz/Aickdreailes">Click me to visit the codebase!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>C#</li>
                            <li>OpenGL</li>
                            <li>Raylib</li>
                            <li>JitterPhysics2</li>
                            <li>Dear ImGui</li>
                        </ul>
                    </nav>
                    <br></br>
                </section>

                
                <section>
                    <h4>Local Robots</h4>
                    <img src="spot.png" width={"100%"} height={"100%"}></img>
                    <p>A maze solving robot implementation in Webots. Features inverse-kinematic driven locomotion, a-star path finding, and PROTO driven maze generation. The locomotion is softened using a series of PID controllers. The maze solutions were then handed off to a physical representation of the robot. The virtual robot will be used to teach future classes.</p>
                    <br></br>
                    <a href="https://github.com/LocalRobots/SpotImplementation">Click me to visit the Github repo!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>Webots</li>
                            <li>C++</li>
                        </ul>
                    </nav>
                    <br></br>
                </section>

                <section>
                    <h4>placeboentertainment.com</h4>
                    <img src="placebosite.webp" width={"100%"} height={"100%"}></img>
                    <p>A website made for a project I worked on with some friends from college. After being designed by our UI/UX designer, I worked to implement it in React. It is fully responsive and is hosted on GitHub pages. To ease in creating new content for it, it relies on several JSON driven "databases". Alongside getting the site running, I also deployed the project management server for the team, running on a VPS.</p>
                    <a href="https://placeboentertainment.com">Click me to visit!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>React</li>
                            <li>GitHub Pages</li>
                        </ul>
                    </nav>
                    <br></br>
                </section>

                <section>
                    <h4>CAT 3D Printing Marketplace</h4>
                    <p>A website I worked on for my software engineering class. I worked with 3 other people and 12 other teams to build a MVP of a marketplace designed to sell 3D printed structures. Throughout the project, multiple reports were made to Caterpillar, ensuring proper communication between our teams and the teams at Georgia Tech.</p>
                    <p>Within this project I focused on backend development and setting up various integration points, specifically using MongoDB and Express.JS. I also did some frontend work in React. I also did a lot of Git management since a lot of the teams were unfamiliar with version control.</p>
                    <a href="https://github.com/skhairunnesa/CAT3DPrintingMarketplace">Click me to visit the GitHub repo!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>MERN Stack - MongoDB, Express.JS, React, Node.JS</li>
                            <li>Github</li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h4>Ferryman Fishing</h4>
                    <img src="ferrymanfishinglogo.png" width={300} height={300}></img>
                    <img src="fishingmechanic.webp" width={300} height={300}></img>
                    <p>A fishing game built over one semester that involves a real fishing rod! In this project I worked on designing the circuit for the fishing rod using an Arduino. I also worked on creating a threaded interface to allow the Arduino to communicate with the game's Unity project as fast as possible. I also worked with the team's engineers to help design a tension release system. This project was a lot of learning new things quickly and has spiked my interests in working with hardware.</p>
                    <a href="https://bradleyinteractive.com/2024/exhibits/ferryman-fishing/">Click me to visit the FUSE page for Ferryman Fishing!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Arduino Uno and it's programming language</li>
                            <li>Breadboards and circuit design</li>
                            <li>Unity</li>
                        </ul>
                    </nav>
                </section>

              

                {/* <section>
                    <h4>Placebo Entertainment Game</h4>
                    <img src="background.jpg" width={200} height={200}></img>
                    <p>description</p>
                </section> */}

                <section>
                    <h4>Dynamic Artificial Daylight</h4>
                    <img src="window.jpg" width={300} height={450}></img>
                    <p>A window built for windowless basements designed to mimic circadian rhythm. The window was built from a dead flat screen TV, specifically the acrylic diffuser and the fresnel layer. Behind it is an array of LEDs connected to a Raspberry Pi. These LEDs are controlled by a custom Python program that calculates the various positions of the sun throughout the day and blends the LED color values accordingly.</p>
                    <p>Combined with a sheer curtain and some window trim, the window ends up being pretty convincing and provides a soft, comfortable source of light for the room. If I were to re-visit this project, I would explore a brighter LED solution.</p>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Raspberry Pi</li>
                            <li>LED strips</li>
                            <li>Breadboards and circuit design</li>
                            <li>Python</li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h4>Cologne Engine</h4>
                    <img src="cologne.png" width={"100%"} height={"100%"}></img>
                    <video controls width={"100%"} height={"100%"}>
                        <source src="colognephys.mp4" type="video/mp4"></source>
                    </video>
                    <p>A toy game engine written in C++ and OpenGL to learn graphics programming. Currently contains deferred lighting, physics powered by Jolt, and a basic entity system.</p>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>C++</li>
                            <li>OpenGL</li>
                            <li>GLM</li>
                            <li>Jolt</li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h4>Rapid Prototyping Projects</h4>
                    <img src="gunadders.png" width={"50%"} height={"50%"}></img>
                    <img src="fishsplatters.PNG" width={"50%"} height={"50%"}></img>
                    <img src="sizematters.png" width={"50%"} height={"50%"}></img>
                    <img src="gnomeladders.png" width={"50%"} height={"50%"}></img>
                    <p>Throughout the span of a semester I worked with around 15 other people on four prototypes: Gun Adders, Gnome Ladders, Size Matters, and Fish Splatters. Each prototype was made in around 3 weeks. For Gun Adders I primarily worked on player movement and bullet physics. On Gnome Ladders I worked on some math elements and UI efforts whilst learning the Godot engine. In Size Matters I developed the main mechanic of growing and shrinking objects. Lastly on Fish Splatters I implemented the water physics.</p>
                    <a href="https://the-bees-sneeze.itch.io/size-matters">Click me to play Size Matters!</a>
                    <br></br>
                    <a href="https://the-bees-sneeze.itch.io/fish-splatters">Click me to play Fish Splatters!</a>
                    <br></br>
                    <a href="https://xsupernova.itch.io/gun-adders">Click me to play Gun Adders!</a>
                    <br></br>
                    <a>Gnome Ladders page coming soon!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Unity</li>
                            <li>Godot</li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h4>Immersion Sector</h4>
                    <img src="IMSEC_mp.gif" width="100%" height="100%"></img>
                    <img src="IMSEC_Force.gif" width="100%" height="100%"></img>
                    <img src="IMSEC_guns.gif" width="100%" height="100%"></img>
                    <p> A cancelled physics based multiplayer game where I created several new types of multiplayer VR interactions. Various body physics and IK work was also done to create an accurate representation of a human body in VR. Specialized Netcode was written in order to solve the shared object interaction problem that comes with multiplayer VR. I also worked on various physical interactions such as guns and hand-object interaction.</p>
                    <a href="https://www.youtube.com/watch?v=pYd5beRe7Bo">Click me to watch a tech showcase!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Unity</li>
                            <li>Photon</li>
                            <li>SteamVR</li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h4>Kill the King</h4>
                    <img src="falling.jpg" width={"100%"} height={"100%"}></img>
                    <img src="sneaking.jpg" width={"100%"} height={"100%"}></img>
                    <p>A cancelled physics-based multiplayer co-op assasination game. Part of my work at Quantum Lion Labs. Created various content for building levels. Also designed several interactable props such as guns and bows. Some of the tech being built for this project ended up going into NervBox.</p>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Unity</li>
                            <li>Netcode for GameObjects</li>
                            <li>SteamVR</li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h4>Project Merv</h4>
                    <img src="mervposter.png" width={"100%"} height={"100%"}></img>
                    <p>My first dive into the Unity Game Engine, where I learned how to work with its physics engine. Featuring basic networking, a physics driven VR character controller, and physical interaction. The project ended due to me working on Immersion Sector and having too ambitious of a scope for a single developer.</p>
                    <a href="https://www.youtube.com/watch?v=TESFZ4lmOag">Click me to watch a gameplay video!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Unity</li>
                            <li>Normcore</li>
                            <li>SteamVR</li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h4>MEAR</h4>
                    <img src="mear.jpg" width={"80%"} height={"80%"}></img>
                    <p>A game made in 72 hours for Amber Waves of Games. Players must navigate horrid creatures using their voice as power for a flashlight. Created powerups and shout mechanic.</p>
                    <a href="https://maranara.itch.io/mear">Click me to visit the Itch.io page!</a>
                    <p>Tools used:</p>
                    <nav>
                        <ul>
                            <li>Unity</li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h4>Backroads</h4>
                    <img src="backroads.png" width={"100%"} height={"100%"}></img>
                    <p>Backroads is an experimental first person driving psychological thriller, where players must navigate desert back roads while transporting a deadly virus. This game was ambitious for the course for it being the sole 3D game of its type as well as being more narritive focused compared to strictly gameplay progression. Various artwork was done to try and mimic what driving on empty roads was like. Tools were authored for other members to easily add events, with inheritance being used to make creating code-driven events easier. Path finding was used for certain events to ensure that everything was framed properly, further supporting the narrative. All UIs and 3D models were built to scale on a variety of displays, while still having good feedback to the player regarding what was currently happening. </p>
                    <a href="https://rachel-rudyy.itch.io/backroads">Click me to visit the Itch.io page!</a>
                </section>
            </div>
        </CollapsableSection>
    )
}