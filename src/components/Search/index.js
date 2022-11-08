import { StyledSearch } from './style'

export function Search({filterValue, setFilterValue}){
  
    return (
        <StyledSearch>
            <input type="text"  onChange={(e) => setFilterValue(e.target.value)} value={filterValue}/>
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}