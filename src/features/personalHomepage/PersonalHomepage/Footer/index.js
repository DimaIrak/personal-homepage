import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailWrapper>
            <Paragraph>
            I'm always excited to&nbsp;take on new projects whenever I&nbsp;have the time. If you're planning a&nbsp;website, dashboard, or mobile app, don't hesitate to reach out to&nbsp;me! ✌️
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
)