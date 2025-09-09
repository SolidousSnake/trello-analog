import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex-column justify-content-center align-items-center text-center">
            <h1 className="mb-4">Welcome!</h1>
            <Link to="/board" className="btn btn-primary btn-lg">
                Get Started
            </Link>
        </div>
    );
}
