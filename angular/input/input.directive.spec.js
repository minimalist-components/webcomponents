const {describe, it, beforeEach} = require('mocha')
const {expect} = require('chai')
  .use(require('chai-dom'))

const angular = require('angular')
require('angular-mocks')
require('./input.directive.js')


describe('mn-input (directive)', () => {
  let element
  let scope

  beforeEach(angular.mock.module('minimalist'))

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    scope.value = 'Darlan'
    document.body.innerHTML = '<mn-input ng-model="username" value="{{ value }}"></mn-input>'
    element = document.querySelector('mn-input')
    $compile(element)(scope)
    scope.$digest()
  }))

  describe('element', () => {
    it('should have a ngModel attribute', () => {
      expect(element).to.have.attribute('ng-model')
    })

    it('should have the .mn-input class', () => {
      expect(element).to.have.class('mn-input')
    })

    it('should contain a input child', () => {
      expect(element).to.contain('input').with.length(1)
    })
  })
})
