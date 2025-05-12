import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { navWidthDesktop, navWidthLaptop, navWidthPhone } from "../lib/defines/navWidths";
import { laptop, tablet, phone } from "../lib/defines/screenWidths";
import { color_background, color_title, color_title_hover, color_title_active } from "../lib/defines/colors";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { BriefcaseIcon } from "../assets/icons/BriefcaseIcon";
import { EnvelopeIcon } from "../assets/icons/EnvelopeIcon";
import React from "react";
import { BookIcon } from "../assets/icons/BookIcon";
import { IconProps } from "../assets/icons/common/IconProps";

interface NavBarLinkProps {
    mobile: boolean;
    name: string;
    to: string;
    aria: string;
    Icon: React.ComponentType<IconProps>;
}

function NavBarLink(props: NavBarLinkProps) {
    const { mobile, name, to, aria, Icon } = props;

    return (
        <NavLink to={to} aria-label={aria}>
            <div className="icobutton">
                <Icon color={color_background} filled={true} dim={"85%"} />
            </div>
            {mobile ? <></> : <div className="textbutton">{name}</div>}
        </NavLink>
    );
}

interface NavBarProps {
    mobile: boolean;
}

export function NavBar(props: NavBarProps) {
    const { mobile } = props;
    return (
        <NavWrapper>
            <NavBarLink mobile={mobile} name="Home" to="/" aria="Home Page" Icon={HomeIcon} />
            <NavBarLink mobile={mobile} name="Portfolio" to="/portfolio" aria="Personal Projects" Icon={BriefcaseIcon} />
            <NavBarLink mobile={mobile} name="Resume" to="/resume" aria="Personal Projects" Icon={BookIcon} />
            <NavBarLink mobile={mobile} name="Connect" to="/connect" aria="Connect with Ansen" Icon={EnvelopeIcon} />
        </NavWrapper>
    );
}

const NavWrapper = styled.nav`
    margin-top: 80px;
    grid-area: nav;
    background-color: ${color_background};
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
