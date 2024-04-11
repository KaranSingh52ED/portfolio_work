import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
    return (
        <div className="about">
            <div className="aboutContainer">
                <Typography>
                    <ul>
                        <li>Masters of both the bytes and the pixels, crafting the digital world with finesse and code.</li>
                    </ul>
                </Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src="https://media.licdn.com/dms/image/D5603AQHh_a4GhnmsXQ/profile-displayphoto-shrink_200_200/0/1708191656093?e=2147483647&v=beta&t=XCn_ucDFQ-ulu-l6BtF3jKw6cIukVhB3Ue-yxbD99Ys" alt="Karan" className="aboutAvatar" />

                    <Typography
                        variant="h4"
                        style={{ margin: "1vmax 0", color: "black" }}
                    >
                        Karan Singh  {/* {about.name} */}
                    </Typography>

                    <Typography>FullStack Developer & Programmer</Typography>

                    <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
                        I am a Full-Stack Developer and Programmer with a passion for learning and teaching. I love to code and help others learn to code. I am a self-taught developer and believe that anyone can learn to code if they have the right resources. I am always looking to learn new things and improve my skills.
                    </Typography>
                </div>

                <div>
                    <Typography
                        style={{
                            wordSpacing: "5px",
                            lineHeight: "50px",
                            letterSpacing: "3px",
                            textAlign: "right",
                        }}
                    >
                        I am a 2nd year student enrolled at the prestigious <b>Indian Institute of Technology Madras</b> , pursuing a dual degree program in Bachelor of Technology (B-Tech) and Master of Technology (M-Tech) with a specialization in the <b>Engineering Design</b>  branch.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default About;