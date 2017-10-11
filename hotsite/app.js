require('../index.js') // main file of minimalist
require('../angular.js') // directives

angular.module('app', [
  'minimalist',
])

angular
  .module('app')
  .controller('HomeController', HomeController)

function HomeController() {
  this.houses = ['stark', 'lannister', 'targaryen']
  this.options = ['targaryen']
  this.accept = true
  this.name = 'darlan'
  // this.data = {
  //   test: 'lero',
  // }

  this.change = () => {
    // console.log('>', !this.accept)
    // this.accept = !this.accept
    this.data.test = 'lero2'
  }

  this.submit = () => {
    console.log('submit')
  }
}