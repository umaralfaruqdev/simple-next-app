import Head from 'next/head';
import Link from 'next/link';

const SiteLayout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favi/favicon.ico" />		
				<link rel="icon" href="/favi/animated_favicon1.gif" />
				<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
			</Head>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="">Next.js</a>

					<div class="collapse navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
							<li className="nav-item"><Link href="/profile"><a className="nav-link">Profile</a></Link></li>
						</ul>
						<form className="d-flex" action="">
							<input type="" className="form-control mr-2" placeholder="search" />
							<button className="btn btn-success">Go</button>
						</form>
					</div>
				</div>
			</nav>
			<div className="container" style={{paddingTop: 150 + 'px'}}>
				{children}
			</div>
		</>
	);
}

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;

