import NotLogged from "../components/NotLogged";

export default function Inventory({ isLoggedIn }: { isLoggedIn: boolean }) {
    if (!isLoggedIn) return <NotLogged />;
    return <div>Inventory</div>;
}
