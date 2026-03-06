import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/02-my-dashboard/public">Return Home</Link>
            </div>
        </>
    );
};

export default NotFound;
