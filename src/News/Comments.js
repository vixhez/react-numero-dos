import {Component} from 'react';
import axios from "../axios";

class Comments extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        };
    }

    componentDidMount() {
        const { articleID } = this.props;

        axios.get(`/articles/${articleID}/comments`).then(({ data })=> {
            this.setState({
                loaded: true,
                comments: data.data
            });
        });
    }

    render() {
        const { loaded, comments } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <>
                <h4>Comments</h4>
                { comments.length === 0 ? <p>No comments, soz!</p> : (
                    <ul className="list-group">
                        {comments.map(comment => (
                            <li className="list-group" key={ comment.id }>
                                <p><b>{ comment.email }</b></p>
                                <p>{ comment.comment }</p>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }
}

export default Comments;