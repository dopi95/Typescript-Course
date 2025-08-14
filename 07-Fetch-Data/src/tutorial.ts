//Fetch Data

const url = 'http://www-course-api.com/react-tour-project';

type Tour ={
    id:String;
    name:String;
    info:String;
    image:String;
    price:String;

}
async function fetchData(url: string):Promise<Tour[]>{
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
        
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


