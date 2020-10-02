import { CommentModel } from 'common';
import React from 'react';
import { Nav } from './nav';

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
        const comments = (await (await fetch('/api/book')).json() as any[]).map(CommentModel.fromJSON);
        this.setState({ comments });
    }

    public render() {
        const { comments } = this.state;
        if (!comments) { return 'Chargement...'; }

        return <>
            <Nav />
            {/* {comments.map(comment => <div key={comments.bookId}>{comment.title} {this.getPageCount(comment)}</div>)}
            <CommentCreationForm addComment={comment => {
                comments.push(comment);
                this.setState({ comments });
            }} /> */}
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
