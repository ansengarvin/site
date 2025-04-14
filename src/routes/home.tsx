import styled from "@emotion/styled"
import { TrekPanel } from "../components/trekpanel"

const HomeStyle = styled.div`
  width: 100%;
  
`

export function Home(props) {
  return (
    <TrekPanel title="WELCOME">
      <HomeStyle>
        <h1>
          Hello. My name is Ansen.
        </h1>
        <p>
          I'm a tech enthusiast and programmer based in the Pacific Northwest. I have a passion for creating technology that aims to improve peoples' day-to-day lives,
          either by improving their workflow or giving them something fun to do. I have a wide range of experience, and I'm always looking for new opportunities to learn
          and grow.
        </p>
      </HomeStyle>
      
    </TrekPanel>
  )
}