import {Component} from 'react';
import axios from '../axios';

class CreateArticle extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
        };
    
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleContent(e) {
        this.setState({ content: e.currentTarget.value });
    }

    handleTags(e) {
        this.setState({ tags: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, content, tags } = this.state;

        axios.post("/articles", {
            title: title,
            content: content,
            tags: tags.split(", ")
        }).then(() => {
            this.setState({
                title: "",
                content: "",
                tags: "",
            })
        })
    }

    render() {
        const { title, content, tags } = this.state;

        return(
            <>
                <h4>Submit an article</h4>
                <form onSubmit={ this.handleSubmit }>
                    <label for="title">Title</label>
                    <input
                        onChange={ this.handleTitle } 
                        value={ title } 
                        name="Title" 
                        id="title" />

                    <br />

                    <label for="content">Content</label>
                    <input
                        onChange={ this.handleContent } 
                        value={ content } 
                        name="Content" 
                        id="content" />

                    <br />

                    <label for="tags">Tags</label>
                    <input
                        onChange={ this.handleTags } 
                        value={ tags } 
                        name="Tags" 
                        id="tags" />

                    <br />
                    
                    <button
                        className="btn btn-primary">
                            Create
                    </button>
                </form>
            </>
        );
    }
}

export default CreateArticle;