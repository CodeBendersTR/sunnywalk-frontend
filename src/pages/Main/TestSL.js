import "./Main.css";
import React from 'react';
import { Link } from "react-router-dom";
import { 	AddCards,
          	CardDisplay,
			JustifyContent,
} from '../../components';
import { 	Button, 
			Box, 
			Container, 
} from '@material-ui/core';
// {/*import images from './images'*/}



function Main() {
    return (
        <div>

		<h1>This is the Main Page</h1>
		<Box JustifyContent="flex-end"> 
		<div style={{ width: '100%' }}>
			<Button variant="outlined" color="disabled" href="./Home.js">
					User
			</Button>
		</div>
		
			<Button variant="outlined" color="disabled" href="./Register.js">
  					Register
			</Button>	

			<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
			<meta name="description" content="" />
			<meta name="keywords" content="" />
	</Box>
		
		{/* Main Heading */}
		<Container maxWidth>
			{/* Banner */}
				<section id="banner">
					<div class="inner">
						<a href="#" class="image fit"><img src="images/pic01.jpg" alt="" /></a>
						<h2>This is Sunny Walk</h2>
					</div>
				</section>
		</Container>


			{/* One */}
			<section id="one" className="wrapper style1">
				<header className="major">
					<h2>Sunny Walks at your fingertips</h2>
					<p>Find the best time to take a daily walk in order to maximise intake of sunshine.</p>
				</header>
					
				<CardDisplay/>
				
				<div className="container">
					<div className="row">
						<div className="4u">
							<section className="special box">
								<i className="icon fa-area-chart major"></i>
								<h3>Weather Forecast</h3>
								<p>Eu non col commodo accumsan ante mi. Commodo consectetur sed mi adipiscing accumsan ac nunc tincidunt lobortis.</p>
							</section>
						</div>
						<div className="4u">
							<section className="special box">
								<i className="icon fa-refresh major"></i>
								<h3>Optimize your Sunshine</h3>
								<p>Eu non col commodo accumsan ante mi. Commodo consectetur sed mi adipiscing accumsan ac nunc tincidunt lobortis.</p>
							</section>
						</div>
						<div className="4u">
							<section className="special box">
								<i className="icon fa-cog major"></i>
								<h3>Your Walk Reminder</h3>
								<p>Eu non col commodo accumsan ante mi. Commodo consectetur sed mi adipiscing accumsan ac nunc tincidunt lobortis.</p>
							</section>
						</div>
					</div>
				</div>
			</section>

			{/* Two */}
			<section id="two" className="wrapper style2">
				<header className="major">
					<h2>Commodo accumsan aliquam</h2>
					<p>Amet nisi nunc lorem accumsan</p>
				</header>
				<div className="container">
					<div className="row">
						<div className="6u">
							<section className="special">
							<a href="#" className="image fit"><img src="images/pic01.jpg" alt="" /></a>
								<h3>Sunny Walk at your fingertips</h3>
								<p>Eget mi ac magna cep lobortis faucibus accumsan enim lacinia adipiscing metus urna adipiscing cep commodo id. Ac quis arcu amet. Arcu nascetur lorem adipiscing non faucibus odio nullam arcu lobortis. Aliquet ante feugiat. Turpis aliquet ac posuere volutpat lorem arcu aliquam lorem.</p>
								<ul className="actions">
									
								</ul>
							</section>
						</div>
						<div className="6u">
							<section className="special">
								<a href="#" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
								<h3>Neque ornare adipiscing</h3>
								<p>Eget mi ac magna cep lobortis faucibus accumsan enim lacinia adipiscing metus urna adipiscing cep commodo id. Ac quis arcu amet. Arcu nascetur lorem adipiscing non faucibus odio nullam arcu lobortis. Aliquet ante feugiat. Turpis aliquet ac posuere volutpat lorem arcu aliquam lorem.</p>
								<ul className="actions">
									
								</ul>
							</section>
						</div>
					</div>
				</div>
			</section>

		{/* Three */}
			<section id="three" className="wrapper style1">
				<div className="container">
					<div className="row">
						<div className="8u">
							<section>
								<a href="#" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
								<h2>Mollis ut adipiscing</h2>
								<p>Vis accumsan feugiat adipiscing nisl amet adipiscing accumsan blandit accumsan sapien blandit ac amet faucibus aliquet placerat commodo. Interdum ante aliquet commodo accumsan vis phasellus adipiscing. Ornare a in lacinia. Vestibulum accumsan ac metus massa tempor. Accumsan in lacinia ornare massa amet. Ac interdum ac non praesent. Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan commodo odio cubilia ac eu interdum placerat placerat arcu commodo lobortis adipiscing semper ornare pellentesque.</p>
							</section>
						</div>
						<div className="4u">
							<section>
								<h3>Magna massa blandit</h3>
								<p>Feugiat amet accumsan ante aliquet feugiat accumsan. Ante blandit accumsan eu amet tortor non lorem felis semper. Interdum adipiscing orci feugiat penatibus adipiscing col cubilia lorem ipsum dolor sit amet feugiat consequat.</p>
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



<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>