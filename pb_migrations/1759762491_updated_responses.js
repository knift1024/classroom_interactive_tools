/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1162135825")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool592747930",
    "name": "isNominated",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1162135825")

  // remove field
  collection.fields.removeById("bool592747930")

  return app.save(collection)
})
