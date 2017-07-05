let handleExport = () => {
  let obj = {}
  let liArr = $All('li')

  liArr.forEach((n, i) => {
    if (n.children[0].value && n.children[1].value) {
      obj[n.children[0].value] = n.children[1].value
    } else {
      console.log('nothing to add')
    }

    if (i === liArr.length - 1) {
      console.log(obj)
      let dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(obj, null, 2))
      let dnld = ce('a')
      dnld.setAttribute('href', dataStr)
      dnld.setAttribute('download', 'data.json')
      dnld.click()
    }
  })
}
