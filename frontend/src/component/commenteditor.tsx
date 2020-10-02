import { CommentModel } from 'common';
import React from 'react';
import { CommentCreationForm } from './commentcreationform';

interface Props { }
interface State {
    comments?: CommentModel[];
}

export class CommentEditor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    public async componentDidMount() {
        const comments = (await (await fetch('/api/comment')).json() as any[]).map(CommentModel.fromJSON);
        this.setState({ comments });
    }

    public render() {
        const { comments } = this.state;
        if (!comments) { return 'Chargement...'; }

        return <>
            {comments.map(comment => <div key={comment.commentId}>
                Commentaire ici: {comment.contenu}{comment.editor}{comment.datePub.toString()}

                <CommentCreationForm comment={comment} />
            </div>)}
        </>;
    }

    // private getPageCount = (comment: CommentModel) => {
    //     if (comment.pageCount === null) {
    //         return 'nombre de pages inconnu';
    //     } else {
    //         return `${comment.pageCount} pages`;
    //     }
    // };
}
