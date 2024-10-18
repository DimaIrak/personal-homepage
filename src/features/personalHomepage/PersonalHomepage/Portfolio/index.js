import { useEffect } from "react";
import { styledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../PersonalHomepage";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <styledGithubIcon />
                <MyRecentProjects>My recent projects</MyRecentProjects>
            </Header>
        </Section>
    );
};