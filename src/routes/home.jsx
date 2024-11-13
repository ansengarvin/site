import styled from "@emotion/styled"
import { laptop, tablet, phone } from "../variables/screens";

import { TrekPanel } from "../components/trekpanel"
import { useOutletContext } from "react-router-dom";

const HomeStyle = styled.div`
  width: 100%;
  
`

export function Home(props) {
  const mobile = useOutletContext()
  return (
    <TrekPanel title="WELCOME" mobile={mobile}>
      <HomeStyle>
        <h1>
          Hello. My name is Ansen.
        </h1>
        <p>
          I'm a software engineer based in the pacific northwest. I have a passion for creating technology that aims to improve peoples' day-to-day lives.
          I have experience in mobile, desktop, and full-stack web development. I am always looking for new opportunities to learn and grow as a developer.
        </p>
      </HomeStyle>
      
    </TrekPanel>
  )
}