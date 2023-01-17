const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]

function averageAge(array){
    //reduce
    const initialValue = 0;
const average  = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue.age,
  0)
  const sum =average/array.length

console.log(Math.floor(sum))
}
averageAge(alumni)
function orderedAlumni(array){
    //sort
    const order =array.sort((firstItem, secondItem) => secondItem.age - firstItem.age);
    console.log(order)
}
 orderedAlumni(alumni) 
function allUseJavaScript(array){
    //every
  const all= array.every(alum=>alum.language==="JavaScript")
  console.log(all)
}
allUseJavaScript(alumni)