import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="display-1 text-danger mb-3">404</h1>
            <p className="mb-4 fs-4">Not found</p>
            <Link to="/" className="btn btn-primary btn-lg">
                Home
            </Link>
        </div>
    );
}
