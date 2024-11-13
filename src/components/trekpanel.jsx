import styled from "@emotion/styled";

import { color_background, color_element, color_element_text, color_offwhite, color_title, color_gradient_A, color_title_hover, color_title_active} from "../variables/colors";
import { laptop, tablet, phone } from "../variables/screens";
import { NavLink, Outlet } from "react-router-dom";

const nav_width_desktop = "20rem";
const nav_width_laptop = "15rem";
const nav_width_tablet = "12rem";
const nav_width_phone = "2rem";

/*

  Overarching Griod Layout

*/
const PanelGrid = styled.div`
  grid-area: main;
  height: 100%;
  display: grid;
  grid-template-areas: 
    "navheader contentheader titleheader titlecap"
    "navarea content content content"
    "navfooter contentbottom contentbottom contentcap";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr auto auto;

  h1 {
      font-family: "Saira Extra Condensed", sans-serif;
      font-weight: normal;
      font-style: normal;

      font-size: 4rem;
      @media (max-width: ${laptop}) {
        font-size: 3.5rem;
      }
      @media (max-width: ${tablet}) {
        font-size: 3.5rem;
      }
      @media (max-width: ${phone}) {
        font-size: 2rem;
      }
      
      
      margin: 0;
    }

    p {
      font-size: 1.5rem;

      @media (max-width: ${phone}) {
        font-size: 1rem;
      }
    }
`

/*

  Title and Top Bar

*/
const ContentHeader = styled.div`
  background-image: linear-gradient(270deg, ${color_element}, ${color_gradient_A});
  grid-area: contentheader;
`
const Title = styled.div`
  grid-area: titleheader;
  background-color: ${color_background};
  color: ${color_title};


  font-size: 8rem;
  line-height: 6rem;
  @media (max-width: ${laptop}) {
    font-size: 8rem;
    line-height: 6rem;
  }
  @media (max-width: ${tablet}) {
    font-size: 4rem;
    line-height: 3rem;
  }
  @media (max-width: ${phone}) {
    font-size: 4rem;
    line-height: 3rem;
  }


  padding: 0rem;
  font-family: "Saira Extra Condensed", sans-serif;
  font-weight: normal;
  font-style: normal;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

// Round cap on the right side of the title.
const RightCap = styled.div`
  grid-area: titlecap;
  width: min-content;

  display: flex;
  flex-direction: row;
  
  div.square{
    background-color: ${color_element};
    width: 0px;
  }
  div.circle{
    background-color: ${color_element};
    width: 50px;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
  }
`

/*

  Nav Area

*/
const NavHeader = styled.div`
  grid-area: navheader;
  width: ${nav_width_desktop};
  @media (max-width: ${laptop}) {
    width: ${nav_width_laptop};
  }
  @media (max-width: ${tablet}) {
    width: ${nav_width_tablet};
  }
  @media (max-width: ${phone}) {
    width: ${nav_width_phone};
  }


  border-top-left-radius: 20rem;
  background-color: ${color_gradient_A};

  
`

const NavWrapper = styled.div`
  grid-area: navarea;
  height: 100%;
  width: ${nav_width_desktop};
  @media (max-width: ${laptop}) {
    width: ${nav_width_laptop};
  }
  @media (max-width: ${tablet}) {
    width: ${nav_width_tablet};
  }
  @media (max-width: ${phone}) {
    width: ${nav_width_phone};
  }

  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  background-image: linear-gradient(${color_gradient_A}, 10%, ${color_title} , 90%, ${color_gradient_A});

  nav {
    margin-top: 5rem;
    padding-bottom: 15px;
    background-color: ${color_background};
    width: 100%;
    height: min-content;
    @media (max-width: ${phone}) {
      margin-top: 5rem;
    }
  }

  a {
    text-decoration: none;
    height: 5rem;
    width: 100%;
    margin-top: 15px;

    font-family: "Saira Extra Condensed", serif;
    color: ${color_background};
    font-size: 3.5rem;
    @media (max-width: ${laptop}) {
      font-size: 3rem;
    }

    @media (max-width: ${tablet}) {
      font-size: 2.0rem;
      height: 2.5rem;
    }
    @media (max-width: ${phone}) {
      font-size: 1.5rem;
      height: 2rem;
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
    }

    div.icobutton {
      height: 100%;
      aspect-ratio: 1/1;
      border-radius: 5px;
      background-color: ${color_title};
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
`

/*

  Content Stuff

*/
const PageContentWrapper = styled.div`
  grid-area: content;
  min-height: 50rem;
  //background-color: ${color_element};
  background-image: linear-gradient(${color_gradient_A}, 10%, ${color_title} , 90%, ${color_gradient_A});
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const PageContentBlackout = styled.div`
  background-color: ${color_background};
  height: 100%;
  width: 100%;
  border-top-left-radius: 75px;
  border-bottom-left-radius: 75px;

  @media (max-width: ${laptop}) {
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
  }
  @media (max-width: ${tablet}) {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  @media (max-width: ${phone}) {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`

const PageContent = styled.div`
  color: ${color_offwhite};
  margin-top: 45px;
  margin-left: 75px;
  margin-right: 50px;

  @media (max-width: ${laptop}) {


  }

  @media (max-width: ${tablet}) {


  }

  @media (max-width: ${phone}) {
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 1px;
  }
`

const NavFooter = styled.div`
  grid-area: navfooter;
  height: 5rem;
  border-bottom-left-radius: 20rem;
  background-color: ${color_gradient_A};
`

const ContentFooter = styled.div`
  grid-area: contentbottom;
  width: 100%;
  background-image: linear-gradient(270deg, ${color_element}, ${color_gradient_A});
`

const ContentFooterCap = styled.div`
  grid-area: contentcap;
  background-color: ${color_element};
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
`

export function TrekPanel(props) {
  const {children, title, mobile} = props
  return (
    <PanelGrid>
        <Title>{title}</Title>
        <RightCap>
          <div className="square"/>
          <div className="circle"/>
        </RightCap>

        <NavHeader/>
        
        <NavWrapper>
          {mobile
            ? // Mobile
              <nav>
                <NavLink to="/">
                  <div className="icobutton"/>
                </NavLink>
                <NavLink to="/portfolio">
                  <div className="icobutton"/>
                </NavLink>
                <NavLink to="/other">
                  <div className="icobutton"/>
                </NavLink>
                <NavLink to="/connect">
                  <div className="icobutton"/>
                </NavLink>
              </nav>
            : // Tablet, Laptop, Desktop
              <nav>
                <NavLink to="/">
                  <div className="icobutton"/>
                  <div className="textbutton">Home</div>
                </NavLink>
                <NavLink to="/portfolio">
                  <div className="icobutton"/>
                  <div className="textbutton">Portfolio</div>
                </NavLink>
                <NavLink to="/other">
                  <div className="icobutton"/>
                  <div className="textbutton">Other</div>
                </NavLink>
                <NavLink to="/connect">
                  <div className="icobutton"/>
                  <div className="textbutton">Connect</div>
                </NavLink>
            </nav>
          }
          
        </NavWrapper>

        <ContentHeader/>
        <PageContentWrapper>
          <PageContentBlackout>
            <PageContent>
              {children || <Outlet />}
            </PageContent>
          </PageContentBlackout>
        </PageContentWrapper>
        <NavFooter/>
        <ContentFooter/>
        <ContentFooterCap/>

    </PanelGrid>
  )
}
