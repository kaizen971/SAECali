// Récupération du numéro de SAE depuis l'URL
let param = new URLSearchParams(location.search)
let num_sae = param.get("sae")

// Initialisation des variables utilisées dans le script
let sae_key = Object.keys(SAE)
let sae_index = sae_key.indexOf(num_sae)
let comp_html = ""
let ac_html = ""
let ressource_html = ""
let ac_key = Object.keys(SAE[num_sae].AC)
let ac_value = Object.values(SAE[num_sae].AC)
let ressource_key = Object.keys(SAE[num_sae].ressources)
let ressource_value = Object.values(SAE[num_sae].ressources)

// Mise à jour du contenu des éléments HTML avec innerHTML
document.querySelector(".sae-header>h3").innerHTML=sae_key[sae_index]
document.querySelector(".sae-header>h3:nth-child(2)").innerHTML=SAE[num_sae].titre
document.querySelector(".sae-header>h3:last-child").innerHTML="Semestre : " + SAE[num_sae].semestre
document.querySelector(".description>p").innerHTML=SAE[num_sae].description

// Création des divs pour chaque compétence
SAE[num_sae].compétences.forEach(element => {
    comp_html+='<div>'+element+'</div>'
});

// Création des paragraphes pour chaque AC
for(let i = 0; i<ac_key.length; i++) {
    ac_html += '<p><a class="ac-link" href="../pdf/'+num_sae+'.pdf" target="_blank">'+ac_key[i]+' : '+ac_value[i]+'</a></p>'
}

// Création des cartes de ressources
for(let j = 0; j<ressource_key.length; j++) {
    ressource_html += '<div class="resource-card"><h3>'+ressource_key[j]+'</h3><p>'+ressource_value[j]+'</p></div>'
}

// Insertion des compétences dans leur conteneur
document.querySelector(".skills").innerHTML=comp_html;

// Insertion des ressources dans leur conteneur
document.querySelector(".resource-container").innerHTML=ressource_html;

// Insertion des apprentissages critiques dans leur conteneur
document.querySelector(".AC").innerHTML=ac_html;