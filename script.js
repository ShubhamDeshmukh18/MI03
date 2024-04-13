const tabButtons = document.querySelectorAll('.tab-btn')

tabButtons.forEach((tab) => {
  tab.addEventListener('click', () => tabClicked(tab))
})

function tabClicked(tab) {
  
  tabButtons.forEach(tab => {
    tab.classList.remove('active')
  })
  tab.classList.add('active')
  
  const contents = document.querySelectorAll('.content')
  
  contents.forEach((content) => {
    content.classList.remove('show')
  })
  
  const contentId = tab.getAttribute('content-id')
  const contentSelected = document.getElementById(contentId)
  
  contentSelected.classList.add('show')
  //console.log(contentId)
}