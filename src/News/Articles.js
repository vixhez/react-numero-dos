import {Component} from "react";
import Article from "./Article";
import axios from "../axios";

class Articles extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        };
    }

    componentDidMount() {
        axios.get("/articles")
        .then(({ data })=> {
            const articles = data.data;

            this.setState({ loaded: true,
                            articles: articles, })
        })
    }

    render() {
        const { loaded, articles } = this.state;
        return !loaded ? <p>Loading...</p> : (
                <>
                    <h2>Articles</h2>
                    <ul className="list-group">
                        { articles.map(article => (
                            <li key={ article.id }
                                className="list-group-item">
                                    { article.title }
                                </li>
                        )) }
                    </ul>
                </>

            );
        }
    }

export default Articles;