let div = document.getElementsByClassName('data')[0]




async function getdata() {
    const response = await fetch('http://localhost:1337/')
    const data = await response.json()
    div.textContent = data.message
}

getdata()