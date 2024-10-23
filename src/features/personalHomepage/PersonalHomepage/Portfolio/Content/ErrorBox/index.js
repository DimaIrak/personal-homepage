import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraf, Wrapper } from "./styled";
import { ReactComponent as WarningIcon } from "./danger.svg";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraf>
            Sorry, failed to load Github&nbsp;projects.<br />
            You can chek them directly&nbsp;on&nbsp;Github.
        </Paragraf>
        <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">Go to Github</ButtonLink>
    </Wrapper>
);