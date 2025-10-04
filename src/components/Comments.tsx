"user client";

type CommentType = {
    profilePic: string;
    username: string | number;
    content: string;
    date: Date;
    likes: number;
    replies?: CommentType[];
};

type CommentsProps = {
    comments?: CommentType[];
};

export default function Comments({ comments = [] }: CommentsProps) {
    if (comments.length === 0) {
        return <p className="no-comments">No comments yet. Be the first to share your thoughts!</p>;
    }

    // Recursive rendering function
    const renderComments = (commentList: CommentType[]) => {
        return commentList.map((comment, index) => (
            <div key={index} className="comment-item">
                <img
                    src={comment.profilePic}
                    alt={String(comment.username)}
                    className="comment-avatar"
                />

                <div className="comment-content">
                    <strong>{comment.username}</strong>
                    <p>{comment.content}</p>

                    <div className="comment-meta">
                        <span>{new Date(comment.date).toLocaleDateString()}</span>
                        <span>❤️{comment.likes}</span>
                    </div>

                    {/* Render nested replies */}
                    {comment.replies && comment.replies.length > 0 && (
                        <div className="comment-replies">
                            {renderComments(comment.replies)}
                        </div>
                    )}
                </div>
            </div>
        ));
    };

    return (
        // <section className="comments-section">
        <div className="comments-section">
            <h3>💬 Comments ({comments.length})</h3>
            <div className="comment-list">{renderComments(comments)}</div>
        </div>
        // </section>
    );
}