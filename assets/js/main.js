
/* Creo un ciclo for nel quale inserisco dalla libreria axios  */
for (let i = 0; i < 10; i++){
    axios.get(flynn.boolean.careers/exercises/api/random/mail).then ((response)=> {
        console.log(response.data)
    })
}