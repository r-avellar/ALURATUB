import { Logo } from "../Logo";
import { Search } from "../Search";
import { DarkModeSwitch } from '../DarkModeSwitch'
import { StyledMenu } from './style'

export function Menu({ filterValue, setFilterValue }){
    return(
            <StyledMenu>
                <div>
                    <Logo />
                </div>
                <Search filterValue={filterValue} setFilterValue={setFilterValue}/>
                <DarkModeSwitch />
            </StyledMenu>     
    )
}