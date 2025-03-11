import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MediaImg from "../postsComponents/MediaImg";
import PostAuthor from "../postsComponents/PostAuthor";
import PostDate from "../postsComponents/PostDate";
import './Blog.css';

const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
        }, []
    );

    return (
            <div className="container blog">
                <h1>Blog</h1>
                <div>
                    {posts.map(post => (
                        <div className="row mb-5" key={post.id}>
                            <div className="col-md-5">

                                <MediaImg id={post.featured_media} size="full" />
                                
                            </div>
                            <div className="col-md-6 offset-md-1">
                                <Link to={'/blog/' + post.slug}>
                                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
                                </Link>
                                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                <div className="col-md-3">
                                    <PostAuthor authorID={post.author} />
                                </div>
                                <div className="col-md-3">
                                    <PostDate date={post.date} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

export default Blog;