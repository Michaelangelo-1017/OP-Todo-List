const loadHomePage = function(){
    const openingHours = ["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: Closed for the Sabbath"];
    const contentDiv = document.getElementById("content");
    const divsCont = document.createElement("div");
    divsCont.id = "divs-cont"
    const title = document.createElement("h1");
    title.innerText = "Heaven's Gate Restaurant";
    contentDiv.appendChild(title);
    const introDiv = document.createElement("div");
    introDiv.setAttribute("class","info-cont");
    const introDivP = document.createElement("p");
    introDivP.innerText = "Heaven's Gate has the best meals! The atmosphere and customer service is heavenly(no pun intended lol) and the actual food are delicious enough to die and reincarnate for! This is definitely the kind of place fit for an angel.";
    const introDivPName = document.createElement("p");
    introDivPName.innerText = "- Michaelangelo"
    introDivPName.setAttribute("class","reviewer");
    introDiv.appendChild(introDivP);
    introDiv.appendChild(introDivPName);
    divsCont.appendChild(introDiv);
    const hoursDiv = document.createElement("div");
    hoursDiv.setAttribute("class","info-cont");
    const hoursDivH2 = document.createElement("h2");
    hoursDivH2.innerText = "Opening Hours";
    hoursDiv.appendChild(hoursDivH2);
    openingHours.forEach((day)=>{
        const hoursDivP = document.createElement("p");
        hoursDivP.innerText = day;
        hoursDiv.appendChild(hoursDivP);
    })
    divsCont.appendChild(hoursDiv);
    const locationDiv = document.createElement("div");
    locationDiv.setAttribute("class","info-cont")
    const locationDivH2 = document.createElement("h2");
    locationDivH2.innerText = "Location";
    locationDiv.appendChild(locationDivH2);
    const locationDivP = document.createElement("p");
    locationDivP.innerText = "71-75 Firmament Street, Skyline, Heaven.";
    locationDiv.appendChild(locationDivP);
    divsCont.appendChild(locationDiv);
    contentDiv.appendChild(divsCont)
}

export default loadHomePage;