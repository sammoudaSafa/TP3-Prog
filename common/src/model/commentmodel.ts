
export class CommentModel {
    public commentId: number;
    public propretaire: string;
    public contenu: string;
    public dateComment: Date;

    public static fromJSON(jsonCommentModel: CommentModel) {
        const commentModel = new CommentModel;
        Object.assign(commentModel, jsonCommentModel);
        commentModel.dateComment = new Date(commentModel.dateComment);
        return commentModel;
    }
}
