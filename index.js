const recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}

function deleteFromObjectByKey(object, key) {
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  
}