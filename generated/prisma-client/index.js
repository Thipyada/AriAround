
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updated: 'updated',
  name: 'name',
  organizationId: 'organizationId',
  status: 'status',
  earnruleIds: 'earnruleIds'
};

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  created: 'created',
  updated: 'updated',
  name: 'name',
  email: 'email',
  profilePic: 'profilePic',
  phone: 'phone'
};

exports.Prisma.OrganizationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updated: 'updated',
  name: 'name',
  Instagram: 'Instagram',
  Facebook: 'Facebook',
  type: 'type',
  status: 'status'
};

exports.Prisma.EarnruleScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updated: 'updated',
  name: 'name',
  type: 'type',
  period: 'period',
  startDate: 'startDate',
  endDate: 'endDate',
  nextUpdateEarnrule: 'nextUpdateEarnrule',
  picture: 'picture',
  active: 'active',
  communityIds: 'communityIds',
  shopIds: 'shopIds',
  userId: 'userId',
  userUseEarnrule: 'userUseEarnrule'
};

exports.Prisma.CommunityScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updated: 'updated',
  thaiName: 'thaiName',
  englishName: 'englishName',
  founded: 'founded',
  active: 'active',
  description: 'description',
  owner: 'owner',
  earnruleIds: 'earnruleIds'
};

exports.Prisma.ShopScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updated: 'updated',
  name: 'name',
  communityId: 'communityId',
  earnruleIds: 'earnruleIds'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Status = exports.$Enums.Status = {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED'
};

exports.Period = exports.$Enums.Period = {
  ALL_TIME: 'ALL_TIME',
  CUSTOM: 'CUSTOM'
};

exports.PermissionFeature = exports.$Enums.PermissionFeature = {
  VIEW: 'VIEW',
  EDIT: 'EDIT'
};

exports.Frequency = exports.$Enums.Frequency = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

exports.ResultType = exports.$Enums.ResultType = {
  FIXED: 'FIXED',
  BUY_AMOUNT: 'BUY_AMOUNT'
};

exports.Prisma.ModelName = {
  User: 'User',
  Admin: 'Admin',
  Organization: 'Organization',
  Earnrule: 'Earnrule',
  Community: 'Community',
  Shop: 'Shop'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\thipy\\Foxbith\\Back End\\AriAround\\generated\\prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.5.2",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvcHJpc21hLWNsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibW9uZ29kYiIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgU3RyaW5nICAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIGNyZWF0ZWRBdCAgICAgIERhdGVUaW1lICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkICAgICAgICBEYXRlVGltZSAgICAgQHVwZGF0ZWRBdAogIG5hbWUgICAgICAgICAgIFN0cmluZyAgICAgICBAdW5pcXVlCiAgb3JnYW5pemF0aW9uICAgT3JnYW5pemF0aW9uIEByZWxhdGlvbihmaWVsZHM6IFtvcmdhbml6YXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgb3JnYW5pemF0aW9uSWQgU3RyaW5nICAgICAgIEBkYi5PYmplY3RJZAogIHN0YXR1cyAgICAgICAgIFN0YXR1cz8gICAgICBAZGVmYXVsdChQRU5ESU5HKQogIGVhcm5ydWxlICAgICAgIEVhcm5ydWxlW10gICBAcmVsYXRpb24oZmllbGRzOiBbZWFybnJ1bGVJZHNdLCByZWZlcmVuY2VzOiBbaWRdKQogIGVhcm5ydWxlSWRzICAgIFN0cmluZ1tdICAgICBAZGIuT2JqZWN0SWQKfQoKbW9kZWwgQWRtaW4gewogIGlkICAgICAgICAgIFN0cmluZyAgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBjcmVhdGVkICAgICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZCAgICAgRGF0ZVRpbWUgICAgIEB1cGRhdGVkQXQKICBuYW1lICAgICAgICBTdHJpbmcgICAgICAgQHVuaXF1ZQogIGVtYWlsICAgICAgIFN0cmluZyAgICAgICBAdW5pcXVlCiAgcHJvZmlsZVBpYyAgU3RyaW5nPwogIHBob25lICAgICAgIFN0cmluZz8KICBwZXJtaXNzaW9ucyBQZXJtaXNzaW9uW10KfQoKdHlwZSBQZXJtaXNzaW9uIHsKICBmZWF0dXJlICAgICAgICAgICBTdHJpbmcKICBzaG93ICAgICAgICAgICAgICBCb29sZWFuCiAgcGVybWlzc2lvbkZlYXR1cmUgUGVybWlzc2lvbkZlYXR1cmUKfQoKbW9kZWwgT3JnYW5pemF0aW9uIHsKICBpZCAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWQgICBEYXRlVGltZSBAdXBkYXRlZEF0CiAgbmFtZSAgICAgIFN0cmluZyAgIEB1bmlxdWUKICBJbnN0YWdyYW0gU3RyaW5nPwogIEZhY2Vib29rICBTdHJpbmc/CiAgdHlwZSAgICAgIFN0cmluZwogIHN0YXR1cyAgICBTdGF0dXMgICBAZGVmYXVsdChQRU5ESU5HKQogIHVzZXJzICAgICBVc2VyW10KfQoKbW9kZWwgRWFybnJ1bGUgewogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBjcmVhdGVkQXQgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZCAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEB1cGRhdGVkQXQKICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQHVuaXF1ZQogIHR5cGUgICAgICAgICAgICAgICBTdHJpbmcKICBwZXJpb2QgICAgICAgICAgICAgUGVyaW9kICAgICAgICAgICAgQGRlZmF1bHQoQUxMX1RJTUUpIC8vaWYgY3VzdG9tLCB0aGVuIGFkZCBzdGFydCBhbmQgZW5kIGRhdGUKICBzdGFydERhdGUgICAgICAgICAgRGF0ZVRpbWU/CiAgZW5kRGF0ZSAgICAgICAgICAgIERhdGVUaW1lPwogIG5leHRVcGRhdGVFYXJucnVsZSBEYXRlVGltZT8KICBwaWN0dXJlICAgICAgICAgICAgU3RyaW5nIC8vdXJsCiAgZnJlcXVlbmN5ICAgICAgICAgIFJpZ2h0cGVyRnJlcXVlbmN5CiAgc2V0dGluZyAgICAgICAgICAgIFJlc3VsdFNldHRpbmcKICBhY3RpdmUgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBDb21tdW5pdHkgICAgICAgICAgQ29tbXVuaXR5W10gICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NvbW11bml0eUlkc10sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY29tbXVuaXR5SWRzICAgICAgIFN0cmluZ1tdICAgICAgICAgIEBkYi5PYmplY3RJZAogIFNob3BzICAgICAgICAgICAgICBTaG9wW10gICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc2hvcElkc10sIHJlZmVyZW5jZXM6IFtpZF0pCiAgc2hvcElkcyAgICAgICAgICAgIFN0cmluZ1tdICAgICAgICAgIEBkYi5PYmplY3RJZAogIFVzZXIgICAgICAgICAgICAgICBVc2VyW10gICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICAgICAgICAgU3RyaW5nW10gICAgICAgICAgQGRiLk9iamVjdElkCiAgdXNlclVzZUVhcm5ydWxlICAgIEpzb24/Cn0KCm1vZGVsIENvbW11bml0eSB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWQgICAgIERhdGVUaW1lICAgQHVwZGF0ZWRBdAogIHRoYWlOYW1lICAgIFN0cmluZyAgICAgQHVuaXF1ZQogIGVuZ2xpc2hOYW1lIFN0cmluZyAgICAgQHVuaXF1ZQogIGZvdW5kZWQgICAgIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpCiAgYWN0aXZlICAgICAgQm9vbGVhbiAgICBAZGVmYXVsdCh0cnVlKQogIGRlc2NyaXB0aW9uIFN0cmluZz8KICBvd25lciAgICAgICBTdHJpbmcKICBzaG9wICAgICAgICBTaG9wW10KICBlYXJucnVsZSAgICBFYXJucnVsZVtdIEByZWxhdGlvbihmaWVsZHM6IFtlYXJucnVsZUlkc10sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZWFybnJ1bGVJZHMgU3RyaW5nW10gICBAZGIuT2JqZWN0SWQKfQoKbW9kZWwgU2hvcCB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWQgICAgIERhdGVUaW1lICAgQHVwZGF0ZWRBdAogIG5hbWUgICAgICAgIFN0cmluZyAgICAgQHVuaXF1ZQogIGNvbW11bml0eSAgIENvbW11bml0eSAgQHJlbGF0aW9uKGZpZWxkczogW2NvbW11bml0eUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBjb21tdW5pdHlJZCBTdHJpbmcgICAgIEBkYi5PYmplY3RJZAogIGVhcm5ydWxlICAgIEVhcm5ydWxlW10gQHJlbGF0aW9uKGZpZWxkczogW2Vhcm5ydWxlSWRzXSwgcmVmZXJlbmNlczogW2lkXSkKICBlYXJucnVsZUlkcyBTdHJpbmdbXSAgIEBkYi5PYmplY3RJZAp9Cgp0eXBlIFJlc3VsdFNldHRpbmcgewogIHJlc3VsdFR5cGUgUmVzdWx0VHlwZQogIHZhbHVlICAgICAgVmFsdWVwZXJDb2luCn0KCnR5cGUgVmFsdWVwZXJDb2luIHsKICBhbW91bnQgSW50IEBkZWZhdWx0KDEpIC8vRklYRUQgQW1vdW50CiAgY29pbiAgIEludAp9Cgp0eXBlIFJpZ2h0cGVyRnJlcXVlbmN5IHsKICByaWdodCAgICAgSW50CiAgZnJlcXVlbmN5IEZyZXF1ZW5jeQp9CgplbnVtIFJlc3VsdFR5cGUgewogIEZJWEVEIC8vZml4ZWQgYW1vdW50CiAgQlVZX0FNT1VOVCAvL2luY3JlYXNlIGJ5IGJ1eSBhbW91bnQKfQoKZW51bSBGcmVxdWVuY3kgewogIERBSUxZCiAgV0VFS0xZCiAgTU9OVEhMWQp9CgplbnVtIFBlcmlvZCB7CiAgQUxMX1RJTUUKICBDVVNUT00KfQoKZW51bSBTdGF0dXMgewogIEFDVElWRQogIFBFTkRJTkcKICBSRUpFQ1RFRAp9CgplbnVtIFBlcm1pc3Npb25GZWF0dXJlIHsKICBWSUVXCiAgRURJVAp9Cg==",
  "inlineSchemaHash": "c8991e4a6a94168a5ac680bad5e05c9a4b7f452cae2e37b5650105133c87e24c"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma-client",
    "prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Organization\",\"relationName\":\"OrganizationToUser\",\"relationFromFields\":[\"organizationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organizationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Status\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"earnrule\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Earnrule\",\"relationName\":\"EarnruleToUser\",\"relationFromFields\":[\"earnruleIds\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"earnruleIds\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profilePic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Permission\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Organization\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Instagram\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Facebook\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Status\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"OrganizationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Earnrule\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"period\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Period\",\"default\":\"ALL_TIME\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextUpdateEarnrule\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"picture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RightperFrequency\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setting\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ResultSetting\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Community\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Community\",\"relationName\":\"CommunityToEarnrule\",\"relationFromFields\":[\"communityIds\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"communityIds\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Shops\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Shop\",\"relationName\":\"EarnruleToShop\",\"relationFromFields\":[\"shopIds\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopIds\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"EarnruleToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUseEarnrule\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Community\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"thaiName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"englishName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"founded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Shop\",\"relationName\":\"CommunityToShop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"earnrule\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Earnrule\",\"relationName\":\"CommunityToEarnrule\",\"relationFromFields\":[\"earnruleIds\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"earnruleIds\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Shop\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Community\",\"relationName\":\"CommunityToShop\",\"relationFromFields\":[\"communityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"communityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"earnrule\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Earnrule\",\"relationName\":\"EarnruleToShop\",\"relationFromFields\":[\"earnruleIds\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"earnruleIds\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ResultType\":{\"values\":[{\"name\":\"FIXED\",\"dbName\":null},{\"name\":\"BUY_AMOUNT\",\"dbName\":null}],\"dbName\":null},\"Frequency\":{\"values\":[{\"name\":\"DAILY\",\"dbName\":null},{\"name\":\"WEEKLY\",\"dbName\":null},{\"name\":\"MONTHLY\",\"dbName\":null}],\"dbName\":null},\"Period\":{\"values\":[{\"name\":\"ALL_TIME\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"Status\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"REJECTED\",\"dbName\":null}],\"dbName\":null},\"PermissionFeature\":{\"values\":[{\"name\":\"VIEW\",\"dbName\":null},{\"name\":\"EDIT\",\"dbName\":null}],\"dbName\":null}},\"types\":{\"Permission\":{\"dbName\":null,\"fields\":[{\"name\":\"feature\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"show\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\"},{\"name\":\"permissionFeature\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionFeature\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"ResultSetting\":{\"dbName\":null,\"fields\":[{\"name\":\"resultType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ResultType\"},{\"name\":\"value\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ValueperCoin\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"ValueperCoin\":{\"dbName\":null,\"fields\":[{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1},{\"name\":\"coin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"RightperFrequency\":{\"dbName\":null,\"fields\":[{\"name\":\"right\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\"},{\"name\":\"frequency\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Frequency\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]}}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma-client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma-client/schema.prisma")
