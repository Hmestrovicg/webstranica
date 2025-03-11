import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [media, setMedia] = useState({});

    useEffect(() => {
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts' )
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                data.forEach(post => {
                    if (post.featured_media) {
                        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/media/' + post.featured_media)
                            .then(response => response.json())
                            .then(mediaData => {
                                setMedia(prevMedia => ({
                                    ...prevMedia,
                                    [post.id]: mediaData
                                }));
                            })
                            .catch(error => console.error('Fetch media error:', error));
                    }
                });
            })
            .catch(error => console.error('Fetch post error:', error));
    }, [slug]);
 
    return (
        <div className="container blog">
            <h1>Blog</h1>
            <div>
                {posts.map(post => (
                    <div className="row mb-5" key={post.id}>
                        <div className="col-md-5">
                            
                            {media[post.id] && (
                                <div>
                                    <img src={media[post.id].source_url} alt={media[post.id].title.rendered} />
                                </div>
                            )}
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <Link to={'/blog/' + post.slug}>
                                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
                            </Link>
                            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
