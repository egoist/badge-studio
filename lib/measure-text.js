const PDFDocument = require('pdfkit')

const doc = new PDFDocument({ size: 'A4', layout: 'landscape' })

module.exports = (str, font) => {
  if (font.path) {
    doc.registerFont(font.name, font.path)
  }
  doc.font(font.name)
  doc.fontSize(11)
  return doc.widthOfString(str)
}
