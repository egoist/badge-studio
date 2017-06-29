const PDFDocument = require('pdfkit')

const doc = new PDFDocument({ size: 'A4', layout: 'landscape' })

module.exports = str => {
  doc.font('Helvetica-Bold')
  doc.fontSize(11)
  return doc.widthOfString(str)
}
