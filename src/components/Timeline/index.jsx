import { StyledTimeline} from './style'

export function Timeline({ searchValue, ...props}){
    const playlistsNames = Object.keys(props.playlists)
    return(
       <>
            <StyledTimeline>
            <div>
                {playlistsNames.map(playlist =>{
                    const videos = props.playlists[playlist]
                    return(
                        <section>
                            <h2>{playlist}</h2>
                            <div>
                                {videos.filter(video =>{
                                    return video.title.toLowerCase().includes(searchValue.toLowerCase())
                                }).map(video =>{
                                    return(
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>{video.title}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </div>
            </StyledTimeline>
        
       </>

    )
}