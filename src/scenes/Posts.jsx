import { Component } from "react";
import PostsList from "../components/posts/PostsList";
import { list, addComment, savePost } from "../components/posts/api/postApi";
import PostDetail from "../components/posts/PostDetail";
import AddPost from "../components/posts/AddPost";
import Toast from "../components/comments/Toast";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            post: {},
            isAddPostVisible:false,
            showToast:false
        }
        this.listsPost   = this.listsPost.bind(this);
        this.setPost     = this.setPost.bind(this);
        this.saveComment = this.saveComment.bind(this);
        this.savePost    = this.savePost.bind(this);
    }

    componentDidMount() {
        this.listsPost();
    }

    listsPost() {
        list((posts) => this.setState({ postList: posts }));
    }

    setPost(post) {
        this.setState({ post: post })
    }

    savePost(post) {
        this.setState({isAddPostVisible:false});
        savePost(post, (posts) => {
                                    this.listsPost();
                                    this.setState({showToast:true});
                                  });
    }

    saveComment(comment) {
        this.setState({
            post: Object.assign(this.state.post, { comments: [...this.state.post.comments, { comment: comment }] })
        });
        addComment(this.state.post.id, comment, (posts) => this.setState({showToast:true}));
    }

    render() {
        return (
            <div className='border border-gray-200 rounded'>
                <div class="container mx-0 min-w-full flex flex-col items-center">
                    <button onClick={() => this.setState({isAddPostVisible:true})}class="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">New Post</button>
                </div>
                {
                    this.state.showToast?
                        <Toast close={() => this.setState({showToast:false})} />
                        :
                        ''
                }
                
                <div className="flex justify-center  ">
                    <div className="flex rounded">
                        {this.state.isAddPostVisible?<AddPost savePost={(post) => this.savePost(post)} />:''}
                        <PostsList postList={this.state.postList} select={(post) => this.setPost(post)} />
                        <PostDetail post={this.state.post} saveComment={this.saveComment} />
                    </div>
                </div>
            </div>)
    }
}

export default Posts;