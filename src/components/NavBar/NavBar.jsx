export default function NavBar() {
	return (
		<nav id="component-navbar" className="flex justify-evenly items-center">
			<div>
				<img src="/logo-no-background.svg" alt="" id="logo" width={100} />
			</div>
			<div id="links" className="flex justify-items-end">
				<a href="#about">About</a>
				<a href="#portfolio">Portfolio</a>
				<a href="#skills">Skills</a>
				<a href="#connect" id="navbar-link_connect">
					Connect
				</a>
			</div>
		</nav>
	);
}
