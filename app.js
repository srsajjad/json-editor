let ul = document.querySelector('ul')

let file = document.querySelector('#myFile')

document.querySelector('#plus').addEventListener('click', handleClick)
document.querySelector('#export').addEventListener('click', handleExport)
file.addEventListener('change', handleFile)


function handleFile(e) {

  let myFile = e.target.files[0]

  if (myFile.name.endsWith('.json')) {

    let fileReader = new FileReader()

    fileReader.onload = function (event) {

      let myText = event.target.result
      let uploadedObj = JSON.parse(myText)

      Object.keys(uploadedObj).forEach((n) => {
        let li = document.createElement('li')
        li.innerHTML = `<input class='input1' value=${n}></input> : <input class='input2' value=${uploadedObj[n]}></input><br><br>`
        ul.appendChild(li)
      })

    }

    fileReader.readAsText(myFile)
  } else {
    alert('file has to be a json file')
  }
}



function handleClick() {
  let li = document.createElement('li')
  li.innerHTML = "<input class='input1'></input> : <input class='input2'></input><br><br>"
  ul.appendChild(li)
}




function handleExport() {

  let obj = {}

  let liArr = document.querySelectorAll('li')

  liArr.forEach((n, i) => {

    if (n.children[0].value && n.children[1].value) {

      obj[n.children[0].value] = n.children[1].value
    } else {
      console.log('nothing to add')
    }

    if (i === liArr.length - 1) {

      console.log(obj)

      let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj,null,2))

      let dnld = document.createElement('a')

      dnld.setAttribute("href", dataStr)

      dnld.setAttribute("download", "data.json")

      dnld.click()
    }

  })
}