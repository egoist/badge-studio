const path = require('path')
const measureText = require('./measure-text')

const templates = {
  default: require('./templates/default'),
  square: require('./templates/square')
}

module.exports = function(
  {
    subject,
    status,
    logo,
    color = '#fff',
    shadowColor = '#010101',
    template: templateName = 'default'
  } = {}
) {
  subject = Object.assign(
    {
      text: 'subject',
      bgColor: '#555'
      // color,
      // shadowColor
    },
    mapStrToObj(subject, 'text')
  )

  status = Object.assign(
    {
      text: 'status',
      bgColor: '#4c1'
      // color,
      // shadowColor
    },
    mapStrToObj(status, 'text')
  )

  logo = Object.assign(
    {
      url: ''
    },
    mapStrToObj(logo, 'url')
  )

  const template = templates[templateName]

  if (!template) {
    throw new Error('Unknown template name.')
  }

  const context = {
    color,
    shadowColor,
    logo,
    escapeXml,
    subject,
    status
  }

  // Logo
  context.logo.width = Number(context.logo.width) || (context.logo.url ? 14 : 0)
  context.logo.padding = context.logo.url ? 3 : 0

  let leftWidth = measureText(subject.text) | 0
  let rightWidth = measureText(status.text) | 0
  // Increase chances of pixel grid alignment.
  if (leftWidth % 2 === 0) {
    leftWidth++
  }
  if (rightWidth % 2 === 0) {
    rightWidth++
  }
  context.leftWidth = leftWidth + 10 + context.logo.width + context.logo.padding
  context.rightWidth = rightWidth + 10 + context.logo.padding
  context.fullWidth = context.leftWidth + context.rightWidth

  return template(context)
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function mapStrToObj(input, field) {
  return typeof input === 'string' ? { [field]: input } : input
}
