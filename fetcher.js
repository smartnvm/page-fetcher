const request = require('request');



args = process.argv.slice(2)

// let domain = args[0]      //'http://example.edu/'
// let fileName = args[1]    //'./index.html'

let domain = 'http://example.edu/'
let fileName = './index.html'

//Node.js readline
const fs = require('fs');

const saveFile = (data, fname) => {

  fs.access(fname, fs.constants.F_OK, (err) => {

    if (err) {

      console.log('file doe NOT exist')

      fileSize = data.length
      fs.writeFile(fname, data, err => {
        if (err) {
          console.log('writing:', err.message)
          return false
        }
        // //file written successfully
        console.log(`Downloaded and saved ${fileSize} bytes to ${fname}`)
      })
      return true
    }

    console.log('file does  exist')
    
    return false

  })

}

const fetch = (webpage, fname) => {
  let content
  request((webpage), (error, response, body) => {
    if (error) {
      console.log('error:', error.message); // Print the error if one occurred

      return
    }

    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   
    saveFile(body, fname)


  });

}

fetch(domain, fileName)


