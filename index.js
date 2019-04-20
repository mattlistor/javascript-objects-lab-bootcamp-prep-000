const recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}

function deleteFromObjectByKey(object, key) {
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  
}