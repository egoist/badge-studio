const PDFDocument = require('pdfkit')

const doc = new PDFDocument({ size: 'A4', layout: 'landscape' })
doc.font('Helvetica-Bold')

module.exports = str => {
  doc.fontSize(11)
  return doc.widthOfString(str)
}

module.exports.loadFont = (font, cb) => {
  try {
    doc.font(font)
    cb && cb(null)
  } catch (err) {
    cb && cb(err)
  }
}
