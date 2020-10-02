import { CommentModel } from 'common';
import React, { FormEvent } from 'react';

interface Props { comment: CommentModel; }
interface State {
    contenu?: string;
}

export class CommentCreationForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    public render() {
        // const { pageCount, title } = this.state;

        return <>
            <form onSubmit={this.addComment}>
                <label>Commentaire:<input type='text' value={this.state.contenu ?? ''} required={true} onChange={e => {
                    this.setState({ contenu: e.target.value });
                }} /></label>
                {/* <label>Nombre de pages<input type='number' value={pageCount ?? ''} onChange={e => {
                    const newPageCount = parseInt(e.target.value);
                    this.setState({ pageCount: isNaN(newPageCount) ? null : newPageCount });
                }} /></label> */}
                <input type='submit' value='Poster' />
            </form>
        </>;
    }

    private addComment = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const body = { contenu: this.state.contenu };

        // const createdComment = await (await fetch('/api/book', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(body),
        //     credentials: 'include'
        // })).json();

        // this.props.addComment(createdComment);
    };
}
