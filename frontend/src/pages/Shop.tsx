import NotLogged from "../components/NotLogged";

export default function Shop({ isLoggedIn }: { isLoggedIn: boolean }) {
    if (!isLoggedIn) return <NotLogged />;
    return <div>Shop</div>;
}
