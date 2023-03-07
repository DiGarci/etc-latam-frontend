export default function Notifications() {
    const { notifications } = useNotifications();
    return (
        <ul>
            {notifications.map((notification) => (
                <li key={notification.id}>{notification.message}</li>
            ))}
        </ul>
    );
}
