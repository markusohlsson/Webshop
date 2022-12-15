// About us //
export function aboutus(){
    let container:HTMLDivElement = document.getElementById("aboutUsContainer") as HTMLDivElement;
    let title:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
    let text:HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
    let icon:HTMLElement = document.createElement("i") as HTMLElement;
  
    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(icon);
    title.innerHTML="Om oss.";
    text.innerHTML= "Dormys resa har sin början på Askersunds Golfklubb, en trekvarts bilfärd utan för Örebro. Fågelvägen cirka 18 mil väster om Stockholm. En solig sommardag år 1988 tröttnar en ambitiös men rastlös fjortonåring vid namn Mats Hedlund på att plocka bollar på rangen. Han frågar klubbens pro Lars Johansson om han istället kan få hoppa in och jobba i golfshoppen, vilket han får.";
  
    container.style.display="flex";
    icon.className="fa-solid fa-x";
    icon.addEventListener ("click", function (event){
      container.style.display="none";
      container.innerHTML="";
    }
    
  }  
  
