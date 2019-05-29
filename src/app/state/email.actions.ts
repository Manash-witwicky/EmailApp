import { Email } from './email.models';

export class FetchEmail {
    static readonly type = '[EMAIL] Fetch Email';
}
export class FetchEmailSuccess {
    static readonly type = '[EMAIL] Fetch Email success';
    constructor(public emails: Email[]) { }
}
