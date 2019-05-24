export interface Email {
    id: number;
    subject: string;
    email: string;
    body: string;
    sent?: boolean;
    starred?: boolean;
    read?: boolean;
}
