import React, { useEffect, useState } from "react";

const PostAuthor = ({ authorID }) => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        if (!authorID) return;
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/users/' + authorID)
            .then((response) => response.json())
            .then((data) => setAuthor(data));
    }, [authorID]);

    if (!author) return <span>Anonimni Autor</span>;

    return (
        <span> {author.name} </span>
    );
}

export default PostAuthor;