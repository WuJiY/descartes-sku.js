import Descartes from './index.js'

const obj1 = { size: ['XL', 'XXL'], type: ['羊毛'] }
const descartes1 = new Descartes(obj1)
const result1 = descartes1.descartes_obj()

console.log('result1', result1)
// =>  [ { size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' } ]

const obj2 = { size: ['XL', 'XXL'] }
const descartes2 = new Descartes(obj2)
const result2 = descartes2.descartes_obj()

console.log('result2', result2)
// =>  [ { size: 'XL' }, { size: 'XXL' } ]

const obj3 = { size: ['XL', 'XXL'], type: [] }
const descartes3 = new Descartes(obj3)
const result3 = descartes3.descartes_obj()

console.log('result3', result3)
// =>  [ { size: 'XL' }, { size: 'XXL' } ]