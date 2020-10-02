import React from 'react';
import { Nav } from './nav';

interface Props { }
interface State {
    // comments?: CommentModel[];
}

export class Product extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    // public async componentDidMount() {
    //     const comments = (await (await fetch('/api/book')).json() as any[]).map(CommentModel.fromJSON);
    //     this.setState({ comments });
    // }

    public render() {

        return <>
            <Nav />
            <p>page product</p>
        </>;
    }

}
