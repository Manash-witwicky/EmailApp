import { Email } from './email.models';

export class FetchEmail {
    static readonly type = '[EMAIL] Fetch Email';
}
export class FetchEmailSuccess {
    static readonly type = '[EMAIL] Fetch Email success';
    constructor(public emails: Email[]) { }
}

export class ComposeEmail {
    static readonly type = '[EMAIL] Add Email';
    constructor(public email: Email) { }
}

export class DeleteMail {
    static readonly type = '[EMAIL] Delete Email';
    constructor(public payload: number) { }
}
