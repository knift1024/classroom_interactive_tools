/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3087386779")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_QwFFeY7aRH` ON `peer_reviews` (`classroom_code`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3087386779")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
