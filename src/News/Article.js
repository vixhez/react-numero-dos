import {Component} from "react";
import axios from "../axios";
import Comments from "./Comments";

class Article extends Component{
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: {},
        };
    }

    componentDidMount() {
        const { id } = this.props;

        axios.get(`/articles/${id}`).then(({ data })=> {
            this.setState({
                loaded: true,
                article: data.data
            })
        })
    }

    render() {
        const { loaded, article } = this.state;
        const { id } = this.props;

        return !loaded ? <p>Loading...</p> : (
            <>
                    <h2>{ article.title }</h2>
                    <p>{ article.content }</p>
                    <p>{ article.tags }</p>

                    <Comments articleID={ id } /> 
            </>
        );
    }
}

export default Article;