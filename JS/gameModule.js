import { Ui } from "./uiModule.js";
import { loading , games , details } from "./main.js";
import { Details } from "./detailsModule.js";

export class Games {

    constructor(){

       this.changeActiveLink()
       this.GetGames()

       this.ui = new Ui()
      console.log(loading)
      
    }

    
    changeActiveLink(){
        document.querySelectorAll('.nav-link').forEach( (link) => {
            link.addEventListener('click' , async (e)=>{

                document.querySelector('.navbar-nav .active').classList.remove('active');
                link.classList.add('active');

                // const category = link.dataset.category
                // console.log(category)

                this.GetGames(link.innerHTML);

        

            })
        })
    }

   async GetGames(cat = 'mmorpg'){

    loading.classList.remove('d-none')

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'af401d3de2msh746a50d0660541cp17d168jsnaf43df48f2e1',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
             }
         };

        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` , options);
        const Data = await response.json();

        loading.classList.add('d-none')

        this.ui.DisplayGamesCategory(Data)


         // click to get game details
        document.querySelectorAll('.mycard').forEach((card) =>{
            card.addEventListener('click' , () =>{

                const id = card.dataset.id ;
               
                new Details(id)
                 
                //to hide gameCats Section and appear game Details Section
                games.classList.add('d-none')
                details.classList.remove('d-none')

            })
        })
        
        
    }


    

    
}


