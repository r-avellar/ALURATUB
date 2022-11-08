import { StyledHeader } from './style'

export function Header(props){
    return(
        <StyledHeader>
            <section className='user-info'>
                <img src={`https://www.github.com/${props.github}.png`} />
               <div>
                <h2>{props.name}</h2>
                <p>{props.job}</p>
               </div>
            </section>
        </StyledHeader>
    )
}