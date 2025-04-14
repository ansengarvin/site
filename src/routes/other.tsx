import styled from "@emotion/styled";
import { TrekPanel } from "../components/trekpanel";
import { color_element } from "../lib/defines/colors"

import {laptop, tablet, phone} from "../lib/defines/screenWidths"

const MiscWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 25px;
`

const MiscButton = styled.a`
    height: 100px;
    width: 350px;

    font: 3.0rem "Saira Extra Condensed", sans-serif;
    text-decoration: none;
    display: flex;
    color: black;

    @media (max-width: ${laptop}) {
        height: 75px;
        width: 300px;
        font-size: 2.75rem;
    }

    @media (max-width: ${tablet}) {
        height: 50px;
        width: 250px;
        font-size: 2.25rem;
    }

    @media (max-width: ${phone}) {
        height: 45px;
        width: 250px;
        font-size: 2.0rem;
    }

    display: flex;
    flex-direction: row;
    gap: 5px;
`

const NamePlate = styled.div`
    flex-grow: 1;
    width: auto;
    background-color: ${props => props.color || color_element};
    height: 100%;

    border-radius: 10px;
    padding-right: 10px;

    @media (max-width: ${phone}) {
        border-radius: 5px;
    }

    display: flex;
    justify-content: right;
    align-items: center;
`

const Icoplate = styled.div`
    height: 100%;
    aspect-ratio: 1/1;
    background-color: ${props => props.color || color_element};
    border-radius: 10px;

    @media (max-width: ${phone}) {
        border-radius: 5px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
`

export function Other() {
    return (
        <TrekPanel title="MISC">
            <h1>Other Stuff</h1>
            <MiscWrapper>
                <MiscButton href="/recipes">  
                    <NamePlate color="#b066be">Recipes</NamePlate>
                    <Icoplate color="#b066be"><i className="fa-solid fa-utensils"></i></Icoplate>
                </MiscButton>
                <MiscButton href="/d&d">  
                    <NamePlate color="#66a7be">D&D Tools</NamePlate>
                    <Icoplate color="#66a7be"><i className="fa-solid fa-dragon"></i></Icoplate>
                    
                </MiscButton>
            </MiscWrapper>
            
        </TrekPanel>
        
    )
}