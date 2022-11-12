import { createClient } from '@supabase/supabase-js'
import { TimelineGenerator } from '../../pages'


const PROJECT_URL = "https://ppxkdxcjrirlexpuvsii.supabase.co"     
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBweGtkeGNqcmlybGV4cHV2c2lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTg3MjYsImV4cCI6MTk4Mzc3NDcyNn0.IaN19spd7fAI3IUfndErwSG7CrLmC-H_alBy639TOgA"
const supabase = createClient(PROJECT_URL, API_KEY)

export function videoService(setPlaylists){
    return{
        getAllVideos(){
            return supabase.from('video').select("*")  
        }, 
        
        reload(){
            supabase.from('*')
                .on('*', (payload) => {
                    console.log(payload)
                    TimelineGenerator(this, setPlaylists)
                })
            .subscribe()
        }
    }
}

