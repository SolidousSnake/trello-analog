export default function Content({ children }) {
    return (
        <main
            className="w-100"
            style={{
                paddingTop: '72px',  // высота хедера
                paddingBottom: '56px', // высота футера
                height: '100vh',
                overflowY: 'auto'
            }}
        >
            <div className="container py-4">
                {children}
            </div>
        </main>
    );
}
