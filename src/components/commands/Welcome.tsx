import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
    __                      _    __
   / /   ____ _____ ___    | |  / /_  __
  / /   / __ \`/ __ \`__ \\   | | / / / / /
 / /___/ /_/ / / / / / /   | |/ / /_/ /
/_____/\\__,_/_/ /_/ /_/    |___/\\__,_/
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    __
   / /   ____ _____ ___
  / /   / __ \`/ __ \`__ \\
 / /___/ /_/ / / / / / /
/_____/\\__,_/_/ /_/ /_/
 _    __
| |  / /_  __
| | / / / / /
| |/ / /_/ /
|___/\\__,_/
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.2.2)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/LamVu22/my_terminal_portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
aaaaaaaaaooaooaCqO)i>1dooooooooaaaaaaaaa
aaaaaaaaaoaabht,^^\`^:;:IIqooooooaaaaaaaa
aaaaaaaaaaoaj"\`^\`\`\`\`\`",::;lboooaooaaaaaa
aaaaaaaaaoam,^^\`^^I,,^\`^,\`^:Uaoaaoaaaaaa
aaaaaaaaaaa,"^^;</YYcn?:",;:!haaaaaaaaaa
aaaahahhah(;,I1rYLQO00Lz(;:,"maaaaaaaaaa
aahhhhhhhh_I;/uzU0ZmZ0LUzi+I,vhhhhaaaaaa
aahhhhhhhhkI\\unJ0mpqppwOCYX_Idhhhhhhhaaa
hahhhhhhkhk;vnYCLCQmmQCLLLUYIkhhkhhhhhaa
hhhhhkhkkkb+YXrXcUJO00zucuQL{bkkhhhhhhha
hhhhhkkkkbbtY0wqwQUO00mqqqmQzbbkkhhhhhhh
hhhhkkkkbbdUXOpdqUYwOJZpdpmLddbbkkkhhhhh
hhkhkkkbbddpcQmqwLzQQJZpdwOCppddbkkkhhhh
hkkkkkbbdppqwU0OLLCzXZmwqm0mwqpddbkkkhhh
kkkkkbbdppqwmZYQQUcCJnQmZQZZmmwppdbkkkkh
kkkkbbddpqwmO,xjULOwwZOQvY'^IZmwpddbkkkk
kkbbbddpqwmOl"cUYuYJXXXYCX]'"~Zmqpddbbkk
bbbbddpq<^^"",,JQ0Q000QLLz(",",lwqpdddbb
bbddC:",^",""",1Y0O00Q0LUc1","""",,:dddb
dd,"""^"^",,"^^"^\\nXCLLUUj^,""",""""",;d
,,"""^^"^",,""^^^\`"fYUCn""",""""""""""",
",""""",^"^"""""""^^^t"",""""""""""""",,
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
