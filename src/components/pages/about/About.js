import React, {useEffect, useState} from "react";
import '../gutenberg.css';

const About = () => {
    const [data, setData] = useState(null);
	
		useEffect(() => {
						fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/581')
						.then(response => response.json())
						.then(data => setData(data));
				} , []
			);
	
		if(!data) return <p>Učitavanje.....</p>;
		return (
			<section className="works-page">
				<div dangerouslySetInnerHTML={{__html: data.content.rendered}} />
			</section>
		);
	};

export default About;