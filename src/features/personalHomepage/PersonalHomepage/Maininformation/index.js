import dmytroArtiukProfile from "./profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper, } from "./styled";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={dmytroArtiukProfile} alt="Dmytro Artiuk" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Dmytro Artiuk</Name>
            <Summary>
                👨‍🎓💻I'm a passionate Frontend Developer in love with React,I'm continuously honing my skills to stay updated with the latest trends and technologies. Currently, I'm actively seeking new opportunities where I can apply my expertise in building responsive, user-friendly applications while collaborating with a&nbsp;forward-thinking team.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);