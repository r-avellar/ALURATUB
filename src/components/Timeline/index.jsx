import { StyledTimeline} from './style'

export function Timeline(props){
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
                                {videos.map(video =>{
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