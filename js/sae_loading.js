// Initialisation des variables et des tableaux vides pour simplifier la manipulation des objets
let sae_number = Object.keys(SAE);
let title = [];
let comp = [];
let zone_projects = ""

// Ajout des valeurs dans les tableaux via une boucle
for (let i = 0; i < sae_number.length; i++) {
    title.push(SAE[sae_number[i]].titre);
    comp.push(SAE[sae_number[i]].compétences);
}

// Boucle d'ajout de chaque SAE dans une chaîne de caractères
for(let t = 0; t<sae_number.length; t++) {
    let tmp = ""
    // Décomposition des compétences multiples et insertion dans un marquee
    // if(comp[t].length>1) {
    //     let tmp2 =""
    //     comp[t].forEach(e => {
    //         tmp2+=e+" ";
    //     })
        
    //     tmp+='<div class="skills-tag"><marquee direction="left" scrollamount="6">'+tmp2+'</marquee></div>';
    // }
    
    // Ajout d'une compétence unique dans une div
        tmp+='<div class="skills-tag">'+comp[t]+'</div>'
    

    // Construction de la carte projet avec les valeurs
    zone_projects += `<div onclick="location.href='sae_detail.html?sae=${sae_number[t]}'" class="project-card" style="cursor: pointer;">
                    <div class="project-content">
                        <h3>${sae_number[t]}</h3>
                        <p>${title[t]}</p>
                        ${tmp}
                    </div>
                </div>`
}

// Insertion du contenu généré dans la div des projets
document.querySelector(".projects-grid").innerHTML = zone_projects