export  class uiGames {
    constructor(){
     this.navLinks =document.querySelectorAll('.navLinks a')
        this.navlinks = [...this.navLinks];
        this.categoryname;
        this.getGames(categoryname)
       
    }  
   
    async  getGames(navlinks,categoryname){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '15a178694cmshfbf69d3921a7dd1p13fad2jsnbe65031aae76',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api =await   fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=${categoryname}&sort-by=release-date`, options)
        let response =await api.json();
        let result =response;
        let allGames =result;
        let game=``;
      for(let i=0;i<allGames.length;i++){
      game+=`
      <div class="col-md-3">
      <div class="gameItem p-4 text-center">
          <img class="w-100 h-25" src="${allGames[i].thumbnail}" alt="games">
          <div class="d-flex m-2 justify-content-between"> 
          <h5 id="title" class="text-light" >${allGames[i].title}</h5>
          <button class="btn btn-primary btn-sm">Free</button>  </div>
          <p class="text-muted">${allGames[i].short_description}</p>
      <div class="btns d-flex justify-content-between">
          <button class="btn btn-dark btn-sm text-white">ARBG</button>
          <button class="btn btn-dark btn-sm text-white">pc(windows)</button>
      </div>
      </div>
  </div>
      `
    }
    document.getElementById('gameContainer').innerHTML=game 

    for(let i=0;i<navlinks.length;i++){
        this.navlinks[i].addEventListener('click',function(eventInfo){
    let categoryname= eventInfo.target.getAttribute('data-code');
    console.log(categoryname);
   
        })
    }
    }
    
   




    }
