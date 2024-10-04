export default function LoadingScreen() {
    return (
        <div
            style={{
                width: "100%",
                height: "90vh",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                position: "absolute",
            }}
            className="d-flex align-items-center justify-content-center"
        >
            <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
