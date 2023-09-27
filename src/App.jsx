import NavBar from './components/NavBar/NavBar';

import './App.css';

export default function Portfolio() {
	return (
		<div id="portfolio_container">
			<NavBar />
			<div>---------------------------------------</div>
			<h1>
				Combining the <span className="art-font">Arts</span> and{' '}
				<span className="code-font">Development</span>
			</h1>
			<div id="" className="">
				<h2>list of things:</h2>
				<ul>
					<li>this</li>
					<li>that</li>
					<li>here</li>
					<li>there</li>
				</ul>
			</div>
			<div className="">
				<h2>Some stuff idk</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a,
					ratione tempore ipsa atque minima veritatis aut mollitia animi eaque,
					voluptatem odit cupiditate vero ducimus? Modi architecto ut amet ab.
				</p>
			</div>
		</div>
	);
}
