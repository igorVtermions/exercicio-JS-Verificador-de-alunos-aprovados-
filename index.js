const ave = document.querySelector('#note')
const vision = document.querySelector('#vision')
const student = document.querySelector('#name')
const reg = document.querySelector('#reg')



function noteNotification (){

    let note = ave.value
    let name = student.value
    let mat = reg.value

    if (note >= 9){
        vision.innerHTML = `${name} da matricula: ${mat} você foi aprovado!!! com a nota A`
    } else if(note == 8, note >=7){
        vision.innerHTML = `${name} da matricula: ${mat} você foi aprovado!!! com a nota B`
    } else if(note == 6){
        vision.innerHTML = `${name} da matricula: ${mat} você foi aprovado!!! com a nota C`
    } else if (note == 5, note >= 4){
        vision.innerHTML = `${name} da matricula: ${mat} você tera que fazer a recuperação, com a nota D`
    }else{
        vision.innerHTML = `${name} da matricula: ${mat} vc foi Reprovado, com nota F, por favor entre em contato com a diretoria!!`
    }
}