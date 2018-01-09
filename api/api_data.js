define({ "api": [
  {
    "type": "get",
    "url": "/posts",
    "title": "Request the latest post array limited by an offset",
    "name": "ApiPost_Index",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(Optional) Post offset for database</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>(Optional) Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl))</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "visibility",
            "description": "<p>(Optional) 0 = all posts, 1 = public posts, 2 private posts</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Comments",
            "description": "<p>Comments related to the post</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CreatedAt",
            "description": "<p>Timestamp of creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Guid",
            "description": "<p>Unique global ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Unique database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Hash",
            "optional": false,
            "field": "Person",
            "description": "<p>Author of post</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Author database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ProviderName",
            "description": "<p>Provider</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Public",
            "description": "<p>Is it a public or private post</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Text",
            "description": "<p>Post content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>Entity type e.g. StatusMessage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"0\": {\n         \"Guid\": \"5b5d5b4f7044e3444db73504e8b08be8\",\n         \"ID\": 20,\n         \"Text\": \"hi whats up?\\r\\n\\r\\n\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Contains recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Error 1052: Column 'xyz' not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/post.go",
    "groupTitle": "Posts endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Post structures</p>"
  }
] });
