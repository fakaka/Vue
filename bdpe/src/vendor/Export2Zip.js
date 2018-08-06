/* eslint-disable */
require('script-loader!file-saver');
import JSZip from 'jszip'

/**
 * 
 * @param {*} th 
 * @param {JSON} jsonData json数据
 * @param {String} txtName 文件名
 * @param {String} zipName 压缩文件名
 */
export function export_txt_to_zip(th, jsonData, txtName, zipName) {
    const zip = new JSZip()
    const txt_name = txtName || 'file'
    const zip_name = zipName || 'file'
    const data = jsonData
    let txtData = `${th}\r\n`
    data.forEach((row) => {
        let tempStr = ''
        tempStr = row.toString()
        txtData += `${tempStr}\r\n`
    })
    zip.file(`${txt_name}.txt`, txtData)
    zip.generateAsync({ type: "blob" })
        .then((blob) => {
            saveAs(blob, `${zip_name}.zip`)
        }, (err) => {
            alert('导出失败')
        })
}
