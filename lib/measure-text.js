const PDFDocument = require('pdfkit')

const doc = new PDFDocument({ size: 'A4', layout: 'landscape' })

module.exports = (str, font = 'Helvetica-Bold') => {
  doc.font(font)
  doc.fontSize(11)
  return doc.widthOfString(str)
}
