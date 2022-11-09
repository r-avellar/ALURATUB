import { useState } from 'react'
import { Menu } from '../src/components/Menu'
import { Timeline } from '../src/components/Timeline'
import { Header } from '../src/components/Header'
import user from "../config.json"

function HomePage() {
    const [filterValue, setFilterValue] = useState("");

    return (
            <div style={{ display: "flex",flexDirection: "column",flex: 1 }}>
                <Menu  filterValue={filterValue} setFilterValue={setFilterValue}/>
                <Header name={user.name} job={user.job} github={user.github} />
                <Timeline searchValue={filterValue} playlists={user.playlists}/>
            </div>
       
    )
  }
  
export default HomePage