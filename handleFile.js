let handleFile = e => {
  let myFile = e.target.files[0]

  if (myFile.name.endsWith('.json')) {
    let fileReader = new FileReader()

    fileReader.onload = event => {
      let myText = event.target.result
      let uploadedObj = JSON.parse(myText)

      Object.keys(uploadedObj).forEach(n => {
        let li = ce('li')
        li.innerHTML = `<input class='input1' value=${n}></input> : <input class='input2' value=${uploadedObj[n]}></input><br><br>`
        ul.appendChild(li)
      })
    }

    fileReader.readAsText(myFile)
  } else {
    alert('file has to be a json file')
  }
}
