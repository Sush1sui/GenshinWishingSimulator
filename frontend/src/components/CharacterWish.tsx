import { useRef } from "react";
import BannerMessage from "./BannerMessage";

export default function CharacterWish() {
    const featuredFourStar1 = useRef(null);
    const featuredFourStar2 = useRef(null);
    const featuredFourStar3 = useRef(null);
    const featuredFiveStar = useRef(null);

    return (
        <div
            className="p-3 mt-2 rounded container-fluid h-auto h-md-75 d-flex flex-md-row flex-column"
            style={{ backgroundColor: "cornflowerblue" }}
        >
            <BannerMessage title="Character Wish" />
            <div className="w-100 w-md-50 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center gap-3">
                    <img
                        className="w-50 w-md-50 banner-img"
                        src="/characterBannerImages/4star/kuki-shinobu.webp"
                        alt="first-4star"
                        ref={featuredFourStar1}
                    />
                    <img
                        className="w-50 w-md-50 banner-img"
                        src="/characterBannerImages/4star/ningguang.webp"
                        alt="second-4star"
                        ref={featuredFourStar2}
                    />
                    <img
                        className="w-50 w-md-50 banner-img"
                        src="/characterBannerImages/4star/beidou.webp"
                        alt="third-4star"
                        ref={featuredFourStar3}
                    />
                </div>
                <div className="container d-flex flex-column justify-content-center">
                    <img
                        className="w-100 w-md-75 banner-img"
                        src="characterBannerImages/5star/raiden.webp"
                        alt="five-star"
                        ref={featuredFiveStar}
                    />
                </div>
            </div>
        </div>
    );
}
