export default function PostsList(props) {
    return (
        <div className="w-full rounded overflow-hidden p-6 ">
            {
                props.postList.length == 0 ? <div class="font-bold text-xl mb-2">No Posts Here!</div> : ''
            }
            {
                props.postList.map((post) =>
                    <div onClick={() => props.select(post)} className="min-h-min w-full cursor-pointer rounded overflow-hidden shadow-lg  border border-gray-200">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{post.title.substring(0, 25)}</div>
                            <p class="text-gray-700 text-base">
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}