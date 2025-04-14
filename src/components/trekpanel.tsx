import styled from "@emotion/styled";

import { color_background, color_element, color_offwhite, color_title, color_gradient_A} from "../lib/defines/colors";
import { laptop, tablet, phone } from "../lib/defines/screenWidths";
import { Outlet } from "react-router-dom";

import { NavBar } from "./navbar";
import { navWidthDesktop, navWidthPhone, navWidthTablet } from "../lib/defines/navWidths";



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
        font-size: 3.0rem;
      }
      @media (max-width: ${phone}) {
        font-size: 2rem;
      }
      
      
      margin: 0;
    }

    h2 {
      font-weighT: normal;
      font-style: normal;
      padding: 0;
      margin: 0;

      margin-bottom: 2rem;

      font-size: 3rem;

      @media (max-width: ${laptop}) {
        font-size: 2.5rem;
      }

      @media (max-width: ${tablet}) {
        font-size: 2rem;
      }

      @media (max-width: ${phone}) {
        font-size: 1.0rem;
      }
    }

    p {
      font-size: 1.5rem;

      @media (max-width: ${phone}) {
        font-size: 0.90rem;
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
    font-size: 3.0rem;
    line-height: 2.3rem;
  }


  padding: 0rem;
  padding-left: 3px;
  padding-right: 3px;
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
  width: ${navWidthDesktop};
  @media (max-width: ${laptop}) {
    width: ${navWidthPhone};
  }
  @media (max-width: ${tablet}) {
    width: ${navWidthTablet};
  }
  @media (max-width: ${phone}) {
    width: ${navWidthPhone};
  }


  border-top-left-radius: 20rem;
  background-color: ${color_gradient_A};
`

/*

  Content Stuff

*/
const PageContentWrapper = styled.div`
  grid-area: content;
  min-height: 100%;
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

  display: flex;
  justify-content: center;

  @media (max-width: ${laptop}) {
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
  }
  @media (max-width: ${tablet}) {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  @media (max-width: ${phone}) {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`

const PageContent = styled.div`
  color: ${color_offwhite};
  width: 90%;

`

// Footer stuff

const NavFooter = styled.div`
  grid-area: navfooter;
  border-bottom-left-radius: 20rem;
  background-color: ${color_gradient_A};

  height: 25px;
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

interface TrekPanelProps {
  children: React.ReactNode,
  title: string,
  mobile: boolean,
  type: string
}


export function TrekPanel(props: TrekPanelProps) {
  const {children, title, mobile, type} = props
  return (
    <PanelGrid>
        <Title>{title}</Title>
        <RightCap>
          <div className="square"/>
          <div className="circle"/>
        </RightCap>

        <NavHeader/>
        <NavBar mobile={mobile} type={type}/>
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
