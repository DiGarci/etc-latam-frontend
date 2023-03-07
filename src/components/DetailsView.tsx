import { dateConversor } from "@/utils/dateConversor";
import SectionWrapper from "./SectionWrapper";

interface IDetailsViewProps {
    data: any;
    headers?: any;
}

export default function DetailsView(props: IDetailsViewProps) {
    const headers = props.headers && props.data;

    return (
        <SectionWrapper background="white" size="auto" padding="medium">
            {Object.keys(headers).map((header: any, index) => (
                <div key={index} className="flex mb-2 text-lg">
                    <span className="font-semibold">
                        {props.headers[header]}:
                    </span>
                    <span className="ml-2 text-blue-600">
                        {props.data[header]}
                    </span>
                </div>
            ))}
        </SectionWrapper>
    );
}
