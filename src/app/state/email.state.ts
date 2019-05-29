import { HttpClient } from '@angular/common/http';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { EmailService } from '../email.service';
import { FetchEmail, FetchEmailSuccess } from './email.actions';
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

    constructor(private _http: HttpClient, private emailService: EmailService) { }

    @Action(FetchEmail)
    fetch({ dispatch }: StateContext<EmailModel>) {
        return this.emailService.getEmail().pipe(
            tap((response) => dispatch(new FetchEmailSuccess(response))));

    }

    @Action(FetchEmailSuccess)
    fetchEmailSuccess({ getState, setState }: StateContext<EmailModel>, { emails }: FetchEmailSuccess) {
        const state = getState();
        setState({ ...state, emails: emails });
    }

}
