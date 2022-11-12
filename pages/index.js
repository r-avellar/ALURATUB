import { useEffect, useState } from 'react'
import { Menu } from '../src/components/Menu'
import { Timeline } from '../src/components/Timeline'
import { Header } from '../src/components/Header'
import user from "../config.json"
import { videoService } from '../src/services/videoService'





function HomePage() {
    const [filterValue, setFilterValue] = useState("");
    const [playlists, setPlaylists] = useState({})
    const service = videoService(setPlaylists)

    useEffect(()=>{
      TimelineGenerator(service, setPlaylists)
      service.reload()

    }, [])

    return (
            <div style={{ display: "flex",flexDirection: "column",flex: 1 }}>
                <Menu  filterValue={filterValue} setFilterValue={setFilterValue}/>
                <Header name={user.name} job={user.job} github={user.github} />
                <Timeline searchValue={filterValue} playlists={playlists}/>
            </div>
       
    )
  }
  
export default HomePage

export function TimelineGenerator(service, setPlaylists) {
  return (service.getAllVideos()
    .then((dados) => {
      console.log(dados.data)
      const newPlaylists = {}
      dados.data.forEach((video) => {
        if (!newPlaylists[video.playlist]) {
          newPlaylists[video.playlist] = []
        }
        newPlaylists[video.playlist].push(video)
      })
      setPlaylists(newPlaylists)
    })
)}