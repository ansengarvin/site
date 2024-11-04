import styled from "@emotion/styled";

import { color_background, color_element, color_element_text, color_offwhite, color_title, color_gradient_A} from "../variables";
import { NavLink } from "react-router-dom";

/*

  Overarching Griod Layout

*/
const PanelGrid = styled.div`
  grid-area: main;
  height: 100%;
  display: grid;
  grid-template-areas: 
    "navheader contentheader titleheader titlecap"
    "navarea content content content";
  grid-template-rows: auto 1fr auto auto;
  grid-template-columns: 0.3fr 1fr auto auto;
`

/*

  Title and Top Bar

*/
const ContentHeader = styled.div`
  background-image: linear-gradient(225deg, ${color_element}, ${color_gradient_A});
  grid-area: contentheader;
  background-color: ${color_element};
`
const Title = styled.div`
  grid-area: titleheader;
  background-color: ${color_background};
  color: ${color_title};
  font-size: 12rem;
  line-height: 8.5rem;
  padding: 0rem;
  font-family: "Saira Extra Condensed", serif;
  font-weight: normal;
  font-style: normal;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

const RightCap = styled.div`
  grid-area: titlecap;
  width: 5rem;
  background-color: ${color_element};
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
`

/*

  Nav Area

*/
const NavHeader = styled.div`
  grid-area: navheader;
  border-top-left-radius: 20rem;
  background-color: ${color_gradient_A};
`

const NavWrapper = styled.div`
  grid-area: navarea;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(${color_gradient_A}, ${color_title} 30%);

  nav {
    margin-top: 10rem;
    background-color: ${color_background};
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: ${color_background};
    background-color: ${color_title};
    border-radius: 5px;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`

const PageContentWrapper = styled.div`
  grid-area: content;
  //background-color: ${color_element};
  background-image: linear-gradient(${color_gradient_A}, ${color_title} 30%);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const PageContentBlackout = styled.div`
  background-color: ${color_background};
  height: 100%;
  width: 100%;
  border-top-left-radius: 5rem;
`

const PageContent = styled.div`
  color: ${color_offwhite};
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
`



export function Home() {
  return (
    <PanelGrid>
        <Title>
          ABOUT
        </Title>
        <RightCap/>
        <NavHeader/>
        <NavWrapper>
          <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </NavWrapper>
        <ContentHeader/>
        <PageContentWrapper>
          <PageContentBlackout>
            <PageContent>
              <p>
                Hi! I'm a software engineer based in the San Francisco Bay Area. I have a passion for creating software that is both useful and beautiful. I have experience in full-stack web development, mobile development, and cloud infrastructure. I am always looking for new opportunities to learn and grow as a developer.
              </p>
            </PageContent>
          </PageContentBlackout>
        </PageContentWrapper>
    </PanelGrid>
  )
}
