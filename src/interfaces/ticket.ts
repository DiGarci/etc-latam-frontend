export interface ITicket {
    id: string;
    subject: string;
    description: string;
    incident_type: string;
    status: string;
    priority: string;
    client: string;
    assigned_to: string;
    requested_by: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
