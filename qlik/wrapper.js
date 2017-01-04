((Qva, Qv, window, Element) => {
  const head = window.document.head

  const QvaURL = (url) => url.indexOf(Qva.Remote) === 0 ? url.replace(/.+Extensions\/[^\/]+/, '') : url

  const QvaModule = {
    Element,
    Data: {
      Rows: []
    }
  }

  Qva.Remote = window.location.href

  Qva.AddExtension = Qv.AddExtension = (path, run) => {
    run.apply(QvaModule)
  }

  Qva.LoadCSS = (url) => {
    url = QvaURL(url)

    if (url !== '/asset/css/app.css') {
      const el = window.document.createElement('link')

      el.rel = 'stylesheet'
      el.href = url

      head.appendChild(el)
    }
  }

  Qva.LoadScript = (url) => {
    const el = window.document.createElement('script')

    el.src = QvaURL(url)

    head.appendChild(el)
  }
})((window.Qva = {}), (window.Qv = {}), window, document.getElementById('container'))
