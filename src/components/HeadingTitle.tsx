export default function HeadingTitle({ title }: { title: string }) {
    return (
        <div className="my-5">
            <h1 className="text-3xl font-[600] text-gray-900">{title}</h1>
            <div className="w-10 mt-1 h-1 bg-[#E0622C]"></div>
        </div>
    );
}
