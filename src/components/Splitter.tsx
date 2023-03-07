export default function Splitter(props: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between w-full">
            {props.children}
        </div>
    );
}
