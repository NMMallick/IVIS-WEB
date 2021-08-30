/* SIDEBAR */
let btn = document.querySelector("#btn"); 
let sidebar = document.querySelector(".sidebar"); 
let searchBtn = document.querySelector(".bx-search"); 

btn.onclick = function() {
    sidebar.classList.toggle("active"); 

    if(sidebar.classList.contains("active")) { 
        btn.classList.replace("bx-menu", "bx-chevron-left");
    } else { 
        btn.classList.replace("bx-chevron-left", "bx-menu")
    }
}

// searchBtn.onclick = function() {
//     sidebar.classList.toggle("active"); 
// }


/* HOME CONTENT */


// let home_content = "The Image Visualization and Infrared Spectroscopy (IVIS)" 
//                     + "Facility at the University of Pittsburgh is comprised of three laboratories (the Image Lab, the Planetary Lab, and the Spectroscopy Lab). " 
//                     + "It is designed to function as a state-of-the-art image analysis, infrared spectroscopy and planetary science resource." 
//                     + "The facility has been funded over the years through research grants totaling ~ seven million dollars from the " 
//                     + "National Aeronautics and Space Administration (NASA), the National Science Foundation (NSF) and the National Geographic Society (NGS). " 
//                     + "All the labs were renovated and upgraded in 2017, including development of this new website."; 

// let home_div = document.querySelector(".home-content");
// let home_info = document.createElement("div");
// home_info.classList.add("text"); 
// home_info.innerHTML += home_content;   
// home_div.appendChild(home_info); 




    