define({ "api": [
  {
    "type": "post",
    "url": "/aspects",
    "title": "Create new aspect",
    "name": "ApiAspect_Create",
    "group": "Aspects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aspect_name",
            "description": "<p>Aspect name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Aspect name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Default",
            "description": "<p>Default aspect</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Memberships",
            "description": "<p>Aspect memberships</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"ID\": 1,\n  \"CreatedAt\": \"2017-12-20T00:02:10Z\",\n  \"UpdatedAt\": \"2017-12-20T00:02:10Z\",\n  \"Name\": \"Friends\",\n  \"UserID\": 1,\n  \"Default\": false,\n  \"Memberships\": [...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/aspect.go",
    "groupTitle": "Aspects endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Aspect structures</p>"
  },
  {
    "type": "post",
    "url": "/people/:id/aspects/:aspect_id",
    "title": "Add person to aspect",
    "name": "ApiAspect_CreatePerson",
    "group": "Aspects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "aspect_id",
            "description": "<p>Aspect database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "Number",
            "optional": false,
            "field": "AspectID",
            "description": "<p>Aspect database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Person database ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"ID\": 1,\n    \"CreatedAt\": \"2017-12-20T00:02:10Z\",\n    \"UpdatedAt\": \"2017-12-20T00:02:10Z\",\n    \"AspectID\": 1,\n    \"PersonID\": 1\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/aspect.go",
    "groupTitle": "Aspects endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Aspect structures</p>"
  },
  {
    "type": "delete",
    "url": "/people/:id/aspects/:aspect_id",
    "title": "Delete person from aspect",
    "name": "ApiAspect_DeletePerson",
    "group": "Aspects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "aspect_id",
            "description": "<p>Aspect database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "Number",
            "optional": false,
            "field": "AspectID",
            "description": "<p>Aspect database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Person database ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"ID\": 1,\n    \"CreatedAt\": \"2017-12-20T00:02:10Z\",\n    \"UpdatedAt\": \"2017-12-20T00:02:10Z\",\n    \"AspectID\": 1,\n    \"PersonID\": 1\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/aspect.go",
    "groupTitle": "Aspects endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Aspect structures</p>"
  },
  {
    "type": "get",
    "url": "/aspects",
    "title": "Fetch user aspect list",
    "name": "ApiAspect_Index",
    "group": "Aspects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl))</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Aspect name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Default",
            "description": "<p>Default aspect</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Memberships",
            "description": "<p>Aspect memberships</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n     \"0\": {\n         \"ID\": 1,\n         \"CreatedAt\": \"2017-12-20T00:02:10Z\",\n         \"UpdatedAt\": \"2017-12-20T00:02:10Z\",\n         \"Name\": \"Friends\",\n         \"UserID\": 1,\n         \"Default\": false,\n         \"Memberships\": [...]\n          }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/aspect.go",
    "groupTitle": "Aspects endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Aspect structures</p>"
  },
  {
    "type": "get",
    "url": "/people/:id/aspects",
    "title": "Display aspects which Person is included in",
    "name": "ApiAspect_ShowPerson",
    "group": "Aspects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Aspect name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Default",
            "description": "<p>Default aspect</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Memberships",
            "description": "<p>Aspect memberships</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"ID\": 1,\n    \"CreatedAt\": \"2017-12-20T00:02:10Z\",\n    \"UpdatedAt\": \"2017-12-20T00:02:10Z\",\n    \"Name\": \"Friends\",\n    \"UserID\": 1,\n    \"Default\": false,\n    \"Memberships\": [...]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/aspect.go",
    "groupTitle": "Aspects endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Aspect structures</p>"
  },
  {
    "type": "post",
    "url": "/posts/:id/comments",
    "title": "Create comment on post",
    "name": "ApiComment_CreatePost",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/comment.go",
    "groupTitle": "Comments endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Comment structures</p>"
  },
  {
    "type": "delete",
    "url": "/comments/:guid",
    "title": "Delete a comment",
    "name": "ApiComment_Delete",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Unique global ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 BadRequest\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/comment.go",
    "groupTitle": "Comments endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Comment structures</p>"
  },
  {
    "type": "get",
    "url": "/posts/:id/comments",
    "title": "Display comments related to post",
    "name": "ApiComment_IndexPost",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "String",
            "optional": false,
            "field": "Text",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ShareableID",
            "description": "<p>Post database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ShareableType",
            "description": "<p>Shareable type e.g. Post, Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Hash",
            "optional": false,
            "field": "CommentSignature",
            "description": "<p>Signature</p>"
          },
          {
            "group": "Success 200",
            "type": "Hash",
            "optional": false,
            "field": "Person",
            "description": "<p>Person structure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"ID\": 12,\n   \"CreatedAt\": \"2018-01-08T15:25:43Z\",\n   \"UpdatedAt\": \"2018-01-08T15:25:43Z\",\n   \"Text\": \"hi\",\n   \"ShareableID\": 20,\n   \"PersonID\": 1,\n   \"Guid\": \"cc783a9749f09c7d817a1707a4c052bc\",\n   \"LikesCount\": 0,\n   \"ShareableType\": \"Post\",\n   [...]\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/comment.go",
    "groupTitle": "Comments endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Comment structures</p>"
  },
  {
    "type": "get",
    "url": "/comments/:id",
    "title": "Display a specific comment",
    "name": "ApiComment_Show",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl))</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "String",
            "optional": false,
            "field": "Text",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ShareableID",
            "description": "<p>Post database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ShareableType",
            "description": "<p>Shareable type e.g. Post, Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Hash",
            "optional": false,
            "field": "CommentSignature",
            "description": "<p>Signature</p>"
          },
          {
            "group": "Success 200",
            "type": "Hash",
            "optional": false,
            "field": "Person",
            "description": "<p>Person structure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"ID\": 12,\n  \"CreatedAt\": \"2018-01-08T15:25:43Z\",\n  \"UpdatedAt\": \"2018-01-08T15:25:43Z\",\n  \"Text\": \"hi\",\n  \"ShareableID\": 20,\n  \"PersonID\": 1,\n  \"Guid\": \"cc783a9749f09c7d817a1707a4c052bc\",\n  \"LikesCount\": 0,\n  \"ShareableType\": \"Post\",\n  [...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/comment.go",
    "groupTitle": "Comments endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Comment structures</p>"
  },
  {
    "type": "post",
    "url": "/posts/:id/likes",
    "title": "Create a like",
    "name": "ApiLike_Create",
    "group": "Likes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "positive",
            "description": "<p>Like or dis-like</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "Positive",
            "description": "<p>Like or dis-like</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "TargetID",
            "description": "<p>Post database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AuthorSignature",
            "description": "<p>Signature</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TargetType",
            "description": "<p>Entity type e.g. Post, Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Hash",
            "optional": false,
            "field": "Signature",
            "description": "<p>Signature structure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"ID\": 12,\n  \"CreatedAt\": \"2018-01-08T15:25:43Z\",\n  \"UpdatedAt\": \"2018-01-08T15:25:43Z\",\n  \"TargetID\": 20,\n  \"PersonID\": 1,\n  \"Positive\": true,\n  \"Guid\": \"cc783a9749f09c7d817a1707a4c052bc\",\n  \"TargetType\": \"Post\",\n  [...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/like.go",
    "groupTitle": "Likes endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Like structures</p>"
  },
  {
    "type": "delete",
    "url": "/likes/:guid",
    "title": "Delete a like",
    "name": "ApiLike_Delete",
    "group": "Likes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Unique global ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 BadRequest\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/like.go",
    "groupTitle": "Likes endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Like structures</p>"
  },
  {
    "type": "get",
    "url": "/posts/:id/likes",
    "title": "Display likes related to post",
    "name": "ApiLike_Index",
    "group": "Likes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "Positive",
            "description": "<p>Like or dis-like</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "TargetID",
            "description": "<p>Post database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AuthorSignature",
            "description": "<p>Signature</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TargetType",
            "description": "<p>Entity type e.g. Post, Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Hash",
            "optional": false,
            "field": "Signature",
            "description": "<p>Signature structure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"ID\": 12,\n   \"CreatedAt\": \"2018-01-08T15:25:43Z\",\n   \"UpdatedAt\": \"2018-01-08T15:25:43Z\",\n   \"TargetID\": 20,\n   \"PersonID\": 1,\n   \"Positive\": true,\n   \"Guid\": \"cc783a9749f09c7d817a1707a4c052bc\",\n   \"TargetType\": \"Post\",\n   [...]\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/like.go",
    "groupTitle": "Likes endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Like structures</p>"
  },
  {
    "type": "get",
    "url": "/notifications",
    "title": "Display notifications",
    "name": "ApiNotification_Index",
    "group": "Notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl))</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>Post offset for database</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "Unread",
            "description": "<p>If the notification is un-read</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TargetGuid",
            "description": "<p>Entity global ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TargetType",
            "description": "<p>Entity type e.g. Post, Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User database ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"0\": {\n         \"ID\": 12,\n         \"CreatedAt\": \"2018-01-08T15:25:43Z\",\n         \"UpdatedAt\": \"2018-01-08T15:25:43Z\",\n         \"TargetGuid\": \"cc783a9749f09c7d817a1707a4c052bc\",\n         \"PersonID\": 1,\n         \"UserID\": 2,\n         \"Unread\": true,\n         \"TargetType\": \"Post\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/notification.go",
    "groupTitle": "Notifications endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Notification structures</p>"
  },
  {
    "type": "put",
    "url": "/notifications/:id",
    "title": "Set notification read",
    "name": "ApiNotification_Update",
    "group": "Notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Notification database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "Unread",
            "description": "<p>If the notification is un-read</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TargetGuid",
            "description": "<p>Entity global ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TargetType",
            "description": "<p>Entity type e.g. Post, Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PersonID",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User database ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"ID\": 12,\n  \"CreatedAt\": \"2018-01-08T15:25:43Z\",\n  \"UpdatedAt\": \"2018-01-08T15:25:43Z\",\n  \"TargetGuid\": \"cc783a9749f09c7d817a1707a4c052bc\",\n  \"PersonID\": 1,\n  \"UserID\": 2,\n  \"Unread\": false,\n  \"TargetType\": \"Post\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/notification.go",
    "groupTitle": "Notifications endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Notification structures</p>"
  },
  {
    "type": "post",
    "url": "/oauth/tokens",
    "title": "Create/Fetch token",
    "name": "ApiOAuth_Create",
    "group": "Oauth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>Grant type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client name e.g. android_appXYZ</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"5b5d5b4f7044e3444db73504e8b08be8\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/oauth.go",
    "groupTitle": "Oauth endpoint",
    "groupDescription": "<p>Create and delete oauth tokens</p> <h2>Authentication Process Example</h2> <p>If you want to access API features you will have to register your application first:</p> <pre><code>curl -X POST -d &quot;grant_type=password&amp;username=ganggo&amp;password=s3cr3t&amp;client_id=MyAwesomeAppID&quot; https://&lt;your-server&gt;/api/v0/oauth/tokens </code></pre> <p>This will return an access token which you should include in your HTTP header (access_token=[...]) for future API calls:</p> <pre><code>curl -H &quot;access_token: 0987654312&quot; -X GET https://&lt;your-server&gt;/api/v0/posts </code></pre>"
  },
  {
    "type": "delete",
    "url": "/oauth/tokens/:id",
    "title": "Delete token",
    "name": "ApiOAuth_Delete",
    "group": "Oauth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Token database ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/oauth.go",
    "groupTitle": "Oauth endpoint",
    "groupDescription": "<p>Create and delete oauth tokens</p> <h2>Authentication Process Example</h2> <p>If you want to access API features you will have to register your application first:</p> <pre><code>curl -X POST -d &quot;grant_type=password&amp;username=ganggo&amp;password=s3cr3t&amp;client_id=MyAwesomeAppID&quot; https://&lt;your-server&gt;/api/v0/oauth/tokens </code></pre> <p>This will return an access token which you should include in your HTTP header (access_token=[...]) for future API calls:</p> <pre><code>curl -H &quot;access_token: 0987654312&quot; -X GET https://&lt;your-server&gt;/api/v0/posts </code></pre>"
  },
  {
    "type": "get",
    "url": "/people/:id",
    "title": "Display a specific person",
    "name": "ApiPeople_Show",
    "group": "People",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "String",
            "optional": false,
            "field": "Guid",
            "description": "<p>Person global ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Author",
            "description": "<p>Handle with TLD</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SerializedPublicKey",
            "description": "<p>Public key</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User database ID (null if not a local user)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"ID\": 12,\n  \"CreatedAt\": \"2018-01-08T15:25:43Z\",\n  \"UpdatedAt\": \"2018-01-08T15:25:43Z\",\n  \"Guid\": \"cc783a9749f09c7d817a1707a4c052bc\",\n  \"Author\": \"test@localhost\",\n  \"SerializedPublicKey\": \"[...]\",\n  \"UserID\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/people.go",
    "groupTitle": "People endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Person structures</p>"
  },
  {
    "type": "post",
    "url": "/posts",
    "title": "Create a new post",
    "name": "ApiPost_Create",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aspectID",
            "defaultValue": "0",
            "description": "<p>Needs an aspectID if you want to post privately</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>The actual post message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl))</p>"
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
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"Guid\": \"5b5d5b4f7044e3444db73504e8b08be8\",\n  \"ID\": 20,\n  \"Text\": \"hi whats up?\\r\\n\\r\\n\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/post.go",
    "groupTitle": "Posts endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Post structures</p>"
  },
  {
    "type": "delete",
    "url": "/posts/:guid",
    "title": "Delete post/reshare",
    "name": "ApiPost_Delete",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Unique global ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 BadRequest\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/post.go",
    "groupTitle": "Posts endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Post structures</p>"
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "Fetch all posts",
    "name": "ApiPost_Index",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>Post offset for database</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl))</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "visibility",
            "description": "<p>0 = all posts, 1 = public posts, 2 private posts</p>"
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
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"0\": {\n         \"Guid\": \"5b5d5b4f7044e3444db73504e8b08be8\",\n         \"ID\": 20,\n         \"Text\": \"hi whats up?\\r\\n\\r\\n\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/post.go",
    "groupTitle": "Posts endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Post structures</p>"
  },
  {
    "type": "post",
    "url": "/posts/:guid/reshare",
    "title": "Reshare a post",
    "name": "ApiPost_Reshare",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Unique global ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 BadRequest\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/post.go",
    "groupTitle": "Posts endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Post structures</p>"
  },
  {
    "type": "post",
    "url": "/posts/:guid",
    "title": "Fetch a specific post",
    "name": "ApiPost_Show",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Unique global ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl))</p>"
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
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"Guid\": \"5b5d5b4f7044e3444db73504e8b08be8\",\n  \"ID\": 20,\n  \"Text\": \"hi whats up?\\r\\n\\r\\n\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/post.go",
    "groupTitle": "Posts endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Post structures</p>"
  },
  {
    "type": "get",
    "url": "/people/:id/profile",
    "title": "Fetch person profile",
    "name": "ApiProfile_Show",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Person database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Unique database ID</p>"
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Author",
            "description": "<p>Username with TLD</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "FirstName",
            "description": "<p>First name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LastName",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImageUrl",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImageUrlSmall",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImageUrlMedium",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Birthday",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Gender",
            "description": "<p>Male, Female, Attack Helicopter</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Bio",
            "description": "<p>Biographie</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Searchable",
            "description": "<p>Hide the profile from searches</p>"
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
            "field": "Location",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "FullName",
            "description": "<p>First and last name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Nsfw",
            "description": "<p>NSFW user account</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"ID\": 2,\n  \"CreatedAt\": \"2017-12-20T00:02:05Z\",\n  \"UpdatedAt\": \"2017-12-20T00:02:05Z\",\n  \"Author\": \"diaspora@localhost:3000\",\n  \"FirstName\": \"\",\n  \"LastName\": \"\",\n  \"ImageUrl\": \"[...]\",\n  \"ImageUrlSmall\": \"[...]\",\n  \"ImageUrlMedium\": \"[...]\",\n  \"Birthday\": \"0001-01-01T00:00:00Z\",\n  \"Gender\": \"\",\n  \"Bio\": \"\",\n  \"Searchable\": true,\n  \"PersonID\": 2,\n  \"Location\": \"\",\n  \"FullName\": \"\",\n  \"Nsfw\":false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/profile.go",
    "groupTitle": "Profiles endpoint",
    "groupDescription": "<p>Viewing, creating and deleting Profile structures</p>"
  },
  {
    "type": "post",
    "url": "/search",
    "title": "Discover a new person",
    "name": "ApiSearch_Create",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "handle",
            "description": "<p>Person network handle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
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
            "field": "UpdatedAt",
            "description": "<p>Timestamp of last replacment</p>"
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
            "type": "String",
            "optional": false,
            "field": "Guid",
            "description": "<p>Person global ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Author",
            "description": "<p>Handle with TLD</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SerializedPublicKey",
            "description": "<p>Public key</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User database ID (null if not a local user)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"ID\": 12,\n  \"CreatedAt\": \"2018-01-08T15:25:43Z\",\n  \"UpdatedAt\": \"2018-01-08T15:25:43Z\",\n  \"Guid\": \"cc783a9749f09c7d817a1707a4c052bc\",\n  \"Author\": \"test@localhost\",\n  \"SerializedPublicKey\": \"[...]\",\n  \"UserID\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/search.go",
    "groupTitle": "Search endpoint",
    "groupDescription": "<p>Discover new people in the network</p>"
  },
  {
    "type": "post",
    "url": "/users/streams",
    "title": "Create a new user stream",
    "name": "ApiUserStream_Create",
    "group": "UserStreams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of stream</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tags",
            "description": "<p>Tags separated by &quot;,&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "people",
            "description": "<p>Author handle (e.g. lukas@sechat.org) separated by &quot;,&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "expression",
            "description": "<p>Regular expression</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User database identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>User stream name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Tags",
            "description": "<p>Tags separated by &quot;,&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "People",
            "description": "<p>People separated by &quot;,&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Expression",
            "description": "<p>Regular Expression</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"UserID\": 1,\n  \"Name\": \"Test\",\n  \"Tags\": \"linux,software,opensource\",\n  \"People\": \"lukas@sechat.org,hq@ggg.social\",\n  \"Expression\": \"ganggo|socialhome\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user_stream.go",
    "groupTitle": "UserStreams endpoint",
    "groupDescription": "<p>Viewing, creating and deleting UserStream structures</p>"
  },
  {
    "type": "delete",
    "url": "/users/streams/:id",
    "title": "Delete a user stream",
    "name": "ApiUserStream_Delete",
    "group": "UserStreams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Oauth access token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The database identifier for the struct</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user_stream.go",
    "groupTitle": "UserStreams endpoint",
    "groupDescription": "<p>Viewing, creating and deleting UserStream structures</p>"
  },
  {
    "type": "get",
    "url": "/people/:guid/stream",
    "title": "Fetch person stream",
    "name": "ApiUserStream_ShowPersonStream",
    "group": "UserStreams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Unique global or database ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>Post offset for database</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Display only specific fields, e.g. fields=ID,Person(ID:Profile(ID:ImageUrl)). This will only work on standard format!</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "description": "<p>On default we will use the standard GangGo output but for compatibility reasons you can choose format &quot;diaspora&quot; as well</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (format=default)",
          "content": "HTTP/1.1 200 OK\n{\n  \"0\": {\n         \"Guid\": \"5b5d5b4f7044e3444db73504e8b08be8\",\n         \"ID\": 20,\n         \"Text\": \"hi whats up?\\r\\n\\r\\n\",\n         [...]\n  }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (format=diaspora)",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"public\": true,\n    \"guid\": \"abe68905a61297a686d675796d6b5169\",\n    \"author\": {\n                \"id\": 1,\n                \"guid\": \"bb9e7958aa201ffbd47852fe83e1a1fa\"\n    },\n    \"post_type\": \"StatusMessage\",\n    \"text\": \"a public post\",\n    \"provider_display_name\": \"GangGo\",\n    \"created_at\": \"2018-02-03T23:47:35.168488+01:00\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx/5xx": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contains the recent error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"[...]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user_stream.go",
    "groupTitle": "UserStreams endpoint",
    "groupDescription": "<p>Viewing, creating and deleting UserStream structures</p>"
  }
] });
