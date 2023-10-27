function toggleMode() {
    const html = document.documentElement

    // Switch light and dark
    html.classList.toggle('light')
    
    // Switch avatar
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', "./assets/avatar-light.png")        
    } else {
        img.setAttribute('src', "./assets/avatar.png")
    }
    
}
