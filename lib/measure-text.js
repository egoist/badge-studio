const PDFDocument = require('pdfkit')

const doc = new PDFDocument({ size: 'A4', layout: 'landscape' })

module.exports = (str, font) => {
  doc.font(font.url || font.name)
  doc.fontSize(11)
  return doc.widthOfString(str)
}
