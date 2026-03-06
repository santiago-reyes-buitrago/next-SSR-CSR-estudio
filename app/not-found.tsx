import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div>
                <h2>Not Found - Global</h2>
                <p>No se reconoce esa ruta</p>
                <Link href="/">Return Home</Link>
            </div>
        </>
    );
};

export default NotFound;
