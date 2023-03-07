export interface IReport {
    id: string
    name: string
    type: string
    description: string
    format: string
    date_from: string,
    date_to: string
    hour_from: string
    hour_to: string
    user: string
    to_email: string
    created_at: string
    updated_at: string
    link_download: string
}
