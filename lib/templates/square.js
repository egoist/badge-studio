module.exports = ctx => {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ctx.fullWidth}" height="20">
  <g shape-rendering="crispEdges">
    <rect width="${ctx.leftWidth}" height="20" fill="${ctx.escapeXml(
    ctx.subject.bgColor
  )}"/>
    <rect x="${ctx.leftWidth}" width="${ctx.rightWidth}" height="20" fill="${ctx
    .status.bgColor}"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    ${ctx.logo.url &&
      `<image x="5" y="3" width="${ctx.logo
        .width}" height="14" xlink:href="${ctx.logo.url}"/>`}

    <text fill="${ctx.subject.color || ctx.color}" x="${(ctx.leftWidth +
    ctx.logo.width +
    ctx.logo.padding) /
    2}" y="14">${ctx.escapeXml(ctx.subject.text)}</text>

    <text fill="${ctx.status.color || ctx.color}" x="${ctx.leftWidth +
    ctx.rightWidth / 2 -
    1}" y="14">${ctx.escapeXml(ctx.status.text)}</text>

  </g>
</svg>`
}
