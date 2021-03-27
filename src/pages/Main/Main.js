import "./Main.css";
import React from 'react';
import { Link } from "react-router-dom";
import { 	
	CardDisplay,
	// HeaderMain,
	// MainFeature
} from '../../components';
// import { images } from '../../images'; const { width, height } = Image.resolveAssetSource(myImage) // this doesn't work
import { 	
	Button, 
	Box, 
	Container,
	// Header, 
	// MainFeaturedPost
} from '@material-ui/core';



function Main() {
	return (
		<div>


			{/* Image and text bar  */}
				<nav className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 px-0 h1">
				<img src="images/sun.icon.gif" width="30" height="30" class="d-inline-block align-top" alt="sun icon"></img>	
					SUNNY WALK</span>
					
					<div className="d-flex justify-content-end">
					<div style={{ padding: 18 }}>
						<Button variant="outlined"  color="primary" Link exact="true" to="/home" alt="Home button, blue" my={1} px={2}>
								Log In
						</Button>
						<Button variant="outlined" color="primary" Link exact="true" to="/Register" alt="Register button, blue" my={1} px={2} >
								Sign Up
						</Button>	
					</div>
					</div>
				</nav>
		

					{/* <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
					<meta name="description" content="" />
					<meta name="keywords" content="" /> */}
		
		
	{/* Main Header */}
		<Container maxWidth>
			{/* Banner */}
				<section id="banner">
					<div className="inner">
						<a href="#" className="image center"><img src="images/pic06.banner3.jpg" alt="Four men and one woman of multiple cultures, under 20 years, smiling, running toward camera, in casual dress, background of blue skies and grassy suburbia" dpr="auto" responsive gravity="faces" accessibility= "colorblind" quality="auto" fetchFormat="auto" height="100%" width="100%" /></a>
						<h2></h2>
					</div>
				</section>
		</Container>
		{/* import { images[1] } from './images'  this doesn't work yet */}


		{/* One */}
			<section id="one" className="wrapper">
					
				<header className="major"  >
					<h3>Sunny Walks at your fingertips</h3>
					<p>Find the best time to take a daily walk, enjoy the outdoors and soak up the sun.</p>
				</header>
				
		
			{/* Card Display */}
			<div style={{ padding: 50 }}>		
				<CardDisplay/>
				</div>		
			
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
				<div className="container">
					<div className="row">
						<div className="6u">
							<section className="special">
							<a href="#" className="image fit"><img src="images/pic10.cityfamily.jpg" alt="Woman and child of color, smiling sweetly at camera, woman wearing leather clothes kneeling with gender neutral child hugging her shoulders, backdrop of center city, brick street" /></a>
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
								<a href="#" className="image fit"><img src="images/pic05.funwheelchair.jpg" alt="distant picture of person pushing another in wheelchair against architectual building and waterfront" /></a>
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
								<a href="#" className="image fit"><img src="images/pic02.jpg" alt="Woman of colour wearing backpack walking solo against industrial style city wall" /></a>
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