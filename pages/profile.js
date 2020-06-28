import Link from 'next/link';
import { getLayout } from '../components/layouts/SiteLayout';
const Profile = () => (
	<>
		<h1>Account settings</h1>
		<p>Consectetur temporibus at deleniti dolor cupiditate reiciendis.<br /> Sunt iste asperiores quos repudiandae nisi At saepe commodi amet aut.</p>
		<Link href="/"><a className="btn btn-danger">Go Home</a></Link>
	</>
);

Profile.getLayout = getLayout;

export default Profile;

