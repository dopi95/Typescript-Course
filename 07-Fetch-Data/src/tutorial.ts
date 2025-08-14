//Fetch Data

import { z } from 'zod'

const url = 'http://www-course-api.com/react-tour-project';

const tourSchema = z.object({
    id: String(),
    name: String(),
    info: String(),
    image: String(),
    price: String()

})

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string):Promise<Tour[]>{
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawData: Tour[] = await response.json();
        const result = tourSchema.array().safeParse(rawData);
        
        if(!result.success){
            throw new Error (`Invalid data: {result.error}`)
        }

        return result.data;
        
    } catch(error){
        const errorMsg = 
        error instanceof Error ? error.message: "there was an error..."
        console.log(errorMsg);
        return [];
        
    }
}

const tours = await fetchData(url);
tours.map((tour)=>{
    console.log(tour.name);
    
})


