import CharacterWish from "../components/CharacterWish";

export default function Wish() {
    return (
        <div className="container p-3 h-auto">
            <div className="bg-dark p-3 rounded d-flex justify-content-between">
                <div>
                    <button className="me-3 btn btn-outline-light">
                        <h6 className="my-auto">Character</h6>
                    </button>
                    <button className="btn btn-outline-light">
                        <h6 className="my-auto">Weapon</h6>
                    </button>
                </div>
                <div>
                    <button className="me-3 btn btn-outline-warning">
                        <h6 className="my-auto">x1 Wish</h6>
                    </button>
                    <button className="btn btn-outline-warning">
                        <h6 className="my-auto">x10 Wish</h6>
                    </button>
                </div>
            </div>
            <CharacterWish />
        </div>
    );
}
