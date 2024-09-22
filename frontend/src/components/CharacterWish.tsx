export default function CharacterWish() {
    return (
        <div
            className="p-3 mt-2 rounded container-fluid h-auto h-md-75 d-flex flex-md-row flex-column"
            style={{ backgroundColor: "cornflowerblue" }}
        >
            <div className="w-100 w-md-50 w-50 h-md-50 h-100 me-5 bg-light rounded mb-4 mb-md-0">
                <div
                    className="w-50 d-flex justify-content-center my-3 mx-auto rounded text-light rounded h4 text-center py-2 px-3 fs-1"
                    style={{
                        backgroundColor: "cornflowerblue",
                    }}
                >
                    Character Wish
                </div>
                <div
                    className="container d-flex flex-column justify-content-evenly"
                    style={{ height: "80%" }}
                >
                    <p
                        className="fs-4 text-light p-3"
                        style={{
                            backgroundColor: "cornflowerblue",
                            letterSpacing: "1px",
                        }}
                    >
                        Every 10 wishes is guaranteed to include at least one
                        4-star or higher item.
                    </p>
                    <p
                        className="fs-4 p-3 text-light"
                        style={{
                            backgroundColor: "cornflowerblue",
                            letterSpacing: "1px",
                        }}
                    >
                        I, Sush1sui do not own any of these graphics. This
                        project is for personal and educational purposes only,
                        and this website was made only for me to practice my
                        programming skills and share it to public to get critics
                        and use it to enhance my skills.
                    </p>
                </div>
            </div>
            <div className="w-100 w-md-50 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center gap-3">
                    <img
                        className="w-50 w-md-50 banner-img"
                        src="/characterBannerImages/4star/kuki-shinobu.webp"
                        alt="first-4star"
                    />
                    <img
                        className="w-50 w-md-50 banner-img"
                        src="/characterBannerImages/4star/ningguang.webp"
                        alt="second-4star"
                    />
                    <img
                        className="w-50 w-md-50 banner-img"
                        src="/characterBannerImages/4star/beidou.webp"
                        alt="third-4star"
                    />
                </div>
                <div className="container d-flex flex-column justify-content-center">
                    <img
                        className="w-100 w-md-75 banner-img"
                        src="characterBannerImages/5star/raiden.webp"
                        alt="five-star"
                    />
                </div>
            </div>
        </div>
    );
}
