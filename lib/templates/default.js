module.exports = ctx => {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ctx.fullWidth}" height="20">
  <linearGradient id="smooth" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>

  <clipPath id="round">
    <rect width="${ctx.fullWidth}" height="20" rx="3" fill="#fff"/>
  </clipPath>

  <g clip-path="url(#round)">
    <rect width="${ctx.leftWidth}" height="20" fill="${ctx.escapeXml(
    ctx.subject.bgColor
  )}"/>
    <rect x="${ctx.leftWidth}" width="${ctx.rightWidth}" height="20" fill="${ctx.escapeXml(
    ctx.status.bgColor
  )}"/>
    <rect width="${ctx.fullWidth}" height="20" fill="url(#smooth)"/>
  </g>

  <g fill="#fff" text-anchor="middle" font-family="${ctx.fontName},DejaVu Sans,Geneva,sans-serif" font-size="11">
    ${ctx.logo.url &&
      `<image x="5" y="3" width="${ctx.logo
        .width}" height="14" xlink:href="${ctx.logo.url}"/>`}

    <text x="${(ctx.leftWidth + ctx.logo.width + ctx.logo.padding) /
      2}" y="15" fill="${ctx.subject.shadowColor ||
    ctx.shadowColor}" fill-opacity=".3">${ctx.escapeXml(
    ctx.subject.text
  )}</text>

    <text x="${(ctx.leftWidth + ctx.logo.width + ctx.logo.padding) /
      2}" y="14" fill="${ctx.subject.color || ctx.color}">${ctx.escapeXml(
    ctx.subject.text
  )}</text>

    <text x="${ctx.leftWidth + ctx.rightWidth / 2 - 1}" y="15" fill="${ctx
    .status.shadowColor || ctx.shadowColor}" fill-opacity=".3">${ctx.escapeXml(
    ctx.status.text
  )}</text>

    <text x="${ctx.leftWidth + ctx.rightWidth / 2 - 1}" y="14" fill="${ctx
    .status.color || ctx.color}">${ctx.escapeXml(ctx.status.text)}</text>
  </g>
</svg>
`
}
