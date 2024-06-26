import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { BsGithub } from 'react-icons/bs';

export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    githubLink,
    isAdmin = false,
    id,
}) => {
    return (
        <>
            <a href={url} className="projectCard" target="black">
                <div>
                    <img src={projectImage} alt="Project" />
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant="h4"> About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant="h6">Tech Stack: {technologies}</Typography>
                    <Typography variant="h3" style={{ color: "rgba(40,40,40,0.7)" }}>
                        <BsGithub onClick={githubLink} />
                    </Typography>
                </div>
            </a>

            {isAdmin && (
                <Button
                    style={{ color: "rgba(40,40,40,0.7)" }}
                    onClick={() => deleteHandler(id)}
                >
                    <Delete />
                </Button>
            )}
        </>
    );
};

const Projects = () => {
    const projects = [
        {
            id: "1",
            url: "https://github.com/KaranSingh52ED/TulsiVerse",
            projectImage: "https://res.cloudinary.com/dh4adw5o7/image/upload/v1708970772/Portfolio%20Content/h3olgf6e9lrsgavpusra.png",
            projectTitle: "TulsiVerse",
            description: "Hellloooooo",
            technologies: "React, Node.js, Express, MongoDB, JWT, Material-UI",
            githubLink: "https://github.com/KaranSingh52ED/TulsiVerse"
        },
        {
            id: "2",
            url: "https://github.com/KaranSingh52ED/TulsiVerse",
            projectImage: "https://res.cloudinary.com/dh4adw5o7/image/upload/v1708970772/Portfolio%20Content/h3olgf6e9lrsgavpusra.png",
            projectTitle: "TulsiVerse",
            description: "Hellloooooo",
            technologies: "React, Node.js, Express, MongoDB, JWT, Material-UI",
            githubLink: "https://github.com/KaranSingh52ED/TulsiVerse"
        },
    ];
    return (
        <div className="projects">
            <Typography variant="h3">
                Projects <AiOutlineProject />
            </Typography>

            <div className="projectsWrapper">
                {projects.map((item, index) => (
                    <ProjectCard
                        id={item.id}
                        key={item.id}
                        url={item.url}
                        projectImage={item.projectImage}
                        projectTitle={item.projectTitle}
                        description={item.description}
                        technologies={item.technologies}
                        BsGithub={item.githubLink}
                    />
                ))}
            </div>

            <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
                All The Projects Shown Above Are Made By Me <FaRegSmileWink />
            </Typography>
        </div>
    );
};

export default Projects;