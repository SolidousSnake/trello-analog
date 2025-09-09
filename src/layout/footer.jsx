export default function Footer() {
    return (
        <footer className="text-center py-3 border-top w-100" style={{ position: 'fixed', bottom: 0, left: 0 }}>
            <small className="text-muted">
                © {new Date().getFullYear()} Lol why did I make a footer?
            </small>
        </footer>

    );
}
