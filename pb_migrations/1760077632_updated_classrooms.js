/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1799974226")

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "file2226076357",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png"
    ],
    "name": "background_image_file",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1799974226")

  // remove field
  collection.fields.removeById("file2226076357")

  return app.save(collection)
})
