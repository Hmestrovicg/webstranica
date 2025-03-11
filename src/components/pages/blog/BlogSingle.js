import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import MediaImg from '../postsComponents/MediaImg';
import PostDate from "../postsComponents/PostDate";
import PostAuthor from "../postsComponents/PostAuthor";
import './BlogSingle.css';

const BlogSingle = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
                fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?slug=' + id)
                .then(response => response.json())
                .then(data => setPost(data[0]));
        } , [id]
    );

    if(!post) return <p>Učitavanje.....</p>;

    return (
        <div className="container single-post">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                    <p> 
                        Datum članka: <PostDate date={post.date} />
                    </p>
                    <p> 
                        Autor članka: <PostAuthor authorID={post.author} />
                    </p>
                    <MediaImg id={post.featured_media} size="full" />
                    <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                </div> 
            </div>
        </div>
    );
};

export default BlogSingle;