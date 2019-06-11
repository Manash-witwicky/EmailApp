import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Email } from '../email.model';
import { EmailService } from '../email.service';
import { AddEmail, AddEmailSuccess, DeleteMail, FetchEmail, FetchEmailSuccess } from './email.actions';
import { EmailModel } from './email.models';


const initialState: EmailModel = {
    emails: null,
};

@State<EmailModel>({
    name: 'EmailState',
    defaults: initialState
})

export class EmailState {

    @Selector()
    static getEmail(state: EmailModel) {
        return state.emails;
    }

    constructor(private emailService: EmailService) { }

    @Action(FetchEmail)
    fetch({ dispatch }: StateContext<EmailModel>) {
        return this.emailService.getEmail().pipe(
            tap((response) => dispatch(new FetchEmailSuccess(response))));

    }

    @Action(FetchEmailSuccess)
    fetchEmailSuccess({ getState, setState }: StateContext<EmailModel>, { emails }: FetchEmailSuccess) {
        const state = getState();
        setState(
            {
                ...state, emails: emails
            });
    }

    @Action(DeleteMail)
    deleteMail({ getState, patchState }: StateContext<EmailModel>, { payload }: DeleteMail) {
        const state = getState();
        patchState({
            emails: state.emails.filter((email) => email.id !== payload)
        });
    }

    @Action(AddEmail)
    addEmail({ dispatch }: StateContext<EmailModel>, { email, subject, content }: AddEmail) {
        return this.emailService.addMail(email, subject, content).pipe(
            tap((response: Email) => dispatch(new AddEmailSuccess(response))));
    }

    @Action(AddEmailSuccess)
    addEmailSuccess({ getState, patchState }: StateContext<EmailModel>, { email }: AddEmailSuccess) {
        const state = getState();
        patchState({
            emails: [
                ...state.emails, email
            ]
        });
    }

}
