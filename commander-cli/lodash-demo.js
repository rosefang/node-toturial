const _ = require('lodash')
const os = require('os')

const info = {
    "name": "rose_comp",
    "configRoot": "./src/configs/index.js",
    "platformRoot": {
      "web": {
        "entry": "./src/web/index.js",
        "components": "./src/web/components/index.js",
        "actions": "./src/web/actions/index.js"
      },
      "mp": {
        "entry": "./src/mp/index.json"
      }
    }
  }

  const oldinfo = {
    "name": "rose_comp",
    "configRoot": ".\\src\\configs",
    "platformRoot": {
      "web": "./src/web",
      "mp": "./src/mp"
    }
  }
const ret = _.get(info, 'platform')

function pathEscape(path) {
    if (os.platform() !== 'win32') {
      return path
    }
    return path.replace(/\\/g, '\\\\')
  }

const p = pathEscape(oldinfo.configRoot)
console.log('p is ', p)