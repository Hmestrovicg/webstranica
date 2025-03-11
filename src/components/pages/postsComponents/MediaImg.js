import React, { useEffect, useState } from "react";
const MediaImg = ({ id,size }) => {
    
  const [image, setImage] = useState(null);
   
  useEffect(() => {
    if(!id) return;
    fetch(
      `https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/media/` + id
    )
      .then((response) => response.json())
      .then((data) => setImage(data));
  }, [id]);

  if (!image) return <img src="https://placehold.co/600x400?text=Loading..." alt="wassup"/>;

  if (size === "full" )
    return (
        <img src={image.media_details.sizes[size].source_url} alt="55" />
    );
  else
    return (
        <img src={image.media_details.sizes.medium.source_url} alt="55" />
    );
};

export default MediaImg;