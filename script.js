const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já está cadastrado ⛔")
    return
  }

  nlwSetup.addDay(today)
  alert('Adicionado com sucesso! ✅')

}

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
  //console.log(nlwSetup.data)
}


/* forma manual de adicionar dados
const data = {
  journal: ['01-02', '01-08', '01-10'],
  run: ['01-01', '01-02', '01-06'],
  takePills: ['01-03', '01-07', '01-09']
}
*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
