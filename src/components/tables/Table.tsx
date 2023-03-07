import Link from "next/link";
import { useRouter } from "next/router";
import ItemActions from "../ItemActions";

interface ITableProps {
    data: any;
    children?: any;
    headers: Array<{}>;
    actions?: any;
    slug?: string;
}

export default function Table(props: ITableProps) {
    const { pathname } = useRouter();
    const resource = pathname.split("/")[1];

    return (
        <div className="w-full p-5 overflow-x-auto bg-white rounded-md">
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        {props.headers.map((column: any, index) => (
                            <th
                                key={index}
                                className="p-2 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"
                            >
                                {column[Object.keys(column)[0]]}
                            </th>
                        ))}
                        {props.actions && (
                            <th className="p-2 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                                Acciones
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row: any) => (
                        <tr
                            key={row.id}
                            className="border-b border-gray-200 hover:bg-black/5"
                        >
                            {props.headers.map((column: any, index) => (
                                <td
                                    key={index}
                                    className="p-2 text-sm leading-5 text-gray-900 border-b border-gray-200 text-ellipsis"
                                >
                                    <Link
                                        key={row.id}
                                        href={`/${resource}/${
                                            row[props.slug || "id"]
                                        }`}
                                    >
                                        {row[Object.keys(column)[0]]}
                                    </Link>
                                </td>
                            ))}
                            {props.actions && (
                                <td className="text-sm leading-5 text-gray-900 whitespace-no-wrap border-b border-gray-200 placeholder:y-2">
                                    <ItemActions
                                        item={row}
                                        size="small"
                                        // actions={props.actions}
                                    />
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
