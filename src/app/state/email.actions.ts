import { Email } from './email.models';

export class FetchEmail {
    static readonly type = '[EMAIL] Fetch Email';
}
export class FetchEmailSuccess {
    static readonly type = '[EMAIL] Fetch Email success';
    constructor(public emails: Email[]) { }
}

export class DeleteMail {
    static readonly type = '[EMAIL] Delete Email';
    constructor(public payload: number) { }
}

export class AddEmail {
    static readonly type = '[EMAIL] Add Email';
    constructor(public email, public subject, public content) { }
}

export class AddEmailSuccess {
    static readonly type = '[EMAIL] Add Email Success';
    constructor(public email: Email) { }
}



