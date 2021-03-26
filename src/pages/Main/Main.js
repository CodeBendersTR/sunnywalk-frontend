import "./Main.css";
import React from 'react';
import { Link } from "react-router-dom";
import { 	CardDisplay,
			// HeaderMain,
			// MainFeature
} from '../../components';
import { 	Button, 
			Box, 
			Container,
			// Header, 
			// MainFeaturedPost
} from '@material-ui/core';



function Main() {
	return (
		<div>


			{/* <div class="jumbotron jumbotron-fluid">
				<div class="container">
					<h1 class="display-4, text-center">This is Sunny Walk</h1>
				</div>
	<		/div> */}

			<div class="jumbotron jumbotron-fluid">
				<div class="container">	
				<h1 class="display-4 text-center">I'm Sunny Walk</h1>
				<hr class="my-4"></hr>
				<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
				</div>
			</div>




		<Box my={1} px={3}>  
		<div style={{ width: '100%' }}>
			<Button variant="outlined" color="primary" Link exact to="/home">
					Log In
			</Button>
			
			<Button variant="outlined" color="primary" Link exact to="./Register">
					Sign Up
			</Button>	
		</div>
		</Box>

					{/* <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
					<meta name="description" content="" />
					<meta name="keywords" content="" /> */}
		
		
	{/* Main Heading */}
		<Container maxWidth>
			{/* Banner */}
				<section id="banner">
					<div className="inner">
						<a href="#" className="image fit"><img src="images/pic06.banner3.jpg" alt="" /></a>
						<h2></h2>
					</div>
				</section>
		</Container>


		{/* One */}
			<section id="one" className="wrapper style1">
				<header className="major">
					<h3>Sunny Walks are at your fingertips</h3>
					<p>Find the best time to take a daily walk, enjoy the outdoors and soak up the sun.</p>
				</header>
		
			{/* Card Display */}			
				<CardDisplay/>
				
			{/* Three Points of Interest */}
				<div className="container">
					<div className="row">
						<div className="4u">
							<section className="special box">
								<i className="icon fa-area-chart major"></i>
								<h3>Sunshine Enhances mood</h3><Link to={{ pathname: "https://www.webmd.com/balance/ss/slideshow-health-benefits-nature" }} target="_blank" />
								<p>Now that's sunshine on your shoulders!</p>
							</section>
						</div>
						<div className="4u">
							<section className="special box">
								<i className="icon fa-refresh major"></i>
								<h3>Reduces stress, improves sleep</h3><Link to={{ pathname: "https://www.webmd.com/balance/ss/slideshow-health-benefits-nature" }} target="_blank" />
								<p>Who knew?</p>
							</section>
						</div>
						<div className="4u">
							<section className="special box">
								<i className="icon fa-cog major"></i>
								<Link to={{ pathname: "https://www.webmd.com/food-recipes/features/vitamin-d-vital-role-in-your-health" }} target="_blank"></Link><h3>Strengthens your immune system</h3>
								<p>Check it out, vitamin D comes in handy in helping ward off COVID-19.</p>
							</section>
						</div>
						<div className="4u">
							<section className="special box">
								<i className="icon fa-cog major"></i>
								<h3>And it's FREE!</h3>
								<p>Sunshine and the app too.</p>
							</section>
						</div>
					</div>
				</div>
			</section>

		{/* Two */}
			<section id="two" className="wrapper style2">
				<header className="major">
					<h2>Soak up the sun</h2>
					<p>Whether on a solo walk or with others, the paths are limitless.</p>
				</header>
				<div className="container">
					<div className="row">
						<div className="6u">
							<section className="special">
							<a href="#" className="image fit"><img src="images/pic10.cityfamily.jpg" alt="" /></a>
								<h3>You are my sunshine</h3>
								<p>Because we can explore the outdoors together again.</p>
								<ul className="actions">
									
								</ul>
							</section>
						</div>
					</div>
				</div>	
			</section>		
			<section id="three" className="wrapper style1">
				<div className="container">
					<div className="row">
						<div className="6u">
							<section className="special">
								<a href="#" className="image fit"><img src="images/pic05.funwheelchair.jpg" alt="" /></a>
								<h3>Chasing the sun</h3>
								<p>Whether on a solo journey or with others, the paths and modes are limitless.</p>
								<ul className="actions">
									
								</ul>
							</section>
						</div>
					</div>
				</div>
			</section>

		{/* Three */}
			<section id="three" className="wrapper style3">
				<div className="container">
					<div className="row">
						<div className="8u">
							<section>
								<a href="#" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
								<h2>Sunshine everywhere</h2>
								<p>Create and discover new routes wherever you are. Save your favorites for your next adventure.</p>
							</section>
						</div>
						<div className="4u">
							<section>
								<h3>Take on a new challenge</h3>
								<p>After a year of the pandemic, where would you like to explore? Find a new destination and head out into the sun.</p>
								<p></p>
								<a href="https://www.webmd.com/beauty/features/sun-safety-sunscreen-and-sun-protection#1" className="image fit"><p>Do remember to enjoy responsibly and don't forget your sun cream.</p></a>
								<ul className="actions">
								</ul>
							</section>
							<hr />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}


export default Main;