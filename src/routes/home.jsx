import styled from "@emotion/styled"

import { TrekPanel } from "../components/trekpanel"

const HomeStyle = styled.div`
  width: 90%;
  p {
    font-size: 1.5em;
  }
`

export function Home() {
  return (
    <TrekPanel title="WELCOME">
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