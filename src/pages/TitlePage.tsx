import TitleSlide from "../component/slides/TitleSlide";
import StepHandler from "../component/control/StepHandler";

function TitlePage() {
    const {step} = StepHandler({maxSteps: 1});
    return(
        <TitleSlide title="MAS in der Logistik" />
    )
}

export default TitlePage;