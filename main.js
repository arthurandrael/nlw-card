//stage 3
 const links = {
   github: "jakeliny",
   youtube: "jakelinygracielly",
   facebook: "maykbrito",
   twitter: "jakelinytec",
   instagram: "jakeliny.gracielly"
 }


 function changeLinks() {
   // userName.textContent = 'Marcelo Rocha' //Tem o mesmo efeito do DOM com o uso do getElement
   for (let li of socialLinks.children) {
     const social = li.getAttribute('class')
    
     li.children[0].href = `https://${social}.com/${links[social]}`
   }
 }

 changeLinks()


function getGitHubProfileInfos() {
  const url = `https://api.github.com/user/${links.github}`
}

fetch(url)
.then(response => response.json())
.then(data => {
  userName.textContent = data.name
  userBio.textContent = data.bio
  userLink.href = data.html_url
  userImage.src = data.avatar_url
  userLogin = data.login
  })
