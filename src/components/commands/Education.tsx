import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.S of Science in Computer Science, Specialized in Computational Data Science",
    desc: "Bowling Green State University | 2022 - 2026",
  },
  {
    title: "Newton Grammar HighSchool",
    desc: "Hanoi, Vietnam | 2019 - 2022",
  },
  {
    title: "IELTS 7.5, SAT 1400",
    desc: "British Council Vietnam | 2022",
  },
];

export default Education;
