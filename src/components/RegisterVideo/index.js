import { useState } from 'react'
import { StyledRegisterVideo} from './style'


function useForm(props){
    const [values, setValues] = useState(props)
    return{
        values,
        handleChange:
                (e) =>{
                const value = e.target.value
                const name = e.target.name
                setValues(
                    {
                        ...values,
                        [name]: value
                    })
            },
            clearForm(){
                setValues({
                        title: "",
                        url: ""
                })
            }
        } 
    }
    


export function RegisterVideo(){
    const formRegister = useForm({
            title: "",
            url: ""
    })
    const [formVisible, setFormVisible] = useState(false)

    return(
        <StyledRegisterVideo>
            <button 
                className='add-video' 
                onClick={() =>    
                    {
                        setFormVisible(true) 
                    }
                } 
            >
                +
            </button>
            {formVisible 
                ? (
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault() 
                            setFormVisible(false)
                            }}
                    >
                        <div>
                            <button 
                                type='button'
                                className='close-modal' 
                                onClick={() => setFormVisible(false) }
                            >
                                X
                            </button>
                            <input 
                                placeholder='Título do vídeo' 
                                name='title'
                                value={formRegister.values.title} 
                                onChange={formRegister.handleChange} 
                            />
                            <input 
                                placeholder='URL'
                                name='url' 
                                value={formRegister.values.url}
                                onChange={formRegister.handleChange}       
                            />
                            <button type="submit" onClick={() => {
                                setFormVisible(false) 
                                formRegister.clearForm()
                                }
                            }>
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false }
        </StyledRegisterVideo>
    )
}