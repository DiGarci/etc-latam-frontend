interface ILabelProps {
    title: string;
}

export default function Label(props: ILabelProps) {
    return (
        <span className="px-2 py-1 text-xs font-medium leading-4 text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none">
            {props.title}
        </span>
    );
}
