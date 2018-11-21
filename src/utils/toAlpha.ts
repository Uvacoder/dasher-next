import { parseToRgb, rgba } from 'polished'

enum Channel {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

/**
 * Returns the transparent version of the `foreground` color,
 * as if it was overlaid on the `background` color.
 *
 * Inspiration: https://git.io/vpYAv
 */
function toAlpha(foreground: string, background = '#fff') {
  const fg = parseToRgb(foreground)
  const bg = parseToRgb(background)

  // Calculate alpha value
  let alpha = [Channel.red, Channel.green, Channel.blue]
    .map(
      (channel: Channel) =>
        (fg[channel] - bg[channel]) /
        ((0 < fg[channel] - bg[channel] ? 255 : 0) - bg[channel]),
    )
    .sort((a, b) => b - a)[0]

  // Keep alpha value between 0 and 1
  alpha = Math.max(Math.min(alpha, 1), 0)

  // Calculate the resulting color
  function processChannel(channel: Channel) {
    return alpha === 0
      ? bg[channel]
      : bg[channel] + (fg[channel] - bg[channel]) / alpha
  }

  return rgba({
    red: Math.round(processChannel(Channel.red)),
    green: Math.round(processChannel(Channel.green)),
    blue: Math.round(processChannel(Channel.blue)),
    alpha: Math.round(alpha * 100) / 100,
  })
}

export default toAlpha
