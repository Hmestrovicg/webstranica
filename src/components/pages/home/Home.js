import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <section className="works-page">
			<div className="container">
				<h1>Work</h1>

				<div className="work-home">
					<div className="row align-items-center">
						<div className="col-md-3 align-items-center">
							<a href="/"><img src="img/work1.png" alt="" /></a>
						</div>
						<div className="col-md-9">
							<h3>
								<a href="single.html">Designing Dashboards</a>
							</h3>
							<Link to="/exchange" className="btn">IZM Exchange</Link>
							<p>
								<span className="date">2020</span>
								<span className="category">Dashboard</span>
							</p>
							<p className="mb-0">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus inventore repellat sit ea hic ratione neque
								odio rerum? Aperiam, sed in. Fuga maiores eaque repellat incidunt totam ex dolore ea. Repudiandae ipsam
								harum ea eum! Exercitationem delectus tenetur dolore fuga eius quis fugit, velit alias labore, inventore
								reprehenderit saepe commodi vitae dolores accusantium perferendis omnis facilis vel enim consequatur magni?
							</p>
						</div>
					</div>
				</div>
				<div className="work-home">
					<div className="row align-items-center">
						<div className="col-md-3">
							<a href="/"><img src="img/work2.png" alt="" /></a>
						</div>
						<div className="col-md-9">
							<h3>
								<a href="/">Designing Dashboards</a>
							</h3>
							<p>
								<span className="date">2020</span>
								<span className="category">Dashboard</span>
							</p>
							<p className="mb-0">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus inventore repellat sit ea hic ratione neque
								odio rerum? Aperiam, sed in. Fuga maiores eaque repellat incidunt totam ex dolore ea. Repudiandae ipsam
								harum ea eum! Exercitationem delectus tenetur dolore fuga eius quis fugit, velit alias labore, inventore
								reprehenderit saepe commodi vitae dolores accusantium perferendis omnis facilis vel enim consequatur magni?
							</p>
						</div>
					</div>
				</div>
				<div className="work-home">
					<div className="row align-items-center">
						<div className="col-md-3">
							<a href="/"><img src="img/work3.png" alt="" /></a>
						</div>
						<div className="col-md-9">
							<h3>
								<a href="/">36 Days of Malayalam type</a>
							</h3>
							<p>
								<span className="date">2020</span>
								<span className="category">Typography</span>
							</p>
							<p className="mb-0">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus inventore repellat sit ea hic ratione neque
								odio rerum? Aperiam, sed in. Fuga maiores eaque repellat incidunt totam ex dolore ea. Repudiandae ipsam
								harum ea eum! Exercitationem delectus tenetur dolore fuga eius quis fugit, velit alias labore, inventore
								reprehenderit saepe commodi vitae dolores accusantium perferendis omnis facilis vel enim consequatur magni?
							</p>
						</div>
					</div>
				</div>
				<div className="work-home">
					<div className="row align-items-center">
						<div className="col-md-3">
							<a href="/"><img src="img/work4.png" alt="" /></a>
						</div>
						<div className="col-md-9">
							<h3>
								<a href="/">Components</a>
							</h3>
							<p>
								<span className="date">2018</span>
								<span className="category">Components, Design</span>
							</p>
							<p className="mb-0">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
								velit mollit. Exercitation veniam consequat sunt nostrud amet.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Home;