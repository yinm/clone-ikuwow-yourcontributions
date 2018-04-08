(function() {
  'use strict'

  const getcode = document.getElementsByClassName('get-code')[0]

  const preview = () => {
    const ghUsername = document.getElementsByClassName('form-gh-username')[0].value
    if (ghUsername === '') {
      return
    }
    const previewDisplay = document.getElementById('preview-display')

    const a = document.createElement('a')
    a.href = `https://github.com/${ghUsername}`
    a.className = 'gh-contributions'
    a.dataset.ghUsername = ghUsername
    a.target = '_blank'
    a.innerHTML = `${ghUsername}'s contributions`

    const script = document.createElement('script')
    script.src = location.href.split('?')[0] + 'widget.js'

    let child
    while (child = previewDisplay.lastChild) {
      previewDisplay.removeChild(previewDisplay.firstChild)
    }
    previewDisplay.appendChild(a)
    previewDisplay.appendChild(script)

    getcode.textContent = a.outerHTML + script.outerHTML
  }

  const ptb = document.getElementsByClassName('form-preview')[0]
  const inputGitHubUsername = document.getElementsByClassName('form-gh-username')[0]
  ptb.onclick = preview
  inputGitHubUsername.onkeypress = () => {
    if (window.event.keyCode === 13) {
      preview()
    }
  }

  getcode.onclick = () => {
    getcode.select()
  }
})()