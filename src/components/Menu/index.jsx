import { Logo } from "../Logo";
import { Search } from "../Search";
import { StyledMenu } from './style'

export function Menu({ filterValue, setFilterValue }){
    return(
        <>
            <StyledMenu>
                <div>
                    <Logo />
                </div>
                <Search filterValue={filterValue} setFilterValue={setFilterValue}/>
            </StyledMenu>
                
        </>
        
    )
}