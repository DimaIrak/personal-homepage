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
                lorem ipsum ,hgkjfklhglkhb ,kkhhglklkugb ,kbkjjblkjbkjb  jhgvjjhhbg ,jhhvkjhhvjkh jhv.
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
)