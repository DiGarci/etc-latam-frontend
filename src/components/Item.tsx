export default function Item(props: any) {
    return (
        <div className="item">
            <div className="item__title">{props.title}</div>
            <div className="item__description">{props.description}</div>
        </div>
    );
}
