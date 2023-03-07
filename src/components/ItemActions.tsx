import {
    IconDownload,
    IconEdit,
    IconPrinter,
    IconShare,
    IconTrash,
} from "@tabler/icons-react";
import Router from "next/router";
import Button from "./Button";

interface IItemActionsProps {
    item: any;
    actions?: any;
    size?: "small" | "medium" | "large";
}

interface IMode {
    cancel: "cancel";
    danger: "danger";
    normal: "normal";
    success: "success";
    warning: "warning";
}

interface ITableAction {
    icon: any;
    handler: (row: any) => any;
    mode: keyof IMode;
}

interface IDefaultActions {
    delete: ITableAction;
    edit: ITableAction;
    print: ITableAction;
    download: ITableAction;
    share: ITableAction;
}

const defaultActions = (item: any): IDefaultActions => {
    return {
        delete: {
            icon: IconTrash,
            handler: (item: any) =>
                Router.push(
                    `/${Router.pathname.split("/")[1]}/${item.id}/delete`
                ),
            mode: "danger",
        },
        edit: {
            icon: IconEdit,
            handler: (item: any) =>
                Router.push(
                    `/${Router.pathname.split("/")[1]}/edit/${item.id}`
                ),
            mode: "cancel",
        },
        print: {
            icon: IconPrinter,
            handler: (row: any) => console.log("print", row),
            mode: "cancel",
        },
        download: {
            icon: IconDownload,
            handler: (row: any) => console.log("download", row),
            mode: "cancel",
        },
        share: {
            icon: IconShare,
            handler: (row: any) => console.log("share", row),
            mode: "cancel",
        },
    };
};

export default function ItemActions(props: IItemActionsProps) {
    const actions = Object.assign(defaultActions(props.item), props.actions);

    return (
        <div className="flex gap-2">
            {Object.keys(actions).map((action: any, index) => (
                <Button
                    mode={actions[action].mode}
                    key={index}
                    type="button"
                    onClick={() => actions[action].handler(props.item)}
                    padding={props.size}
                    icon={actions[action].icon}
                />
            ))}
        </div>
    );
}
