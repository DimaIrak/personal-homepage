import { Container, Icon } from "./styled";
import { MainInformation } from "./Maininformation";
import { skills, nextSkills } from "./skillsData";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import toolsIcon from "./toolsIcon.png";
import rocketIcon from "./rocketIcon.png";
import { Skills } from "./Skills";
import { Footer} from "./Footer";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />

        <main>
            <Skills
                title={(
                    <>
                        My skillset includes <Icon src={toolsIcon} alt="" />
                    </>
                )}
                skills={skills}
            />

            <Skills
                title={(
                    <>
                        What I want to learn next <Icon src={rocketIcon} alt="" />
                    </>
                )}
                skills={nextSkills}
            />
        </main>
        <Footer />
    </Container>
);