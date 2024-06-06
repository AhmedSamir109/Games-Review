
import { detailsContent } from "./main.js";

export class Ui{
    constructor(){}

    DisplayGamesCategory(data){
        let gamesBox = ''

        for(let i =0 ; i<data.length ; i++){
            gamesBox +=`
            <div class="col-md-6 col-lg-4 col-xl-3 ">
                    <div class="mycard  my-border rounded-2 " data-id='${data[i].id}'>
                            <div class=" p-3 card-body">
                               
                                <figure>
                                <img src="${data[i].thumbnail}" alt="" class="w-100 rounded-2">
                                </figure>

                                <figcaption>
                                    <div class="d-flex justify-content-between">
                                        <h6 class="small text-light">${data[i].title}</h6>
                                        <span class="badge text-bg-primary p-2">Free</span>

                                    </div>
                                    <p class="text-center small card-text pt-1 "> ${data[i].short_description.slice(0,60)}... </p>
                                </figcaption>
                                
                            </div>
                            <footer class="footer-border d-flex justify-content-between align-items-center px-2 py-2 card-footer">
                                    <span class="small text-light badge badge-color">${data[i].genre}</span>
                                    <span class=" small text-light badge badge-color">${data[i].platform}</span>
                            </footer>
                            
                    </div>
            
        </div>
            `
        }

        console.log('ok')
        document.getElementById('gameData').innerHTML=gamesBox;
    }



    DisplayDetails(data){
        const cartona = `
                
               
                    <div class="col-md-5"> 
                        <div class="p-2">
                            <img src="${data.thumbnail}" alt="" class="w-100 rounded-2 mb-3">
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="p-2">
                            <h3 class="text-light py-2">Title: ${data.title}</h3>
                            <h5 class="text-light">Category: <span class="badge bg-info text-dark small">${data.genre}</span></h5>
                            <h5 class="text-light">Platform: <span class="badge bg-info text-dark small">${data.platform}</span></h5>
                            <h5 class="text-light">Status: <span class="badge bg-info text-dark small">${data.status}</span></h5>
                            <p class="text-light py-2">${data.description}</p>
                            <a class="btn btn-outline-warning text-light" href="${data.game_url}" target="_blank">Show Game</a>
                        </div>
                    </div>
                
        `

        detailsContent.innerHTML = cartona;
    }
}