import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import {
    navWidthDesktop,
    navWidthLaptop,
    navWidthPhone,
} from "../lib/defines/navWidths";
import { laptop, tablet, phone } from "../lib/defines/screenWidths";
import {
    color_gradient_A,
    color_background,
    color_title,
    color_title_hover,
    color_title_active,
} from "../lib/defines/colors";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { BriefcaseIcon } from "../assets/icons/BriefcaseIcon";
import { EnvelopeIcon } from "../assets/icons/EnvelopeIcon";

const NavWrapper = styled.div`
    grid-area: navarea;
    height: 100%;
    width: ${navWidthDesktop};
    @media (max-width: ${laptop}) {
        width: ${navWidthLaptop};
    }
    @media (max-width: ${tablet}) {
        width: ${navWidthPhone};
    }
    @media (max-width: ${phone}) {
        width: ${navWidthPhone};
    }

    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;

    background-image: linear-gradient(
        ${color_gradient_A},
        10%,
        ${color_title},
        90%,
        ${color_gradient_A}
    );

    nav {
        margin-top: 80px;
        background-color: ${color_background};
        width: 100%;
        height: min-content;

        display: flex;
        flex-direction: column;

        gap: 15px;
        padding-top: 15px;
        padding-bottom: 15px;

        @media (max-width: ${laptop}) {
            gap: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        @media (max-width: ${tablet}) {
            margin-top: 60px;
            gap: 5px;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        @media (max-width: ${phone}) {
            margin-top: 20px;
            gap: 5px;
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

    a {
        text-decoration: none;

        width: 100%;
        font-family: "Saira Extra Condensed", serif;
        color: ${color_background};
        font-size: 3rem;
        height: 4.5rem;
        @media (max-width: ${laptop}) {
            font-size: 2rem;
        }

        @media (max-width: ${tablet}) {
            font-size: 1.75rem;
            height: 2.25rem;
        }
        @media (max-width: ${phone}) {
            font-size: 1.5rem;
            height: 2.5rem;
        }

        display: flex;
        justify-content: right;
        align-items: center;
        gap: 10px;

        div.textbutton {
            flex-grow: 1;
            height: 100%;
            width: auto;
            border-radius: 5px;
            background-color: ${color_title};

            display: flex;
            justify-content: right;
            align-items: center;
            padding-right: 10px;

            @media (max-width: ${tablet}) {
                padding-right: 5px;
            }
        }

        div.icobutton {
            height: 100%;
            aspect-ratio: 1/1;
            border-radius: 5px;
            background-color: ${color_title};

            display: flex;
            justify-content: center;
            align-items: center;
        }

        &:hover {
            div.textbutton {
                background-color: ${color_title_hover};
            }
            div.icobutton {
                background-color: ${color_title_hover};
            }
        }

        &.active {
            div.textbutton {
                background-color: ${color_title_active};
            }
            div.icobutton {
                background-color: ${color_title_active};
            }
        }
    }
`;

interface NavBarProps {
    mobile: boolean;
}

export function NavBar(props: NavBarProps) {
    const { mobile } = props;
    return (
        <NavWrapper>
            {mobile ? (
                // Mobile
                <nav>
                    <NavLink to="/" aria-label="Home Page">
                        <div className="icobutton">
                            <HomeIcon
                                color={color_background}
                                filled={true}
                                dim={"85%"}
                            />
                        </div>
                    </NavLink>
                    <NavLink to="/portfolio" aria-label="Ansen's Portfolio">
                        <div className="icobutton">
                            <BriefcaseIcon
                                color={color_background}
                                filled={true}
                                dim={"85%"}
                            />
                        </div>
                    </NavLink>
                    {/* <NavLink to="/misc" aria-label="Miscellaneous hobbies and projects">
              <div className="icobutton">
                  <BookIcon
                      color={color_background}
                      filled={true}
                  />
              </div>
            </NavLink> */}
                    <NavLink to="/connect" aria-label="Connect with Ansen">
                        <div className="icobutton">
                            <EnvelopeIcon
                                color={color_background}
                                filled={true}
                                dim={"85%"}
                            />
                        </div>
                    </NavLink>
                </nav>
            ) : (
                // Tablet, Laptop, Desktop
                <nav>
                    <NavLink to="/" aria-label="Home Page">
                        <div className="icobutton">
                            <HomeIcon
                                color={color_background}
                                filled={true}
                                dim={"85%"}
                            />
                        </div>
                        <div className="textbutton">Home</div>
                    </NavLink>
                    <NavLink to="/portfolio" aria-label="Ansen's Portfolio">
                        <div className="icobutton">
                            <BriefcaseIcon
                                color={color_background}
                                filled={true}
                                dim={"85%"}
                            />
                        </div>
                        <div className="textbutton">Portfolio</div>
                    </NavLink>
                    {/* <NavLink to="/misc" aria-label="Miscellaneous hobbies and projects">
              <div className="icobutton">
                  <BookIcon
                      color={color_background}
                      filled={true}
                  />
              </div>
              <div className="textbutton">
                  Misc
              </div>
            </NavLink> */}
                    <NavLink to="/connect" aria-label="Connect with Ansen">
                        <div className="icobutton">
                            <EnvelopeIcon
                                color={color_background}
                                filled={true}
                                dim={"85%"}
                            />
                        </div>
                        <div className="textbutton">Connect</div>
                    </NavLink>
                </nav>
            )}
        </NavWrapper>
    );
}
