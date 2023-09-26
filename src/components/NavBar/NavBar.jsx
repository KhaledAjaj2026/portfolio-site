export default function NavBar() {
	return (
		<nav id="component-navbar" className="grid grid-cols-2">
			<img src="/logo-no-background.svg" alt="" id="logo" width={100} />
			<a href="#about">About</a>
			<a href="#portfolio">Portfolio</a>
			<a href="#skills">Skills</a>
			<a href="#connect" id="navbar-link_connect">
				Connect
			</a>
		</nav>
	);
}
