import { useState } from 'react'
import { StyledRegisterVideo} from './style'
import { createClient } from '@supabase/supabase-js'


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
                        url: "",
                        thumb: "",
                        playlist: ""
                })
            }
        } 
    }
  
function getThumbnail(url){
    return `https://img.youtube.com/vi/${url.substring(32,43)}/hqdefault.jpg`
}

const PROJECT_URL = "https://ppxkdxcjrirlexpuvsii.supabase.co"     
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBweGtkeGNqcmlybGV4cHV2c2lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTg3MjYsImV4cCI6MTk4Mzc3NDcyNn0.IaN19spd7fAI3IUfndErwSG7CrLmC-H_alBy639TOgA"
const supabase = createClient(PROJECT_URL, API_KEY)

export function RegisterVideo(){
    const formRegister = useForm({
          initialValues:{  title: "",
            url: "",
            thumb: "",
            playlist: ""
            }
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

                            supabase.from("video").insert({
                                title:formRegister.values.title,
                                url:formRegister.values.url,
                                thumb:getThumbnail(formRegister.values.url),
                                playlist:formRegister.values.playlist
                            }).then((response) =>{
                                console.log(response)
                            })
                            .catch((err) =>{
                                console.log(err)
                            })


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
                             <input 
                                placeholder='Playlist'
                                name='playlist' 
                                value={formRegister.values.playlist}
                                onChange={formRegister.handleChange}       
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false }
        </StyledRegisterVideo>
    )
}