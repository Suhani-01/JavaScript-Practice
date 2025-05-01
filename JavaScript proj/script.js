document.addEventListener("DOMContentLoaded",function(){
    const searchButton=document.getElementById("search-button");
    const usernameInput=document.getElementById("user-input");

    const statsContainer=document.querySelector(".stats-container");

    const easyProgressCircle=document.querySelector(".easy-progress");
    const mediumProgressCircle=document.querySelector(".medium-progress");
    const hardProgressCircle=document.querySelector(".hard-progress");

    const easyLabel=document.getElementById("easy-label");
    const mediumLabel=document.getElementById("medium-label");
    const hardLabel=document.getElementById("hard-label");

    const cardsStatsContainer=document.querySelector(".stats-card");

    //to display data called by fetchUserData function
    function displayUserData(data){
        
    }

    //return true or false based on regular expression
    function validateUserName(username){
        if(username.trim()==""){
            alert("Username should not be empty");
            return false;
        }

        const regex = /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,18}[a-zA-Z0-9]$/;
        const isMatching = regex.test(username); //true or false

        if(!isMatching){
            alert("Invalid Username!!!");
        }
        return isMatching;
    }

    //to call API
    async function fetchUserData(username){
        const url=`https://leetcode-stats-api.herokuapp.com/${username}`;

        try{
            searchButton.textContent = "Searching....."
            searchButton.disabled = true;

            const response=await fetch(url);

            if(!response.ok){
                throw new Error("Unable to fetch the user Details.....");
            }
            const data=await response.json();
            console.log("Loging data : ",data);
            displayUserData(data);
        }
        catch(error){
            statsContainer.innerHTML=`<p>No Data Found</p>`
        }finally{
            searchButton.textContent = "Search"
            searchButton.disabled = false;
        }


    }

    searchButton.addEventListener('click',function(){
        const userName=usernameInput.value;
        console.log("logging username : ",userName);

        if(validateUserName(userName)){

            fetchUserData(userName); //fecting data............
        }
    })
})