interface ISubtitleProps {
    title: string;
}

export default function Subtitle(props: ISubtitleProps) {
    return (
        <div className="pb-5">
            <h2 className="mb-2 text-xl font-medium">{props.title}</h2>
            <hr />
        </div>
    );
}
