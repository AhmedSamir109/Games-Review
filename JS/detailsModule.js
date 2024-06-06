import { games,details ,loading } from "./main.js";
import { Ui } from "./uiModule.js";

export class Details {
    constructor(id){

        this.ui = new Ui();

        document.getElementById('closeBtn').addEventListener('click' , ()=>{
            
            games.classList.remove('d-none')
            details.classList.add('d-none')
        })
        

        this.GetDetails(id);

    }


    async GetDetails(gameId){

        loading.classList.remove('d-none')

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'af401d3de2msh746a50d0660541cp17d168jsnaf43df48f2e1',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,options);
        const data = await response.json();

        console.log(data);
        
        this.ui.DisplayDetails(data);

        loading.classList.add('d-none')


    }
}