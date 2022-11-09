import { Component } from "react";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        return (<div>
                    <div class="w-full rounded border overflow-hidden mt-6">
                        <div class="px-6 py-4">
                            <p class="text-gray-700 text-sm text-base">
                                {this.props.comment}
                            </p>
                        </div>
                    </div>
                </div>
                )
    }
}

export default Comments;