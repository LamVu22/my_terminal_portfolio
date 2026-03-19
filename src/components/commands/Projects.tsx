import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Triad",
    desc: "Uncompromising trimodal remote computer accessibility.",
    tech: "Python + Pillow, OpenCV, lightweight GTK/Cairo, pynput",
    url: "https://devpost.com/software/the-four",
  },
  {
    id: 2,
    title: "FalconGraph",
    desc: "AI-powered search tool for finding BGSU information across multiple data sources.",
    url: "https://github.com/LamVu22/BGSUHackathon",
  },
  {
    id: 3,
    title: "EcoCT",
    desc: "Conversational environmental platform that manages your environmental safety with AI and graphs.",
    url: "https://devpost.com/software/ecoct/",
  },
  {
    id: 4,
    title: "CryptoSense",
    desc: "A multi-agent LLM system that parses natural-language crypto queries and routes tasks across specialized agents.",
    url: "https://github.com/LamVu22/CryptoSense",
  },
  {
    id: 5,
    title: "DreamScape",
    desc: "A mobile app that helps you learn passively while you rest via gentle audio cues.",
    url: "https://devpost.com/software/dreamscape-z7ds83",
  },
  {
    id: 6,
    title: "TinyTerms.ai",
    desc: "A website that explains complex tech terms in simple language like you're five.",
    url: "https://tinytermsai.netlify.app"
  }
];

export default Projects;
