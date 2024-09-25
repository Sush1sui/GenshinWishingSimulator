import React from "react";

export default function BannerMessage({
    title,
}: {
    title: "Character Wish" | "Weapon Wish";
}) {
    return (
        <div className="w-100 w-md-50 w-50 h-md-50 h-100 me-5 bg-light rounded mb-4 mb-md-0">
            <div
                className="w-50 d-flex justify-content-center my-3 mx-auto rounded text-light rounded h4 text-center py-2 px-3 fs-1"
                style={{
                    backgroundColor: "cornflowerblue",
                }}
            >
                {title}
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
                    Every 10 wishes is guaranteed to include at least one 4-star
                    or higher item.
                </p>
                <p
                    className="fs-4 p-3 text-light"
                    style={{
                        backgroundColor: "cornflowerblue",
                        letterSpacing: "1px",
                    }}
                >
                    I, Sush1sui do not own any of these graphics. This project
                    is for personal and educational purposes only, and this
                    website was made only for me to practice my coding skills
                    and share it to public to get critics and use it to enhance
                    my skills.
                </p>
            </div>
        </div>
    );
}
