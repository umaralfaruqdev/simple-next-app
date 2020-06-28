import Link from 'next/link';
import { getLayout } from '../components/layouts/SiteLayout';

const Index = () => {
	return (
		<>
			<h1>Welcome to Next.js</h1>
			<p>Adipisicing soluta id nulla eligendi aut Dolores cupiditate officiis ut modi incidunt! Consectetur temporibus at deleniti dolor cupiditate reiciendis. Sunt iste asperiores quos repudiandae nisi At saepe commodi amet aut.</p>
			<Link href="/profile"><a className="btn btn-danger">Setting</a></Link>
		</>
	);
}

Index.getLayout = getLayout;

export default Index;

