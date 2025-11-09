/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1799974226") // classrooms collection

  // add peer review fields
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool3671935526",
    "name": "peer_review_active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3671935527",
    "max": 0,
    "min": 0,
    "name": "peer_review_mode",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "json3671935528",
    "maxSize": 0,
    "name": "peer_review_works",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "date3671935529",
    "max": "",
    "min": "",
    "name": "peer_review_timestamp",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1799974226")

  // remove peer review fields
  collection.fields.removeById("bool3671935526")
  collection.fields.removeById("text3671935527")
  collection.fields.removeById("json3671935528")
  collection.fields.removeById("date3671935529")

  return app.save(collection)
})