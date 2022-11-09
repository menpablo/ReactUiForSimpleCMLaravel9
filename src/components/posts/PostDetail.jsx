import { useState } from "react";
import AddComment from "../comments/AddComment";
import Comments from "../comments/Comments";


export default function PostDetail(props){
    const [isCommentVisible, setIsCommentVisible] = useState(false);

    const saveComment = (comment) => {
        setIsCommentVisible(false)
        props.saveComment(comment);
    }
    
    return (
        JSON.stringify(props.post) != "{}"?
        <div className="w-full rounded overflow-hidden p-6 ">
            <div class="shadow-lg border border-gray-200 p-6">
                <div class="">
                    <div class="font-bold text-xl mb-2">{props.post !== undefined ? props.post.title : ''}</div>
                    <p class="text-gray-700 text-base">
                        {props.post !== undefined ? props.post.body : ''}
                    </p>
                    <div  class="flex justify-end cursor-pointer">
                        <svg onClick={(e) => setIsCommentVisible(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-grey-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </div>
                    {isCommentVisible?<AddComment closeFn={() => setIsCommentVisible(false)} saveComment={(comment) => saveComment(comment)} />:''}                    
                </div>
                {
                    JSON.stringify(props.post) != "{}" ?
                        props.post.comments.map(
                            (comment) => <Comments comment={comment.comment} />
                        )
                        : ''
                }
            </div>
        </div>:        
        <div className="w-full rounded overflow-hidden p-6 ">
            <div class="shadow-lg border border-gray-200 p-6">
                Please Select a Post
            </div>
        </div>
    );
}