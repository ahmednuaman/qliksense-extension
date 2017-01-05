let painted = false

export const paint = ($element, layout) => {
  if (!painted) {
    $element.html('Hello world!')
  }

  painted = true
}
