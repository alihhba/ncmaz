import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Steps from '../common/steps';


const ServerSteps = ({steps = []}) => {
    return (
        <Placeholder.Card
            bodyProps={{className: "px-8 py-6"}}
        >
            <Steps
                items={steps}
            />
        </Placeholder.Card>
    )
}

export default ServerSteps;
