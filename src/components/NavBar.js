import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => (
	<header className="bg-yellow-200">
		<div className="container mx-auto flex justify-between">
			<nav className="flex">
				<NavLink
					to="/"
					exact
					activeClassName="text-white"
					className="inflex-flex items-center py-6 px-3 mr-4 text-blue-900 hover:text-blue-200 text-4xl font-bold cursive tracking-widest"
				>
					Jonathan
				</NavLink>
				<NavLink
					to="/post"
					activeClassName="text-red-100 bg-yellow-500"
					className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-900 hover:text-blue-200"
				>
					Blog Posts
				</NavLink>
				<NavLink
					to="/projects"
					activeClassName="text-red-100 bg-yellow-500"
					className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-900 hover:text-blue-200"
				>
					Projects
				</NavLink>
				<NavLink
					to="/about"
					activeClassName="text-red-100 bg-yellow-500"
					className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-900 hover:text-blue-200"
				>
					About Me
				</NavLink>
			</nav>
			<div className="inline-flex py-3 px-3 my-6">
				<SocialIcon
					url="https://github.com/Jon-graham89"
					className="mr-4"
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>

				<SocialIcon
					url="https://www.linkedin.com/in/jonathan-graham-83375193/"
					className="mr-4"
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
			</div>
		</div>
	</header>
);

export default NavBar;
