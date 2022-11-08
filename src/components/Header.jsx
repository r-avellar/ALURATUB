import styled from 'styled-components'


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

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