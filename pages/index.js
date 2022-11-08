import { Menu } from '../src/components/Menu'
import { Timeline } from '../src/components/Timeline'
import { Header } from '../src/components/Header'
import user from "../config.json"
import { CSSReset } from '../src/components/CSSReset'

function HomePage() {

    return (
        <>
            <CSSReset />
            <div style={{ display: "flex",flexDirection: "column",flex: 1 }}>
                <Menu />
                <Header name={user.name} job={user.job} github={user.github} />
                <Timeline playlists={user.playlists}/>
            </div>
        </>
    )
  }
  
  export default HomePage