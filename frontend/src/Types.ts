export interface FeaturedWishStateType {
    featuredFourStar1: string;
    featuredFourStar2: string;
    featuredFourStar3: string;
    featuredFiveStar: string;
}

export type FeaturedWishActionType =
    | { type: "change-4star1"; payload: string }
    | { type: "change-4star2"; payload: string }
    | { type: "change-4star3"; payload: string }
    | { type: "change-5star"; payload: string };
