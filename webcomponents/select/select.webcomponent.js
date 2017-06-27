module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-select')) {
    window.customElements.define('mn-select', require('./select.class.js'))
  }

  return window.customElements.get('mn-select')
}
