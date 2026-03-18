import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Lam Vu</HighlightSpan>!
      </p>
      <p>
        I'm a Computer Science student, <HighlightAlt>AI/Software and Data Engineer</HighlightAlt> based in Bowling Green, OH.
      </p>
      <p>
        I am passionate about writing software products, data pipelines and <br />
        agentic AI systems to help businesses save costs and solve real-life challenges. If it ships, include some kinds of automation or agentic AI, then hell yeah I'm interested! 🤓
      </p>
      <p>
        Outside of class and VSCode, I enjoy watching cartoons(I know I'm not a kid anymore 🥹), cooking and reading.
      </p>
    </AboutWrapper>
  );
};

export default About;
