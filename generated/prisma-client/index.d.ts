
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model ResultSetting
 * 
 */
export type ResultSetting = $Result.DefaultSelection<Prisma.$ResultSettingPayload>
/**
 * Model ValueperCoin
 * 
 */
export type ValueperCoin = $Result.DefaultSelection<Prisma.$ValueperCoinPayload>
/**
 * Model RightperFrequency
 * 
 */
export type RightperFrequency = $Result.DefaultSelection<Prisma.$RightperFrequencyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Earnrule
 * 
 */
export type Earnrule = $Result.DefaultSelection<Prisma.$EarnrulePayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Period: {
  ALL_TIME: 'ALL_TIME',
  CUSTOM: 'CUSTOM'
};

export type Period = (typeof Period)[keyof typeof Period]


export const PermissionFeature: {
  VIEW: 'VIEW',
  EDIT: 'EDIT'
};

export type PermissionFeature = (typeof PermissionFeature)[keyof typeof PermissionFeature]


export const Frequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

export type Frequency = (typeof Frequency)[keyof typeof Frequency]


export const ResultType: {
  FIXED: 'FIXED',
  BUY_AMOUNT: 'BUY_AMOUNT'
};

export type ResultType = (typeof ResultType)[keyof typeof ResultType]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Period = $Enums.Period

export const Period: typeof $Enums.Period

export type PermissionFeature = $Enums.PermissionFeature

export const PermissionFeature: typeof $Enums.PermissionFeature

export type Frequency = $Enums.Frequency

export const Frequency: typeof $Enums.Frequency

export type ResultType = $Enums.ResultType

export const ResultType: typeof $Enums.ResultType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.earnrule`: Exposes CRUD operations for the **Earnrule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Earnrules
    * const earnrules = await prisma.earnrule.findMany()
    * ```
    */
  get earnrule(): Prisma.EarnruleDelegate<ExtArgs>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Organization: 'Organization',
    Earnrule: 'Earnrule',
    Community: 'Community',
    Shop: 'Shop'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'admin' | 'organization' | 'earnrule' | 'community' | 'shop'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OrganizationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.OrganizationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>,
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Earnrule: {
        payload: Prisma.$EarnrulePayload<ExtArgs>
        fields: Prisma.EarnruleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EarnruleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EarnruleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload>
          }
          findFirst: {
            args: Prisma.EarnruleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EarnruleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload>
          }
          findMany: {
            args: Prisma.EarnruleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload>[]
          }
          create: {
            args: Prisma.EarnruleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload>
          }
          createMany: {
            args: Prisma.EarnruleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EarnruleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload>
          }
          update: {
            args: Prisma.EarnruleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload>
          }
          deleteMany: {
            args: Prisma.EarnruleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EarnruleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EarnruleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarnrulePayload>
          }
          aggregate: {
            args: Prisma.EarnruleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEarnrule>
          }
          groupBy: {
            args: Prisma.EarnruleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EarnruleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EarnruleFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.EarnruleAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.EarnruleCountArgs<ExtArgs>,
            result: $Utils.Optional<EarnruleCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommunityFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommunityAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>,
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ShopFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ShopAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>,
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    earnrule: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    earnrule?: boolean | UserCountOutputTypeCountEarnruleArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEarnruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarnruleWhereInput
  }



  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type EarnruleCountOutputType
   */

  export type EarnruleCountOutputType = {
    Community: number
    Shops: number
    User: number
  }

  export type EarnruleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Community?: boolean | EarnruleCountOutputTypeCountCommunityArgs
    Shops?: boolean | EarnruleCountOutputTypeCountShopsArgs
    User?: boolean | EarnruleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * EarnruleCountOutputType without action
   */
  export type EarnruleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarnruleCountOutputType
     */
    select?: EarnruleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EarnruleCountOutputType without action
   */
  export type EarnruleCountOutputTypeCountCommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * EarnruleCountOutputType without action
   */
  export type EarnruleCountOutputTypeCountShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }


  /**
   * EarnruleCountOutputType without action
   */
  export type EarnruleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    shop: number
    earnrule: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | CommunityCountOutputTypeCountShopArgs
    earnrule?: boolean | CommunityCountOutputTypeCountEarnruleArgs
  }

  // Custom InputTypes

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountEarnruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarnruleWhereInput
  }



  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    earnrule: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    earnrule?: boolean | ShopCountOutputTypeCountEarnruleArgs
  }

  // Custom InputTypes

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountEarnruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarnruleWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Permission
   */





  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feature?: boolean
    show?: boolean
    permissionFeature?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    feature?: boolean
    show?: boolean
    permissionFeature?: boolean
  }


  export type $PermissionPayload = {
    name: "Permission"
    objects: {}
    scalars: {
      feature: string
      show: boolean
      permissionFeature: $Enums.PermissionFeature
    }
    composites: {}
  }


  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>





  /**
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly feature: FieldRef<"Permission", 'String'>
    readonly show: FieldRef<"Permission", 'Boolean'>
    readonly permissionFeature: FieldRef<"Permission", 'PermissionFeature'>
  }
    

  // Custom InputTypes

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
  }



  /**
   * Model ResultSetting
   */





  export type ResultSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    resultType?: boolean
    value?: boolean | ValueperCoinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultSetting"]>

  export type ResultSettingSelectScalar = {
    resultType?: boolean
  }

  export type ResultSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $ResultSettingPayload = {
    name: "ResultSetting"
    objects: {}
    scalars: {
      resultType: $Enums.ResultType
    }
    composites: {
      value: Prisma.$ValueperCoinPayload
    }
  }


  type ResultSettingGetPayload<S extends boolean | null | undefined | ResultSettingDefaultArgs> = $Result.GetResult<Prisma.$ResultSettingPayload, S>





  /**
   * Fields of the ResultSetting model
   */ 
  interface ResultSettingFieldRefs {
    readonly resultType: FieldRef<"ResultSetting", 'ResultType'>
  }
    

  // Custom InputTypes

  /**
   * ResultSetting without action
   */
  export type ResultSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSetting
     */
    select?: ResultSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultSettingInclude<ExtArgs> | null
  }



  /**
   * Model ValueperCoin
   */





  export type ValueperCoinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    amount?: boolean
    coin?: boolean
  }, ExtArgs["result"]["valueperCoin"]>

  export type ValueperCoinSelectScalar = {
    amount?: boolean
    coin?: boolean
  }


  export type $ValueperCoinPayload = {
    name: "ValueperCoin"
    objects: {}
    scalars: {
      amount: number
      coin: number
    }
    composites: {}
  }


  type ValueperCoinGetPayload<S extends boolean | null | undefined | ValueperCoinDefaultArgs> = $Result.GetResult<Prisma.$ValueperCoinPayload, S>





  /**
   * Fields of the ValueperCoin model
   */ 
  interface ValueperCoinFieldRefs {
    readonly amount: FieldRef<"ValueperCoin", 'Int'>
    readonly coin: FieldRef<"ValueperCoin", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ValueperCoin without action
   */
  export type ValueperCoinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValueperCoin
     */
    select?: ValueperCoinSelect<ExtArgs> | null
  }



  /**
   * Model RightperFrequency
   */





  export type RightperFrequencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    right?: boolean
    frequency?: boolean
  }, ExtArgs["result"]["rightperFrequency"]>

  export type RightperFrequencySelectScalar = {
    right?: boolean
    frequency?: boolean
  }


  export type $RightperFrequencyPayload = {
    name: "RightperFrequency"
    objects: {}
    scalars: {
      right: number
      frequency: $Enums.Frequency
    }
    composites: {}
  }


  type RightperFrequencyGetPayload<S extends boolean | null | undefined | RightperFrequencyDefaultArgs> = $Result.GetResult<Prisma.$RightperFrequencyPayload, S>





  /**
   * Fields of the RightperFrequency model
   */ 
  interface RightperFrequencyFieldRefs {
    readonly right: FieldRef<"RightperFrequency", 'Int'>
    readonly frequency: FieldRef<"RightperFrequency", 'Frequency'>
  }
    

  // Custom InputTypes

  /**
   * RightperFrequency without action
   */
  export type RightperFrequencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RightperFrequency
     */
    select?: RightperFrequencySelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    name: string | null
    organizationId: string | null
    status: $Enums.Status | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    name: string | null
    organizationId: string | null
    status: $Enums.Status | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updated: number
    name: number
    organizationId: number
    status: number
    earnruleIds: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    organizationId?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    organizationId?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    organizationId?: true
    status?: true
    earnruleIds?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updated: Date
    name: string
    organizationId: string
    status: $Enums.Status | null
    earnruleIds: string[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    name?: boolean
    organizationId?: boolean
    status?: boolean
    earnruleIds?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    earnrule?: boolean | User$earnruleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    name?: boolean
    organizationId?: boolean
    status?: boolean
    earnruleIds?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    earnrule?: boolean | User$earnruleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      earnrule: Prisma.$EarnrulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updated: Date
      name: string
      organizationId: string
      status: $Enums.Status | null
      earnruleIds: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    earnrule<T extends User$earnruleArgs<ExtArgs> = {}>(args?: Subset<T, User$earnruleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updated: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Status'>
    readonly earnruleIds: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.earnrule
   */
  export type User$earnruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    where?: EarnruleWhereInput
    orderBy?: EarnruleOrderByWithRelationInput | EarnruleOrderByWithRelationInput[]
    cursor?: EarnruleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EarnruleScalarFieldEnum | EarnruleScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    created: Date | null
    updated: Date | null
    name: string | null
    email: string | null
    profilePic: string | null
    phone: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    created: Date | null
    updated: Date | null
    name: string | null
    email: string | null
    profilePic: string | null
    phone: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    created: number
    updated: number
    name: number
    email: number
    profilePic: number
    phone: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    created?: true
    updated?: true
    name?: true
    email?: true
    profilePic?: true
    phone?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    created?: true
    updated?: true
    name?: true
    email?: true
    profilePic?: true
    phone?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    created?: true
    updated?: true
    name?: true
    email?: true
    profilePic?: true
    phone?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    created: Date
    updated: Date
    name: string
    email: string
    profilePic: string | null
    phone: string | null
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    updated?: boolean
    name?: boolean
    email?: boolean
    profilePic?: boolean
    phone?: boolean
    permissions?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    created?: boolean
    updated?: boolean
    name?: boolean
    email?: boolean
    profilePic?: boolean
    phone?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created: Date
      updated: Date
      name: string
      email: string
      profilePic: string | null
      phone: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {
      permissions: Prisma.$PermissionPayload[]
    }
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AdminFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AdminAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly created: FieldRef<"Admin", 'DateTime'>
    readonly updated: FieldRef<"Admin", 'DateTime'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly profilePic: FieldRef<"Admin", 'String'>
    readonly phone: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
  }



  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    name: string | null
    Instagram: string | null
    Facebook: string | null
    type: string | null
    status: $Enums.Status | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    name: string | null
    Instagram: string | null
    Facebook: string | null
    type: string | null
    status: $Enums.Status | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    createdAt: number
    updated: number
    name: number
    Instagram: number
    Facebook: number
    type: number
    status: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    Instagram?: true
    Facebook?: true
    type?: true
    status?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    Instagram?: true
    Facebook?: true
    type?: true
    status?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    Instagram?: true
    Facebook?: true
    type?: true
    status?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    createdAt: Date
    updated: Date
    name: string
    Instagram: string | null
    Facebook: string | null
    type: string
    status: $Enums.Status
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    name?: boolean
    Instagram?: boolean
    Facebook?: boolean
    type?: boolean
    status?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    name?: boolean
    Instagram?: boolean
    Facebook?: boolean
    type?: boolean
    status?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updated: Date
      name: string
      Instagram: string | null
      Facebook: string | null
      type: string
      status: $Enums.Status
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }


  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends OrganizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Organizations.
     *     @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrganizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends OrganizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends OrganizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * @param {OrganizationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const organization = await prisma.organization.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: OrganizationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Organization.
     * @param {OrganizationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const organization = await prisma.organization.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: OrganizationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updated: FieldRef<"Organization", 'DateTime'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly Instagram: FieldRef<"Organization", 'String'>
    readonly Facebook: FieldRef<"Organization", 'String'>
    readonly type: FieldRef<"Organization", 'String'>
    readonly status: FieldRef<"Organization", 'Status'>
  }
    

  // Custom InputTypes

  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }


  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }


  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }


  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }


  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }


  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }


  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }


  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }


  /**
   * Organization findRaw
   */
  export type OrganizationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Organization aggregateRaw
   */
  export type OrganizationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude<ExtArgs> | null
  }



  /**
   * Model Earnrule
   */

  export type AggregateEarnrule = {
    _count: EarnruleCountAggregateOutputType | null
    _min: EarnruleMinAggregateOutputType | null
    _max: EarnruleMaxAggregateOutputType | null
  }

  export type EarnruleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    name: string | null
    type: string | null
    period: $Enums.Period | null
    startDate: Date | null
    endDate: Date | null
    nextUpdateEarnrule: Date | null
    picture: string | null
    active: boolean | null
  }

  export type EarnruleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    name: string | null
    type: string | null
    period: $Enums.Period | null
    startDate: Date | null
    endDate: Date | null
    nextUpdateEarnrule: Date | null
    picture: string | null
    active: boolean | null
  }

  export type EarnruleCountAggregateOutputType = {
    id: number
    createdAt: number
    updated: number
    name: number
    type: number
    period: number
    startDate: number
    endDate: number
    nextUpdateEarnrule: number
    picture: number
    active: number
    communityIds: number
    shopIds: number
    userId: number
    userUseEarnrule: number
    _all: number
  }


  export type EarnruleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    type?: true
    period?: true
    startDate?: true
    endDate?: true
    nextUpdateEarnrule?: true
    picture?: true
    active?: true
  }

  export type EarnruleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    type?: true
    period?: true
    startDate?: true
    endDate?: true
    nextUpdateEarnrule?: true
    picture?: true
    active?: true
  }

  export type EarnruleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    type?: true
    period?: true
    startDate?: true
    endDate?: true
    nextUpdateEarnrule?: true
    picture?: true
    active?: true
    communityIds?: true
    shopIds?: true
    userId?: true
    userUseEarnrule?: true
    _all?: true
  }

  export type EarnruleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Earnrule to aggregate.
     */
    where?: EarnruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnrules to fetch.
     */
    orderBy?: EarnruleOrderByWithRelationInput | EarnruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EarnruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnrules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnrules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Earnrules
    **/
    _count?: true | EarnruleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EarnruleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EarnruleMaxAggregateInputType
  }

  export type GetEarnruleAggregateType<T extends EarnruleAggregateArgs> = {
        [P in keyof T & keyof AggregateEarnrule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEarnrule[P]>
      : GetScalarType<T[P], AggregateEarnrule[P]>
  }




  export type EarnruleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarnruleWhereInput
    orderBy?: EarnruleOrderByWithAggregationInput | EarnruleOrderByWithAggregationInput[]
    by: EarnruleScalarFieldEnum[] | EarnruleScalarFieldEnum
    having?: EarnruleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EarnruleCountAggregateInputType | true
    _min?: EarnruleMinAggregateInputType
    _max?: EarnruleMaxAggregateInputType
  }

  export type EarnruleGroupByOutputType = {
    id: string
    createdAt: Date
    updated: Date
    name: string
    type: string
    period: $Enums.Period
    startDate: Date | null
    endDate: Date | null
    nextUpdateEarnrule: Date | null
    picture: string
    active: boolean
    communityIds: string[]
    shopIds: string[]
    userId: string[]
    userUseEarnrule: JsonValue | null
    _count: EarnruleCountAggregateOutputType | null
    _min: EarnruleMinAggregateOutputType | null
    _max: EarnruleMaxAggregateOutputType | null
  }

  type GetEarnruleGroupByPayload<T extends EarnruleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EarnruleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EarnruleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EarnruleGroupByOutputType[P]>
            : GetScalarType<T[P], EarnruleGroupByOutputType[P]>
        }
      >
    >


  export type EarnruleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    name?: boolean
    type?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    nextUpdateEarnrule?: boolean
    picture?: boolean
    frequency?: boolean | RightperFrequencyDefaultArgs<ExtArgs>
    setting?: boolean | ResultSettingDefaultArgs<ExtArgs>
    active?: boolean
    communityIds?: boolean
    shopIds?: boolean
    userId?: boolean
    userUseEarnrule?: boolean
    Community?: boolean | Earnrule$CommunityArgs<ExtArgs>
    Shops?: boolean | Earnrule$ShopsArgs<ExtArgs>
    User?: boolean | Earnrule$UserArgs<ExtArgs>
    _count?: boolean | EarnruleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earnrule"]>

  export type EarnruleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    name?: boolean
    type?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    nextUpdateEarnrule?: boolean
    picture?: boolean
    active?: boolean
    communityIds?: boolean
    shopIds?: boolean
    userId?: boolean
    userUseEarnrule?: boolean
  }

  export type EarnruleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Community?: boolean | Earnrule$CommunityArgs<ExtArgs>
    Shops?: boolean | Earnrule$ShopsArgs<ExtArgs>
    User?: boolean | Earnrule$UserArgs<ExtArgs>
    _count?: boolean | EarnruleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EarnrulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Earnrule"
    objects: {
      Community: Prisma.$CommunityPayload<ExtArgs>[]
      Shops: Prisma.$ShopPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updated: Date
      name: string
      type: string
      period: $Enums.Period
      startDate: Date | null
      endDate: Date | null
      nextUpdateEarnrule: Date | null
      picture: string
      active: boolean
      communityIds: string[]
      shopIds: string[]
      userId: string[]
      userUseEarnrule: Prisma.JsonValue | null
    }, ExtArgs["result"]["earnrule"]>
    composites: {
      frequency: Prisma.$RightperFrequencyPayload
      setting: Prisma.$ResultSettingPayload
    }
  }


  type EarnruleGetPayload<S extends boolean | null | undefined | EarnruleDefaultArgs> = $Result.GetResult<Prisma.$EarnrulePayload, S>

  type EarnruleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EarnruleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EarnruleCountAggregateInputType | true
    }

  export interface EarnruleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Earnrule'], meta: { name: 'Earnrule' } }
    /**
     * Find zero or one Earnrule that matches the filter.
     * @param {EarnruleFindUniqueArgs} args - Arguments to find a Earnrule
     * @example
     * // Get one Earnrule
     * const earnrule = await prisma.earnrule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EarnruleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EarnruleFindUniqueArgs<ExtArgs>>
    ): Prisma__EarnruleClient<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Earnrule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EarnruleFindUniqueOrThrowArgs} args - Arguments to find a Earnrule
     * @example
     * // Get one Earnrule
     * const earnrule = await prisma.earnrule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EarnruleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EarnruleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EarnruleClient<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Earnrule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarnruleFindFirstArgs} args - Arguments to find a Earnrule
     * @example
     * // Get one Earnrule
     * const earnrule = await prisma.earnrule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EarnruleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EarnruleFindFirstArgs<ExtArgs>>
    ): Prisma__EarnruleClient<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Earnrule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarnruleFindFirstOrThrowArgs} args - Arguments to find a Earnrule
     * @example
     * // Get one Earnrule
     * const earnrule = await prisma.earnrule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EarnruleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EarnruleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EarnruleClient<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Earnrules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarnruleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Earnrules
     * const earnrules = await prisma.earnrule.findMany()
     * 
     * // Get first 10 Earnrules
     * const earnrules = await prisma.earnrule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const earnruleWithIdOnly = await prisma.earnrule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EarnruleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EarnruleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Earnrule.
     * @param {EarnruleCreateArgs} args - Arguments to create a Earnrule.
     * @example
     * // Create one Earnrule
     * const Earnrule = await prisma.earnrule.create({
     *   data: {
     *     // ... data to create a Earnrule
     *   }
     * })
     * 
    **/
    create<T extends EarnruleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EarnruleCreateArgs<ExtArgs>>
    ): Prisma__EarnruleClient<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Earnrules.
     *     @param {EarnruleCreateManyArgs} args - Arguments to create many Earnrules.
     *     @example
     *     // Create many Earnrules
     *     const earnrule = await prisma.earnrule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EarnruleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EarnruleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Earnrule.
     * @param {EarnruleDeleteArgs} args - Arguments to delete one Earnrule.
     * @example
     * // Delete one Earnrule
     * const Earnrule = await prisma.earnrule.delete({
     *   where: {
     *     // ... filter to delete one Earnrule
     *   }
     * })
     * 
    **/
    delete<T extends EarnruleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EarnruleDeleteArgs<ExtArgs>>
    ): Prisma__EarnruleClient<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Earnrule.
     * @param {EarnruleUpdateArgs} args - Arguments to update one Earnrule.
     * @example
     * // Update one Earnrule
     * const earnrule = await prisma.earnrule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EarnruleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EarnruleUpdateArgs<ExtArgs>>
    ): Prisma__EarnruleClient<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Earnrules.
     * @param {EarnruleDeleteManyArgs} args - Arguments to filter Earnrules to delete.
     * @example
     * // Delete a few Earnrules
     * const { count } = await prisma.earnrule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EarnruleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EarnruleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Earnrules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarnruleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Earnrules
     * const earnrule = await prisma.earnrule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EarnruleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EarnruleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Earnrule.
     * @param {EarnruleUpsertArgs} args - Arguments to update or create a Earnrule.
     * @example
     * // Update or create a Earnrule
     * const earnrule = await prisma.earnrule.upsert({
     *   create: {
     *     // ... data to create a Earnrule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Earnrule we want to update
     *   }
     * })
    **/
    upsert<T extends EarnruleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EarnruleUpsertArgs<ExtArgs>>
    ): Prisma__EarnruleClient<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Earnrules that matches the filter.
     * @param {EarnruleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const earnrule = await prisma.earnrule.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: EarnruleFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Earnrule.
     * @param {EarnruleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const earnrule = await prisma.earnrule.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: EarnruleAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Earnrules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarnruleCountArgs} args - Arguments to filter Earnrules to count.
     * @example
     * // Count the number of Earnrules
     * const count = await prisma.earnrule.count({
     *   where: {
     *     // ... the filter for the Earnrules we want to count
     *   }
     * })
    **/
    count<T extends EarnruleCountArgs>(
      args?: Subset<T, EarnruleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EarnruleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Earnrule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarnruleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EarnruleAggregateArgs>(args: Subset<T, EarnruleAggregateArgs>): Prisma.PrismaPromise<GetEarnruleAggregateType<T>>

    /**
     * Group by Earnrule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarnruleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EarnruleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EarnruleGroupByArgs['orderBy'] }
        : { orderBy?: EarnruleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EarnruleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEarnruleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Earnrule model
   */
  readonly fields: EarnruleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Earnrule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EarnruleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Community<T extends Earnrule$CommunityArgs<ExtArgs> = {}>(args?: Subset<T, Earnrule$CommunityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'> | Null>;

    Shops<T extends Earnrule$ShopsArgs<ExtArgs> = {}>(args?: Subset<T, Earnrule$ShopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends Earnrule$UserArgs<ExtArgs> = {}>(args?: Subset<T, Earnrule$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Earnrule model
   */ 
  interface EarnruleFieldRefs {
    readonly id: FieldRef<"Earnrule", 'String'>
    readonly createdAt: FieldRef<"Earnrule", 'DateTime'>
    readonly updated: FieldRef<"Earnrule", 'DateTime'>
    readonly name: FieldRef<"Earnrule", 'String'>
    readonly type: FieldRef<"Earnrule", 'String'>
    readonly period: FieldRef<"Earnrule", 'Period'>
    readonly startDate: FieldRef<"Earnrule", 'DateTime'>
    readonly endDate: FieldRef<"Earnrule", 'DateTime'>
    readonly nextUpdateEarnrule: FieldRef<"Earnrule", 'DateTime'>
    readonly picture: FieldRef<"Earnrule", 'String'>
    readonly active: FieldRef<"Earnrule", 'Boolean'>
    readonly communityIds: FieldRef<"Earnrule", 'String[]'>
    readonly shopIds: FieldRef<"Earnrule", 'String[]'>
    readonly userId: FieldRef<"Earnrule", 'String[]'>
    readonly userUseEarnrule: FieldRef<"Earnrule", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Earnrule findUnique
   */
  export type EarnruleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * Filter, which Earnrule to fetch.
     */
    where: EarnruleWhereUniqueInput
  }


  /**
   * Earnrule findUniqueOrThrow
   */
  export type EarnruleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * Filter, which Earnrule to fetch.
     */
    where: EarnruleWhereUniqueInput
  }


  /**
   * Earnrule findFirst
   */
  export type EarnruleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * Filter, which Earnrule to fetch.
     */
    where?: EarnruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnrules to fetch.
     */
    orderBy?: EarnruleOrderByWithRelationInput | EarnruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Earnrules.
     */
    cursor?: EarnruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnrules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnrules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Earnrules.
     */
    distinct?: EarnruleScalarFieldEnum | EarnruleScalarFieldEnum[]
  }


  /**
   * Earnrule findFirstOrThrow
   */
  export type EarnruleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * Filter, which Earnrule to fetch.
     */
    where?: EarnruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnrules to fetch.
     */
    orderBy?: EarnruleOrderByWithRelationInput | EarnruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Earnrules.
     */
    cursor?: EarnruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnrules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnrules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Earnrules.
     */
    distinct?: EarnruleScalarFieldEnum | EarnruleScalarFieldEnum[]
  }


  /**
   * Earnrule findMany
   */
  export type EarnruleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * Filter, which Earnrules to fetch.
     */
    where?: EarnruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnrules to fetch.
     */
    orderBy?: EarnruleOrderByWithRelationInput | EarnruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Earnrules.
     */
    cursor?: EarnruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnrules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnrules.
     */
    skip?: number
    distinct?: EarnruleScalarFieldEnum | EarnruleScalarFieldEnum[]
  }


  /**
   * Earnrule create
   */
  export type EarnruleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * The data needed to create a Earnrule.
     */
    data: XOR<EarnruleCreateInput, EarnruleUncheckedCreateInput>
  }


  /**
   * Earnrule createMany
   */
  export type EarnruleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Earnrules.
     */
    data: EarnruleCreateManyInput | EarnruleCreateManyInput[]
  }


  /**
   * Earnrule update
   */
  export type EarnruleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * The data needed to update a Earnrule.
     */
    data: XOR<EarnruleUpdateInput, EarnruleUncheckedUpdateInput>
    /**
     * Choose, which Earnrule to update.
     */
    where: EarnruleWhereUniqueInput
  }


  /**
   * Earnrule updateMany
   */
  export type EarnruleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Earnrules.
     */
    data: XOR<EarnruleUpdateManyMutationInput, EarnruleUncheckedUpdateManyInput>
    /**
     * Filter which Earnrules to update
     */
    where?: EarnruleWhereInput
  }


  /**
   * Earnrule upsert
   */
  export type EarnruleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * The filter to search for the Earnrule to update in case it exists.
     */
    where: EarnruleWhereUniqueInput
    /**
     * In case the Earnrule found by the `where` argument doesn't exist, create a new Earnrule with this data.
     */
    create: XOR<EarnruleCreateInput, EarnruleUncheckedCreateInput>
    /**
     * In case the Earnrule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EarnruleUpdateInput, EarnruleUncheckedUpdateInput>
  }


  /**
   * Earnrule delete
   */
  export type EarnruleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    /**
     * Filter which Earnrule to delete.
     */
    where: EarnruleWhereUniqueInput
  }


  /**
   * Earnrule deleteMany
   */
  export type EarnruleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Earnrules to delete
     */
    where?: EarnruleWhereInput
  }


  /**
   * Earnrule findRaw
   */
  export type EarnruleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Earnrule aggregateRaw
   */
  export type EarnruleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Earnrule.Community
   */
  export type Earnrule$CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Earnrule.Shops
   */
  export type Earnrule$ShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Earnrule.User
   */
  export type Earnrule$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Earnrule without action
   */
  export type EarnruleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
  }



  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    thaiName: string | null
    englishName: string | null
    founded: Date | null
    active: boolean | null
    description: string | null
    owner: string | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    thaiName: string | null
    englishName: string | null
    founded: Date | null
    active: boolean | null
    description: string | null
    owner: string | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    createdAt: number
    updated: number
    thaiName: number
    englishName: number
    founded: number
    active: number
    description: number
    owner: number
    earnruleIds: number
    _all: number
  }


  export type CommunityMinAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    thaiName?: true
    englishName?: true
    founded?: true
    active?: true
    description?: true
    owner?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    thaiName?: true
    englishName?: true
    founded?: true
    active?: true
    description?: true
    owner?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    thaiName?: true
    englishName?: true
    founded?: true
    active?: true
    description?: true
    owner?: true
    earnruleIds?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: string
    createdAt: Date
    updated: Date
    thaiName: string
    englishName: string
    founded: Date
    active: boolean
    description: string | null
    owner: string
    earnruleIds: string[]
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    thaiName?: boolean
    englishName?: boolean
    founded?: boolean
    active?: boolean
    description?: boolean
    owner?: boolean
    earnruleIds?: boolean
    shop?: boolean | Community$shopArgs<ExtArgs>
    earnrule?: boolean | Community$earnruleArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    thaiName?: boolean
    englishName?: boolean
    founded?: boolean
    active?: boolean
    description?: boolean
    owner?: boolean
    earnruleIds?: boolean
  }

  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | Community$shopArgs<ExtArgs>
    earnrule?: boolean | Community$earnruleArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>[]
      earnrule: Prisma.$EarnrulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updated: Date
      thaiName: string
      englishName: string
      founded: Date
      active: boolean
      description: string | null
      owner: string
      earnruleIds: string[]
    }, ExtArgs["result"]["community"]>
    composites: {}
  }


  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Community that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommunityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
    **/
    create<T extends CommunityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Communities.
     *     @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     *     @example
     *     // Create many Communities
     *     const community = await prisma.community.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
    **/
    delete<T extends CommunityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
    **/
    upsert<T extends CommunityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Communities that matches the filter.
     * @param {CommunityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const community = await prisma.community.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CommunityFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Community.
     * @param {CommunityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const community = await prisma.community.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CommunityAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    shop<T extends Community$shopArgs<ExtArgs> = {}>(args?: Subset<T, Community$shopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findMany'> | Null>;

    earnrule<T extends Community$earnruleArgs<ExtArgs> = {}>(args?: Subset<T, Community$earnruleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Community model
   */ 
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updated: FieldRef<"Community", 'DateTime'>
    readonly thaiName: FieldRef<"Community", 'String'>
    readonly englishName: FieldRef<"Community", 'String'>
    readonly founded: FieldRef<"Community", 'DateTime'>
    readonly active: FieldRef<"Community", 'Boolean'>
    readonly description: FieldRef<"Community", 'String'>
    readonly owner: FieldRef<"Community", 'String'>
    readonly earnruleIds: FieldRef<"Community", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }


  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
  }


  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
  }


  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }


  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
  }


  /**
   * Community findRaw
   */
  export type CommunityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Community aggregateRaw
   */
  export type CommunityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Community.shop
   */
  export type Community$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Community.earnrule
   */
  export type Community$earnruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    where?: EarnruleWhereInput
    orderBy?: EarnruleOrderByWithRelationInput | EarnruleOrderByWithRelationInput[]
    cursor?: EarnruleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EarnruleScalarFieldEnum | EarnruleScalarFieldEnum[]
  }


  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
  }



  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    name: string | null
    communityId: string | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updated: Date | null
    name: string | null
    communityId: string | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    createdAt: number
    updated: number
    name: number
    communityId: number
    earnruleIds: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    communityId?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    communityId?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    createdAt?: true
    updated?: true
    name?: true
    communityId?: true
    earnruleIds?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    createdAt: Date
    updated: Date
    name: string
    communityId: string
    earnruleIds: string[]
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    name?: boolean
    communityId?: boolean
    earnruleIds?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    earnrule?: boolean | Shop$earnruleArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updated?: boolean
    name?: boolean
    communityId?: boolean
    earnruleIds?: boolean
  }

  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    earnrule?: boolean | Shop$earnruleArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      earnrule: Prisma.$EarnrulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updated: Date
      name: string
      communityId: string
      earnruleIds: string[]
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }


  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Shop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
    **/
    create<T extends ShopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopCreateArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Shops.
     *     @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     *     @example
     *     // Create many Shops
     *     const shop = await prisma.shop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
    **/
    delete<T extends ShopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
    **/
    upsert<T extends ShopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Shops that matches the filter.
     * @param {ShopFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shop = await prisma.shop.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ShopFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Shop.
     * @param {ShopAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shop = await prisma.shop.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ShopAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    earnrule<T extends Shop$earnruleArgs<ExtArgs> = {}>(args?: Subset<T, Shop$earnruleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarnrulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Shop model
   */ 
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updated: FieldRef<"Shop", 'DateTime'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly communityId: FieldRef<"Shop", 'String'>
    readonly earnruleIds: FieldRef<"Shop", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }


  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
  }


  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
  }


  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }


  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
  }


  /**
   * Shop findRaw
   */
  export type ShopFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Shop aggregateRaw
   */
  export type ShopAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Shop.earnrule
   */
  export type Shop$earnruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnrule
     */
    select?: EarnruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarnruleInclude<ExtArgs> | null
    where?: EarnruleWhereInput
    orderBy?: EarnruleOrderByWithRelationInput | EarnruleOrderByWithRelationInput[]
    cursor?: EarnruleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EarnruleScalarFieldEnum | EarnruleScalarFieldEnum[]
  }


  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updated: 'updated',
    name: 'name',
    organizationId: 'organizationId',
    status: 'status',
    earnruleIds: 'earnruleIds'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    created: 'created',
    updated: 'updated',
    name: 'name',
    email: 'email',
    profilePic: 'profilePic',
    phone: 'phone'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updated: 'updated',
    name: 'name',
    Instagram: 'Instagram',
    Facebook: 'Facebook',
    type: 'type',
    status: 'status'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const EarnruleScalarFieldEnum: {
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

  export type EarnruleScalarFieldEnum = (typeof EarnruleScalarFieldEnum)[keyof typeof EarnruleScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
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

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updated: 'updated',
    name: 'name',
    communityId: 'communityId',
    earnruleIds: 'earnruleIds'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Period'
   */
  export type EnumPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Period'>
    


  /**
   * Reference to a field of type 'Period[]'
   */
  export type ListEnumPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Period[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PermissionFeature'
   */
  export type EnumPermissionFeatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionFeature'>
    


  /**
   * Reference to a field of type 'PermissionFeature[]'
   */
  export type ListEnumPermissionFeatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionFeature[]'>
    


  /**
   * Reference to a field of type 'Frequency'
   */
  export type EnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency'>
    


  /**
   * Reference to a field of type 'Frequency[]'
   */
  export type ListEnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency[]'>
    


  /**
   * Reference to a field of type 'ResultType'
   */
  export type EnumResultTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultType'>
    


  /**
   * Reference to a field of type 'ResultType[]'
   */
  export type ListEnumResultTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updated?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    status?: EnumStatusNullableFilter<"User"> | $Enums.Status | null
    earnruleIds?: StringNullableListFilter<"User">
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    earnrule?: EarnruleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    earnruleIds?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    earnrule?: EarnruleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updated?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringFilter<"User"> | string
    status?: EnumStatusNullableFilter<"User"> | $Enums.Status | null
    earnruleIds?: StringNullableListFilter<"User">
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    earnrule?: EarnruleListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    earnruleIds?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringWithAggregatesFilter<"User"> | string
    organizationId?: StringWithAggregatesFilter<"User"> | string
    status?: EnumStatusNullableWithAggregatesFilter<"User"> | $Enums.Status | null
    earnruleIds?: StringNullableListFilter<"User">
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    created?: DateTimeFilter<"Admin"> | Date | string
    updated?: DateTimeFilter<"Admin"> | Date | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    profilePic?: StringNullableFilter<"Admin"> | string | null
    phone?: StringNullableFilter<"Admin"> | string | null
    permissions?: PermissionCompositeListFilter | PermissionObjectEqualityInput[]
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrder
    phone?: SortOrder
    permissions?: PermissionOrderByCompositeAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    created?: DateTimeFilter<"Admin"> | Date | string
    updated?: DateTimeFilter<"Admin"> | Date | string
    profilePic?: StringNullableFilter<"Admin"> | string | null
    phone?: StringNullableFilter<"Admin"> | string | null
    permissions?: PermissionCompositeListFilter | PermissionObjectEqualityInput[]
  }, "id" | "name" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrder
    phone?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    created?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    profilePic?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Admin"> | string | null
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updated?: DateTimeFilter<"Organization"> | Date | string
    name?: StringFilter<"Organization"> | string
    Instagram?: StringNullableFilter<"Organization"> | string | null
    Facebook?: StringNullableFilter<"Organization"> | string | null
    type?: StringFilter<"Organization"> | string
    status?: EnumStatusFilter<"Organization"> | $Enums.Status
    users?: UserListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    Instagram?: SortOrder
    Facebook?: SortOrder
    type?: SortOrder
    status?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updated?: DateTimeFilter<"Organization"> | Date | string
    Instagram?: StringNullableFilter<"Organization"> | string | null
    Facebook?: StringNullableFilter<"Organization"> | string | null
    type?: StringFilter<"Organization"> | string
    status?: EnumStatusFilter<"Organization"> | $Enums.Status
    users?: UserListRelationFilter
  }, "id" | "name">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    Instagram?: SortOrder
    Facebook?: SortOrder
    type?: SortOrder
    status?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    Instagram?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    Facebook?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    type?: StringWithAggregatesFilter<"Organization"> | string
    status?: EnumStatusWithAggregatesFilter<"Organization"> | $Enums.Status
  }

  export type EarnruleWhereInput = {
    AND?: EarnruleWhereInput | EarnruleWhereInput[]
    OR?: EarnruleWhereInput[]
    NOT?: EarnruleWhereInput | EarnruleWhereInput[]
    id?: StringFilter<"Earnrule"> | string
    createdAt?: DateTimeFilter<"Earnrule"> | Date | string
    updated?: DateTimeFilter<"Earnrule"> | Date | string
    name?: StringFilter<"Earnrule"> | string
    type?: StringFilter<"Earnrule"> | string
    period?: EnumPeriodFilter<"Earnrule"> | $Enums.Period
    startDate?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    nextUpdateEarnrule?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    picture?: StringFilter<"Earnrule"> | string
    frequency?: XOR<RightperFrequencyCompositeFilter, RightperFrequencyObjectEqualityInput>
    setting?: XOR<ResultSettingCompositeFilter, ResultSettingObjectEqualityInput>
    active?: BoolFilter<"Earnrule"> | boolean
    communityIds?: StringNullableListFilter<"Earnrule">
    shopIds?: StringNullableListFilter<"Earnrule">
    userId?: StringNullableListFilter<"Earnrule">
    userUseEarnrule?: JsonNullableFilter<"Earnrule">
    Community?: CommunityListRelationFilter
    Shops?: ShopListRelationFilter
    User?: UserListRelationFilter
  }

  export type EarnruleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    type?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    nextUpdateEarnrule?: SortOrder
    picture?: SortOrder
    frequency?: RightperFrequencyOrderByInput
    setting?: ResultSettingOrderByInput
    active?: SortOrder
    communityIds?: SortOrder
    shopIds?: SortOrder
    userId?: SortOrder
    userUseEarnrule?: SortOrder
    Community?: CommunityOrderByRelationAggregateInput
    Shops?: ShopOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type EarnruleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: EarnruleWhereInput | EarnruleWhereInput[]
    OR?: EarnruleWhereInput[]
    NOT?: EarnruleWhereInput | EarnruleWhereInput[]
    createdAt?: DateTimeFilter<"Earnrule"> | Date | string
    updated?: DateTimeFilter<"Earnrule"> | Date | string
    type?: StringFilter<"Earnrule"> | string
    period?: EnumPeriodFilter<"Earnrule"> | $Enums.Period
    startDate?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    nextUpdateEarnrule?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    picture?: StringFilter<"Earnrule"> | string
    frequency?: XOR<RightperFrequencyCompositeFilter, RightperFrequencyObjectEqualityInput>
    setting?: XOR<ResultSettingCompositeFilter, ResultSettingObjectEqualityInput>
    active?: BoolFilter<"Earnrule"> | boolean
    communityIds?: StringNullableListFilter<"Earnrule">
    shopIds?: StringNullableListFilter<"Earnrule">
    userId?: StringNullableListFilter<"Earnrule">
    userUseEarnrule?: JsonNullableFilter<"Earnrule">
    Community?: CommunityListRelationFilter
    Shops?: ShopListRelationFilter
    User?: UserListRelationFilter
  }, "id" | "name">

  export type EarnruleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    type?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    nextUpdateEarnrule?: SortOrder
    picture?: SortOrder
    active?: SortOrder
    communityIds?: SortOrder
    shopIds?: SortOrder
    userId?: SortOrder
    userUseEarnrule?: SortOrder
    _count?: EarnruleCountOrderByAggregateInput
    _max?: EarnruleMaxOrderByAggregateInput
    _min?: EarnruleMinOrderByAggregateInput
  }

  export type EarnruleScalarWhereWithAggregatesInput = {
    AND?: EarnruleScalarWhereWithAggregatesInput | EarnruleScalarWhereWithAggregatesInput[]
    OR?: EarnruleScalarWhereWithAggregatesInput[]
    NOT?: EarnruleScalarWhereWithAggregatesInput | EarnruleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Earnrule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Earnrule"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Earnrule"> | Date | string
    name?: StringWithAggregatesFilter<"Earnrule"> | string
    type?: StringWithAggregatesFilter<"Earnrule"> | string
    period?: EnumPeriodWithAggregatesFilter<"Earnrule"> | $Enums.Period
    startDate?: DateTimeNullableWithAggregatesFilter<"Earnrule"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Earnrule"> | Date | string | null
    nextUpdateEarnrule?: DateTimeNullableWithAggregatesFilter<"Earnrule"> | Date | string | null
    picture?: StringWithAggregatesFilter<"Earnrule"> | string
    active?: BoolWithAggregatesFilter<"Earnrule"> | boolean
    communityIds?: StringNullableListFilter<"Earnrule">
    shopIds?: StringNullableListFilter<"Earnrule">
    userId?: StringNullableListFilter<"Earnrule">
    userUseEarnrule?: JsonNullableWithAggregatesFilter<"Earnrule">
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updated?: DateTimeFilter<"Community"> | Date | string
    thaiName?: StringFilter<"Community"> | string
    englishName?: StringFilter<"Community"> | string
    founded?: DateTimeFilter<"Community"> | Date | string
    active?: BoolFilter<"Community"> | boolean
    description?: StringNullableFilter<"Community"> | string | null
    owner?: StringFilter<"Community"> | string
    earnruleIds?: StringNullableListFilter<"Community">
    shop?: ShopListRelationFilter
    earnrule?: EarnruleListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    thaiName?: SortOrder
    englishName?: SortOrder
    founded?: SortOrder
    active?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    earnruleIds?: SortOrder
    shop?: ShopOrderByRelationAggregateInput
    earnrule?: EarnruleOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    thaiName?: string
    englishName?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updated?: DateTimeFilter<"Community"> | Date | string
    founded?: DateTimeFilter<"Community"> | Date | string
    active?: BoolFilter<"Community"> | boolean
    description?: StringNullableFilter<"Community"> | string | null
    owner?: StringFilter<"Community"> | string
    earnruleIds?: StringNullableListFilter<"Community">
    shop?: ShopListRelationFilter
    earnrule?: EarnruleListRelationFilter
  }, "id" | "thaiName" | "englishName">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    thaiName?: SortOrder
    englishName?: SortOrder
    founded?: SortOrder
    active?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    earnruleIds?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Community"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    thaiName?: StringWithAggregatesFilter<"Community"> | string
    englishName?: StringWithAggregatesFilter<"Community"> | string
    founded?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    active?: BoolWithAggregatesFilter<"Community"> | boolean
    description?: StringNullableWithAggregatesFilter<"Community"> | string | null
    owner?: StringWithAggregatesFilter<"Community"> | string
    earnruleIds?: StringNullableListFilter<"Community">
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updated?: DateTimeFilter<"Shop"> | Date | string
    name?: StringFilter<"Shop"> | string
    communityId?: StringFilter<"Shop"> | string
    earnruleIds?: StringNullableListFilter<"Shop">
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    earnrule?: EarnruleListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
    earnruleIds?: SortOrder
    community?: CommunityOrderByWithRelationInput
    earnrule?: EarnruleOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updated?: DateTimeFilter<"Shop"> | Date | string
    communityId?: StringFilter<"Shop"> | string
    earnruleIds?: StringNullableListFilter<"Shop">
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    earnrule?: EarnruleListRelationFilter
  }, "id" | "name">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
    earnruleIds?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    communityId?: StringWithAggregatesFilter<"Shop"> | string
    earnruleIds?: StringNullableListFilter<"Shop">
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    status?: $Enums.Status | null
    organization: OrganizationCreateNestedOneWithoutUsersInput
    earnrule?: EarnruleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    organizationId: string
    status?: $Enums.Status | null
    earnruleIds?: UserCreateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    earnrule?: EarnruleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    earnruleIds?: UserUpdateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    organizationId: string
    status?: $Enums.Status | null
    earnruleIds?: UserCreateearnruleIdsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    earnruleIds?: UserUpdateearnruleIdsInput | string[]
  }

  export type AdminCreateInput = {
    id?: string
    created?: Date | string
    updated?: Date | string
    name: string
    email: string
    profilePic?: string | null
    phone?: string | null
    permissions?: XOR<PermissionListCreateEnvelopeInput, PermissionCreateInput> | PermissionCreateInput[]
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    created?: Date | string
    updated?: Date | string
    name: string
    email: string
    profilePic?: string | null
    phone?: string | null
    permissions?: XOR<PermissionListCreateEnvelopeInput, PermissionCreateInput> | PermissionCreateInput[]
  }

  export type AdminUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: XOR<PermissionListUpdateEnvelopeInput, PermissionCreateInput> | PermissionCreateInput[]
  }

  export type AdminUncheckedUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: XOR<PermissionListUpdateEnvelopeInput, PermissionCreateInput> | PermissionCreateInput[]
  }

  export type AdminCreateManyInput = {
    id?: string
    created?: Date | string
    updated?: Date | string
    name: string
    email: string
    profilePic?: string | null
    phone?: string | null
    permissions?: XOR<PermissionListCreateEnvelopeInput, PermissionCreateInput> | PermissionCreateInput[]
  }

  export type AdminUpdateManyMutationInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: XOR<PermissionListUpdateEnvelopeInput, PermissionCreateInput> | PermissionCreateInput[]
  }

  export type AdminUncheckedUpdateManyInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: XOR<PermissionListUpdateEnvelopeInput, PermissionCreateInput> | PermissionCreateInput[]
  }

  export type OrganizationCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    Instagram?: string | null
    Facebook?: string | null
    type: string
    status?: $Enums.Status
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    Instagram?: string | null
    Facebook?: string | null
    type: string
    status?: $Enums.Status
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    Facebook?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    Facebook?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    Instagram?: string | null
    Facebook?: string | null
    type: string
    status?: $Enums.Status
  }

  export type OrganizationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    Facebook?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type OrganizationUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    Facebook?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type EarnruleCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    userUseEarnrule?: InputJsonValue | null
    Community?: CommunityCreateNestedManyWithoutEarnruleInput
    Shops?: ShopCreateNestedManyWithoutEarnruleInput
    User?: UserCreateNestedManyWithoutEarnruleInput
  }

  export type EarnruleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    communityIds?: EarnruleCreatecommunityIdsInput | string[]
    shopIds?: EarnruleCreateshopIdsInput | string[]
    userId?: EarnruleCreateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | null
    Community?: CommunityUncheckedCreateNestedManyWithoutEarnruleInput
    Shops?: ShopUncheckedCreateNestedManyWithoutEarnruleInput
    User?: UserUncheckedCreateNestedManyWithoutEarnruleInput
  }

  export type EarnruleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
    Community?: CommunityUpdateManyWithoutEarnruleNestedInput
    Shops?: ShopUpdateManyWithoutEarnruleNestedInput
    User?: UserUpdateManyWithoutEarnruleNestedInput
  }

  export type EarnruleUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    communityIds?: EarnruleUpdatecommunityIdsInput | string[]
    shopIds?: EarnruleUpdateshopIdsInput | string[]
    userId?: EarnruleUpdateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
    Community?: CommunityUncheckedUpdateManyWithoutEarnruleNestedInput
    Shops?: ShopUncheckedUpdateManyWithoutEarnruleNestedInput
    User?: UserUncheckedUpdateManyWithoutEarnruleNestedInput
  }

  export type EarnruleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    communityIds?: EarnruleCreatecommunityIdsInput | string[]
    shopIds?: EarnruleCreateshopIdsInput | string[]
    userId?: EarnruleCreateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | null
  }

  export type EarnruleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
  }

  export type EarnruleUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    communityIds?: EarnruleUpdatecommunityIdsInput | string[]
    shopIds?: EarnruleUpdateshopIdsInput | string[]
    userId?: EarnruleUpdateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
  }

  export type CommunityCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    thaiName: string
    englishName: string
    founded?: Date | string
    active?: boolean
    description?: string | null
    owner: string
    shop?: ShopCreateNestedManyWithoutCommunityInput
    earnrule?: EarnruleCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    thaiName: string
    englishName: string
    founded?: Date | string
    active?: boolean
    description?: string | null
    owner: string
    earnruleIds?: CommunityCreateearnruleIdsInput | string[]
    shop?: ShopUncheckedCreateNestedManyWithoutCommunityInput
    earnrule?: EarnruleUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateManyWithoutCommunityNestedInput
    earnrule?: EarnruleUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
    earnruleIds?: CommunityUpdateearnruleIdsInput | string[]
    shop?: ShopUncheckedUpdateManyWithoutCommunityNestedInput
    earnrule?: EarnruleUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    thaiName: string
    englishName: string
    founded?: Date | string
    active?: boolean
    description?: string | null
    owner: string
    earnruleIds?: CommunityCreateearnruleIdsInput | string[]
  }

  export type CommunityUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
    earnruleIds?: CommunityUpdateearnruleIdsInput | string[]
  }

  export type ShopCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    community: CommunityCreateNestedOneWithoutShopInput
    earnrule?: EarnruleCreateNestedManyWithoutShopsInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    communityId: string
    earnruleIds?: ShopCreateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedCreateNestedManyWithoutShopsInput
  }

  export type ShopUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    community?: CommunityUpdateOneRequiredWithoutShopNestedInput
    earnrule?: EarnruleUpdateManyWithoutShopsNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    earnruleIds?: ShopUpdateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedUpdateManyWithoutShopsNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    communityId: string
    earnruleIds?: ShopCreateearnruleIdsInput | string[]
  }

  export type ShopUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    earnruleIds?: ShopUpdateearnruleIdsInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type EarnruleListRelationFilter = {
    every?: EarnruleWhereInput
    some?: EarnruleWhereInput
    none?: EarnruleWhereInput
  }

  export type EarnruleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    earnruleIds?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type PermissionCompositeListFilter = {
    equals?: PermissionObjectEqualityInput[]
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type PermissionObjectEqualityInput = {
    feature: string
    show: boolean
    permissionFeature: $Enums.PermissionFeature
  }

  export type PermissionOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrder
    phone?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrder
    phone?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrder
    phone?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    Instagram?: SortOrder
    Facebook?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    Instagram?: SortOrder
    Facebook?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    Instagram?: SortOrder
    Facebook?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[] | ListEnumPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Period[] | ListEnumPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodFilter<$PrismaModel> | $Enums.Period
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type RightperFrequencyCompositeFilter = {
    equals?: RightperFrequencyObjectEqualityInput
    is?: RightperFrequencyWhereInput
    isNot?: RightperFrequencyWhereInput
  }

  export type RightperFrequencyObjectEqualityInput = {
    right: number
    frequency: $Enums.Frequency
  }

  export type ResultSettingCompositeFilter = {
    equals?: ResultSettingObjectEqualityInput
    is?: ResultSettingWhereInput
    isNot?: ResultSettingWhereInput
  }

  export type ResultSettingObjectEqualityInput = {
    resultType: $Enums.ResultType
    value: ValueperCoinObjectEqualityInput
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type ShopListRelationFilter = {
    every?: ShopWhereInput
    some?: ShopWhereInput
    none?: ShopWhereInput
  }

  export type RightperFrequencyOrderByInput = {
    right?: SortOrder
    frequency?: SortOrder
  }

  export type ResultSettingOrderByInput = {
    resultType?: SortOrder
    value?: ValueperCoinOrderByInput
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EarnruleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    type?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    nextUpdateEarnrule?: SortOrder
    picture?: SortOrder
    active?: SortOrder
    communityIds?: SortOrder
    shopIds?: SortOrder
    userId?: SortOrder
    userUseEarnrule?: SortOrder
  }

  export type EarnruleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    type?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    nextUpdateEarnrule?: SortOrder
    picture?: SortOrder
    active?: SortOrder
  }

  export type EarnruleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    type?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    nextUpdateEarnrule?: SortOrder
    picture?: SortOrder
    active?: SortOrder
  }

  export type EnumPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[] | ListEnumPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Period[] | ListEnumPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodWithAggregatesFilter<$PrismaModel> | $Enums.Period
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodFilter<$PrismaModel>
    _max?: NestedEnumPeriodFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    thaiName?: SortOrder
    englishName?: SortOrder
    founded?: SortOrder
    active?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    earnruleIds?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    thaiName?: SortOrder
    englishName?: SortOrder
    founded?: SortOrder
    active?: SortOrder
    description?: SortOrder
    owner?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    thaiName?: SortOrder
    englishName?: SortOrder
    founded?: SortOrder
    active?: SortOrder
    description?: SortOrder
    owner?: SortOrder
  }

  export type CommunityRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
    earnruleIds?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EarnruleCreateNestedManyWithoutUserInput = {
    create?: XOR<EarnruleCreateWithoutUserInput, EarnruleUncheckedCreateWithoutUserInput> | EarnruleCreateWithoutUserInput[] | EarnruleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutUserInput | EarnruleCreateOrConnectWithoutUserInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
  }

  export type UserCreateearnruleIdsInput = {
    set: string[]
  }

  export type EarnruleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EarnruleCreateWithoutUserInput, EarnruleUncheckedCreateWithoutUserInput> | EarnruleCreateWithoutUserInput[] | EarnruleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutUserInput | EarnruleCreateOrConnectWithoutUserInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status | null
    unset?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type EarnruleUpdateManyWithoutUserNestedInput = {
    create?: XOR<EarnruleCreateWithoutUserInput, EarnruleUncheckedCreateWithoutUserInput> | EarnruleCreateWithoutUserInput[] | EarnruleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutUserInput | EarnruleCreateOrConnectWithoutUserInput[]
    upsert?: EarnruleUpsertWithWhereUniqueWithoutUserInput | EarnruleUpsertWithWhereUniqueWithoutUserInput[]
    set?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    disconnect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    delete?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    update?: EarnruleUpdateWithWhereUniqueWithoutUserInput | EarnruleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EarnruleUpdateManyWithWhereWithoutUserInput | EarnruleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EarnruleScalarWhereInput | EarnruleScalarWhereInput[]
  }

  export type UserUpdateearnruleIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EarnruleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EarnruleCreateWithoutUserInput, EarnruleUncheckedCreateWithoutUserInput> | EarnruleCreateWithoutUserInput[] | EarnruleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutUserInput | EarnruleCreateOrConnectWithoutUserInput[]
    upsert?: EarnruleUpsertWithWhereUniqueWithoutUserInput | EarnruleUpsertWithWhereUniqueWithoutUserInput[]
    set?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    disconnect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    delete?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    update?: EarnruleUpdateWithWhereUniqueWithoutUserInput | EarnruleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EarnruleUpdateManyWithWhereWithoutUserInput | EarnruleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EarnruleScalarWhereInput | EarnruleScalarWhereInput[]
  }

  export type PermissionListCreateEnvelopeInput = {
    set?: PermissionCreateInput | PermissionCreateInput[]
  }

  export type PermissionCreateInput = {
    feature: string
    show: boolean
    permissionFeature: $Enums.PermissionFeature
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type PermissionListUpdateEnvelopeInput = {
    set?: PermissionCreateInput | PermissionCreateInput[]
    push?: PermissionCreateInput | PermissionCreateInput[]
    updateMany?: PermissionUpdateManyInput
    deleteMany?: PermissionDeleteManyInput
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RightperFrequencyCreateEnvelopeInput = {
    set?: RightperFrequencyCreateInput
  }

  export type RightperFrequencyCreateInput = {
    right: number
    frequency: $Enums.Frequency
  }

  export type ResultSettingCreateEnvelopeInput = {
    set?: ResultSettingCreateInput
  }

  export type ResultSettingCreateInput = {
    resultType: $Enums.ResultType
    value: ValueperCoinCreateInput
  }

  export type CommunityCreateNestedManyWithoutEarnruleInput = {
    create?: XOR<CommunityCreateWithoutEarnruleInput, CommunityUncheckedCreateWithoutEarnruleInput> | CommunityCreateWithoutEarnruleInput[] | CommunityUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutEarnruleInput | CommunityCreateOrConnectWithoutEarnruleInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type ShopCreateNestedManyWithoutEarnruleInput = {
    create?: XOR<ShopCreateWithoutEarnruleInput, ShopUncheckedCreateWithoutEarnruleInput> | ShopCreateWithoutEarnruleInput[] | ShopUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutEarnruleInput | ShopCreateOrConnectWithoutEarnruleInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutEarnruleInput = {
    create?: XOR<UserCreateWithoutEarnruleInput, UserUncheckedCreateWithoutEarnruleInput> | UserCreateWithoutEarnruleInput[] | UserUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEarnruleInput | UserCreateOrConnectWithoutEarnruleInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EarnruleCreatecommunityIdsInput = {
    set: string[]
  }

  export type EarnruleCreateshopIdsInput = {
    set: string[]
  }

  export type EarnruleCreateuserIdInput = {
    set: string[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutEarnruleInput = {
    create?: XOR<CommunityCreateWithoutEarnruleInput, CommunityUncheckedCreateWithoutEarnruleInput> | CommunityCreateWithoutEarnruleInput[] | CommunityUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutEarnruleInput | CommunityCreateOrConnectWithoutEarnruleInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type ShopUncheckedCreateNestedManyWithoutEarnruleInput = {
    create?: XOR<ShopCreateWithoutEarnruleInput, ShopUncheckedCreateWithoutEarnruleInput> | ShopCreateWithoutEarnruleInput[] | ShopUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutEarnruleInput | ShopCreateOrConnectWithoutEarnruleInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEarnruleInput = {
    create?: XOR<UserCreateWithoutEarnruleInput, UserUncheckedCreateWithoutEarnruleInput> | UserCreateWithoutEarnruleInput[] | UserUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEarnruleInput | UserCreateOrConnectWithoutEarnruleInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumPeriodFieldUpdateOperationsInput = {
    set?: $Enums.Period
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type RightperFrequencyUpdateEnvelopeInput = {
    set?: RightperFrequencyCreateInput
    update?: RightperFrequencyUpdateInput
  }

  export type ResultSettingUpdateEnvelopeInput = {
    set?: ResultSettingCreateInput
    update?: ResultSettingUpdateInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CommunityUpdateManyWithoutEarnruleNestedInput = {
    create?: XOR<CommunityCreateWithoutEarnruleInput, CommunityUncheckedCreateWithoutEarnruleInput> | CommunityCreateWithoutEarnruleInput[] | CommunityUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutEarnruleInput | CommunityCreateOrConnectWithoutEarnruleInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutEarnruleInput | CommunityUpsertWithWhereUniqueWithoutEarnruleInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutEarnruleInput | CommunityUpdateWithWhereUniqueWithoutEarnruleInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutEarnruleInput | CommunityUpdateManyWithWhereWithoutEarnruleInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type ShopUpdateManyWithoutEarnruleNestedInput = {
    create?: XOR<ShopCreateWithoutEarnruleInput, ShopUncheckedCreateWithoutEarnruleInput> | ShopCreateWithoutEarnruleInput[] | ShopUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutEarnruleInput | ShopCreateOrConnectWithoutEarnruleInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutEarnruleInput | ShopUpsertWithWhereUniqueWithoutEarnruleInput[]
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutEarnruleInput | ShopUpdateWithWhereUniqueWithoutEarnruleInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutEarnruleInput | ShopUpdateManyWithWhereWithoutEarnruleInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type UserUpdateManyWithoutEarnruleNestedInput = {
    create?: XOR<UserCreateWithoutEarnruleInput, UserUncheckedCreateWithoutEarnruleInput> | UserCreateWithoutEarnruleInput[] | UserUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEarnruleInput | UserCreateOrConnectWithoutEarnruleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEarnruleInput | UserUpsertWithWhereUniqueWithoutEarnruleInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEarnruleInput | UserUpdateWithWhereUniqueWithoutEarnruleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEarnruleInput | UserUpdateManyWithWhereWithoutEarnruleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EarnruleUpdatecommunityIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EarnruleUpdateshopIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EarnruleUpdateuserIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CommunityUncheckedUpdateManyWithoutEarnruleNestedInput = {
    create?: XOR<CommunityCreateWithoutEarnruleInput, CommunityUncheckedCreateWithoutEarnruleInput> | CommunityCreateWithoutEarnruleInput[] | CommunityUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutEarnruleInput | CommunityCreateOrConnectWithoutEarnruleInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutEarnruleInput | CommunityUpsertWithWhereUniqueWithoutEarnruleInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutEarnruleInput | CommunityUpdateWithWhereUniqueWithoutEarnruleInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutEarnruleInput | CommunityUpdateManyWithWhereWithoutEarnruleInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type ShopUncheckedUpdateManyWithoutEarnruleNestedInput = {
    create?: XOR<ShopCreateWithoutEarnruleInput, ShopUncheckedCreateWithoutEarnruleInput> | ShopCreateWithoutEarnruleInput[] | ShopUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutEarnruleInput | ShopCreateOrConnectWithoutEarnruleInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutEarnruleInput | ShopUpsertWithWhereUniqueWithoutEarnruleInput[]
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutEarnruleInput | ShopUpdateWithWhereUniqueWithoutEarnruleInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutEarnruleInput | ShopUpdateManyWithWhereWithoutEarnruleInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEarnruleNestedInput = {
    create?: XOR<UserCreateWithoutEarnruleInput, UserUncheckedCreateWithoutEarnruleInput> | UserCreateWithoutEarnruleInput[] | UserUncheckedCreateWithoutEarnruleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEarnruleInput | UserCreateOrConnectWithoutEarnruleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEarnruleInput | UserUpsertWithWhereUniqueWithoutEarnruleInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEarnruleInput | UserUpdateWithWhereUniqueWithoutEarnruleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEarnruleInput | UserUpdateManyWithWhereWithoutEarnruleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ShopCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ShopCreateWithoutCommunityInput, ShopUncheckedCreateWithoutCommunityInput> | ShopCreateWithoutCommunityInput[] | ShopUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutCommunityInput | ShopCreateOrConnectWithoutCommunityInput[]
    createMany?: ShopCreateManyCommunityInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type EarnruleCreateNestedManyWithoutCommunityInput = {
    create?: XOR<EarnruleCreateWithoutCommunityInput, EarnruleUncheckedCreateWithoutCommunityInput> | EarnruleCreateWithoutCommunityInput[] | EarnruleUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutCommunityInput | EarnruleCreateOrConnectWithoutCommunityInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
  }

  export type CommunityCreateearnruleIdsInput = {
    set: string[]
  }

  export type ShopUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ShopCreateWithoutCommunityInput, ShopUncheckedCreateWithoutCommunityInput> | ShopCreateWithoutCommunityInput[] | ShopUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutCommunityInput | ShopCreateOrConnectWithoutCommunityInput[]
    createMany?: ShopCreateManyCommunityInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type EarnruleUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<EarnruleCreateWithoutCommunityInput, EarnruleUncheckedCreateWithoutCommunityInput> | EarnruleCreateWithoutCommunityInput[] | EarnruleUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutCommunityInput | EarnruleCreateOrConnectWithoutCommunityInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
  }

  export type ShopUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ShopCreateWithoutCommunityInput, ShopUncheckedCreateWithoutCommunityInput> | ShopCreateWithoutCommunityInput[] | ShopUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutCommunityInput | ShopCreateOrConnectWithoutCommunityInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutCommunityInput | ShopUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ShopCreateManyCommunityInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutCommunityInput | ShopUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutCommunityInput | ShopUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type EarnruleUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<EarnruleCreateWithoutCommunityInput, EarnruleUncheckedCreateWithoutCommunityInput> | EarnruleCreateWithoutCommunityInput[] | EarnruleUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutCommunityInput | EarnruleCreateOrConnectWithoutCommunityInput[]
    upsert?: EarnruleUpsertWithWhereUniqueWithoutCommunityInput | EarnruleUpsertWithWhereUniqueWithoutCommunityInput[]
    set?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    disconnect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    delete?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    update?: EarnruleUpdateWithWhereUniqueWithoutCommunityInput | EarnruleUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: EarnruleUpdateManyWithWhereWithoutCommunityInput | EarnruleUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: EarnruleScalarWhereInput | EarnruleScalarWhereInput[]
  }

  export type CommunityUpdateearnruleIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ShopUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ShopCreateWithoutCommunityInput, ShopUncheckedCreateWithoutCommunityInput> | ShopCreateWithoutCommunityInput[] | ShopUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutCommunityInput | ShopCreateOrConnectWithoutCommunityInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutCommunityInput | ShopUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ShopCreateManyCommunityInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutCommunityInput | ShopUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutCommunityInput | ShopUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type EarnruleUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<EarnruleCreateWithoutCommunityInput, EarnruleUncheckedCreateWithoutCommunityInput> | EarnruleCreateWithoutCommunityInput[] | EarnruleUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutCommunityInput | EarnruleCreateOrConnectWithoutCommunityInput[]
    upsert?: EarnruleUpsertWithWhereUniqueWithoutCommunityInput | EarnruleUpsertWithWhereUniqueWithoutCommunityInput[]
    set?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    disconnect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    delete?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    update?: EarnruleUpdateWithWhereUniqueWithoutCommunityInput | EarnruleUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: EarnruleUpdateManyWithWhereWithoutCommunityInput | EarnruleUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: EarnruleScalarWhereInput | EarnruleScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutShopInput = {
    create?: XOR<CommunityCreateWithoutShopInput, CommunityUncheckedCreateWithoutShopInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutShopInput
    connect?: CommunityWhereUniqueInput
  }

  export type EarnruleCreateNestedManyWithoutShopsInput = {
    create?: XOR<EarnruleCreateWithoutShopsInput, EarnruleUncheckedCreateWithoutShopsInput> | EarnruleCreateWithoutShopsInput[] | EarnruleUncheckedCreateWithoutShopsInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutShopsInput | EarnruleCreateOrConnectWithoutShopsInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
  }

  export type ShopCreateearnruleIdsInput = {
    set: string[]
  }

  export type EarnruleUncheckedCreateNestedManyWithoutShopsInput = {
    create?: XOR<EarnruleCreateWithoutShopsInput, EarnruleUncheckedCreateWithoutShopsInput> | EarnruleCreateWithoutShopsInput[] | EarnruleUncheckedCreateWithoutShopsInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutShopsInput | EarnruleCreateOrConnectWithoutShopsInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
  }

  export type CommunityUpdateOneRequiredWithoutShopNestedInput = {
    create?: XOR<CommunityCreateWithoutShopInput, CommunityUncheckedCreateWithoutShopInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutShopInput
    upsert?: CommunityUpsertWithoutShopInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutShopInput, CommunityUpdateWithoutShopInput>, CommunityUncheckedUpdateWithoutShopInput>
  }

  export type EarnruleUpdateManyWithoutShopsNestedInput = {
    create?: XOR<EarnruleCreateWithoutShopsInput, EarnruleUncheckedCreateWithoutShopsInput> | EarnruleCreateWithoutShopsInput[] | EarnruleUncheckedCreateWithoutShopsInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutShopsInput | EarnruleCreateOrConnectWithoutShopsInput[]
    upsert?: EarnruleUpsertWithWhereUniqueWithoutShopsInput | EarnruleUpsertWithWhereUniqueWithoutShopsInput[]
    set?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    disconnect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    delete?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    update?: EarnruleUpdateWithWhereUniqueWithoutShopsInput | EarnruleUpdateWithWhereUniqueWithoutShopsInput[]
    updateMany?: EarnruleUpdateManyWithWhereWithoutShopsInput | EarnruleUpdateManyWithWhereWithoutShopsInput[]
    deleteMany?: EarnruleScalarWhereInput | EarnruleScalarWhereInput[]
  }

  export type ShopUpdateearnruleIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EarnruleUncheckedUpdateManyWithoutShopsNestedInput = {
    create?: XOR<EarnruleCreateWithoutShopsInput, EarnruleUncheckedCreateWithoutShopsInput> | EarnruleCreateWithoutShopsInput[] | EarnruleUncheckedCreateWithoutShopsInput[]
    connectOrCreate?: EarnruleCreateOrConnectWithoutShopsInput | EarnruleCreateOrConnectWithoutShopsInput[]
    upsert?: EarnruleUpsertWithWhereUniqueWithoutShopsInput | EarnruleUpsertWithWhereUniqueWithoutShopsInput[]
    set?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    disconnect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    delete?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    connect?: EarnruleWhereUniqueInput | EarnruleWhereUniqueInput[]
    update?: EarnruleUpdateWithWhereUniqueWithoutShopsInput | EarnruleUpdateWithWhereUniqueWithoutShopsInput[]
    updateMany?: EarnruleUpdateManyWithWhereWithoutShopsInput | EarnruleUpdateManyWithWhereWithoutShopsInput[]
    deleteMany?: EarnruleScalarWhereInput | EarnruleScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    feature?: StringFilter<"Permission"> | string
    show?: BoolFilter<"Permission"> | boolean
    permissionFeature?: EnumPermissionFeatureFilter<"Permission"> | $Enums.PermissionFeature
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[] | ListEnumPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Period[] | ListEnumPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodFilter<$PrismaModel> | $Enums.Period
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type RightperFrequencyWhereInput = {
    AND?: RightperFrequencyWhereInput | RightperFrequencyWhereInput[]
    OR?: RightperFrequencyWhereInput[]
    NOT?: RightperFrequencyWhereInput | RightperFrequencyWhereInput[]
    right?: IntFilter<"RightperFrequency"> | number
    frequency?: EnumFrequencyFilter<"RightperFrequency"> | $Enums.Frequency
  }

  export type ResultSettingWhereInput = {
    AND?: ResultSettingWhereInput | ResultSettingWhereInput[]
    OR?: ResultSettingWhereInput[]
    NOT?: ResultSettingWhereInput | ResultSettingWhereInput[]
    resultType?: EnumResultTypeFilter<"ResultSetting"> | $Enums.ResultType
    value?: XOR<ValueperCoinCompositeFilter, ValueperCoinObjectEqualityInput>
  }

  export type ValueperCoinObjectEqualityInput = {
    amount: number
    coin: number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ValueperCoinOrderByInput = {
    amount?: SortOrder
    coin?: SortOrder
  }

  export type NestedEnumPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[] | ListEnumPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Period[] | ListEnumPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodWithAggregatesFilter<$PrismaModel> | $Enums.Period
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodFilter<$PrismaModel>
    _max?: NestedEnumPeriodFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    Instagram?: string | null
    Facebook?: string | null
    type: string
    status?: $Enums.Status
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    Instagram?: string | null
    Facebook?: string | null
    type: string
    status?: $Enums.Status
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type EarnruleCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    userUseEarnrule?: InputJsonValue | null
    Community?: CommunityCreateNestedManyWithoutEarnruleInput
    Shops?: ShopCreateNestedManyWithoutEarnruleInput
  }

  export type EarnruleUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    communityIds?: EarnruleCreatecommunityIdsInput | string[]
    shopIds?: EarnruleCreateshopIdsInput | string[]
    userId?: EarnruleCreateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | null
    Community?: CommunityUncheckedCreateNestedManyWithoutEarnruleInput
    Shops?: ShopUncheckedCreateNestedManyWithoutEarnruleInput
  }

  export type EarnruleCreateOrConnectWithoutUserInput = {
    where: EarnruleWhereUniqueInput
    create: XOR<EarnruleCreateWithoutUserInput, EarnruleUncheckedCreateWithoutUserInput>
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    Facebook?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    Facebook?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type EarnruleUpsertWithWhereUniqueWithoutUserInput = {
    where: EarnruleWhereUniqueInput
    update: XOR<EarnruleUpdateWithoutUserInput, EarnruleUncheckedUpdateWithoutUserInput>
    create: XOR<EarnruleCreateWithoutUserInput, EarnruleUncheckedCreateWithoutUserInput>
  }

  export type EarnruleUpdateWithWhereUniqueWithoutUserInput = {
    where: EarnruleWhereUniqueInput
    data: XOR<EarnruleUpdateWithoutUserInput, EarnruleUncheckedUpdateWithoutUserInput>
  }

  export type EarnruleUpdateManyWithWhereWithoutUserInput = {
    where: EarnruleScalarWhereInput
    data: XOR<EarnruleUpdateManyMutationInput, EarnruleUncheckedUpdateManyWithoutUserInput>
  }

  export type EarnruleScalarWhereInput = {
    AND?: EarnruleScalarWhereInput | EarnruleScalarWhereInput[]
    OR?: EarnruleScalarWhereInput[]
    NOT?: EarnruleScalarWhereInput | EarnruleScalarWhereInput[]
    id?: StringFilter<"Earnrule"> | string
    createdAt?: DateTimeFilter<"Earnrule"> | Date | string
    updated?: DateTimeFilter<"Earnrule"> | Date | string
    name?: StringFilter<"Earnrule"> | string
    type?: StringFilter<"Earnrule"> | string
    period?: EnumPeriodFilter<"Earnrule"> | $Enums.Period
    startDate?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    nextUpdateEarnrule?: DateTimeNullableFilter<"Earnrule"> | Date | string | null
    picture?: StringFilter<"Earnrule"> | string
    active?: BoolFilter<"Earnrule"> | boolean
    communityIds?: StringNullableListFilter<"Earnrule">
    shopIds?: StringNullableListFilter<"Earnrule">
    userId?: StringNullableListFilter<"Earnrule">
    userUseEarnrule?: JsonNullableFilter<"Earnrule">
  }

  export type PermissionUpdateManyInput = {
    where: PermissionWhereInput
    data: PermissionUpdateInput
  }

  export type PermissionDeleteManyInput = {
    where: PermissionWhereInput
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    status?: $Enums.Status | null
    earnrule?: EarnruleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    status?: $Enums.Status | null
    earnruleIds?: UserCreateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updated?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    status?: EnumStatusNullableFilter<"User"> | $Enums.Status | null
    earnruleIds?: StringNullableListFilter<"User">
  }

  export type ValueperCoinCreateInput = {
    amount?: number
    coin: number
  }

  export type CommunityCreateWithoutEarnruleInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    thaiName: string
    englishName: string
    founded?: Date | string
    active?: boolean
    description?: string | null
    owner: string
    shop?: ShopCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutEarnruleInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    thaiName: string
    englishName: string
    founded?: Date | string
    active?: boolean
    description?: string | null
    owner: string
    earnruleIds?: CommunityCreateearnruleIdsInput | string[]
    shop?: ShopUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutEarnruleInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutEarnruleInput, CommunityUncheckedCreateWithoutEarnruleInput>
  }

  export type ShopCreateWithoutEarnruleInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    community: CommunityCreateNestedOneWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutEarnruleInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    communityId: string
    earnruleIds?: ShopCreateearnruleIdsInput | string[]
  }

  export type ShopCreateOrConnectWithoutEarnruleInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutEarnruleInput, ShopUncheckedCreateWithoutEarnruleInput>
  }

  export type UserCreateWithoutEarnruleInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    status?: $Enums.Status | null
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutEarnruleInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    organizationId: string
    status?: $Enums.Status | null
    earnruleIds?: UserCreateearnruleIdsInput | string[]
  }

  export type UserCreateOrConnectWithoutEarnruleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEarnruleInput, UserUncheckedCreateWithoutEarnruleInput>
  }

  export type RightperFrequencyUpdateInput = {
    right?: IntFieldUpdateOperationsInput | number
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
  }

  export type ResultSettingUpdateInput = {
    resultType?: EnumResultTypeFieldUpdateOperationsInput | $Enums.ResultType
    value?: XOR<ValueperCoinUpdateEnvelopeInput, ValueperCoinCreateInput>
  }

  export type CommunityUpsertWithWhereUniqueWithoutEarnruleInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutEarnruleInput, CommunityUncheckedUpdateWithoutEarnruleInput>
    create: XOR<CommunityCreateWithoutEarnruleInput, CommunityUncheckedCreateWithoutEarnruleInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutEarnruleInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutEarnruleInput, CommunityUncheckedUpdateWithoutEarnruleInput>
  }

  export type CommunityUpdateManyWithWhereWithoutEarnruleInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutEarnruleInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updated?: DateTimeFilter<"Community"> | Date | string
    thaiName?: StringFilter<"Community"> | string
    englishName?: StringFilter<"Community"> | string
    founded?: DateTimeFilter<"Community"> | Date | string
    active?: BoolFilter<"Community"> | boolean
    description?: StringNullableFilter<"Community"> | string | null
    owner?: StringFilter<"Community"> | string
    earnruleIds?: StringNullableListFilter<"Community">
  }

  export type ShopUpsertWithWhereUniqueWithoutEarnruleInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutEarnruleInput, ShopUncheckedUpdateWithoutEarnruleInput>
    create: XOR<ShopCreateWithoutEarnruleInput, ShopUncheckedCreateWithoutEarnruleInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutEarnruleInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutEarnruleInput, ShopUncheckedUpdateWithoutEarnruleInput>
  }

  export type ShopUpdateManyWithWhereWithoutEarnruleInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutEarnruleInput>
  }

  export type ShopScalarWhereInput = {
    AND?: ShopScalarWhereInput | ShopScalarWhereInput[]
    OR?: ShopScalarWhereInput[]
    NOT?: ShopScalarWhereInput | ShopScalarWhereInput[]
    id?: StringFilter<"Shop"> | string
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updated?: DateTimeFilter<"Shop"> | Date | string
    name?: StringFilter<"Shop"> | string
    communityId?: StringFilter<"Shop"> | string
    earnruleIds?: StringNullableListFilter<"Shop">
  }

  export type UserUpsertWithWhereUniqueWithoutEarnruleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEarnruleInput, UserUncheckedUpdateWithoutEarnruleInput>
    create: XOR<UserCreateWithoutEarnruleInput, UserUncheckedCreateWithoutEarnruleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEarnruleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEarnruleInput, UserUncheckedUpdateWithoutEarnruleInput>
  }

  export type UserUpdateManyWithWhereWithoutEarnruleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEarnruleInput>
  }

  export type ShopCreateWithoutCommunityInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    earnrule?: EarnruleCreateNestedManyWithoutShopsInput
  }

  export type ShopUncheckedCreateWithoutCommunityInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    earnruleIds?: ShopCreateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedCreateNestedManyWithoutShopsInput
  }

  export type ShopCreateOrConnectWithoutCommunityInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutCommunityInput, ShopUncheckedCreateWithoutCommunityInput>
  }

  export type ShopCreateManyCommunityInputEnvelope = {
    data: ShopCreateManyCommunityInput | ShopCreateManyCommunityInput[]
  }

  export type EarnruleCreateWithoutCommunityInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    userUseEarnrule?: InputJsonValue | null
    Shops?: ShopCreateNestedManyWithoutEarnruleInput
    User?: UserCreateNestedManyWithoutEarnruleInput
  }

  export type EarnruleUncheckedCreateWithoutCommunityInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    communityIds?: EarnruleCreatecommunityIdsInput | string[]
    shopIds?: EarnruleCreateshopIdsInput | string[]
    userId?: EarnruleCreateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | null
    Shops?: ShopUncheckedCreateNestedManyWithoutEarnruleInput
    User?: UserUncheckedCreateNestedManyWithoutEarnruleInput
  }

  export type EarnruleCreateOrConnectWithoutCommunityInput = {
    where: EarnruleWhereUniqueInput
    create: XOR<EarnruleCreateWithoutCommunityInput, EarnruleUncheckedCreateWithoutCommunityInput>
  }

  export type ShopUpsertWithWhereUniqueWithoutCommunityInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutCommunityInput, ShopUncheckedUpdateWithoutCommunityInput>
    create: XOR<ShopCreateWithoutCommunityInput, ShopUncheckedCreateWithoutCommunityInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutCommunityInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutCommunityInput, ShopUncheckedUpdateWithoutCommunityInput>
  }

  export type ShopUpdateManyWithWhereWithoutCommunityInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutCommunityInput>
  }

  export type EarnruleUpsertWithWhereUniqueWithoutCommunityInput = {
    where: EarnruleWhereUniqueInput
    update: XOR<EarnruleUpdateWithoutCommunityInput, EarnruleUncheckedUpdateWithoutCommunityInput>
    create: XOR<EarnruleCreateWithoutCommunityInput, EarnruleUncheckedCreateWithoutCommunityInput>
  }

  export type EarnruleUpdateWithWhereUniqueWithoutCommunityInput = {
    where: EarnruleWhereUniqueInput
    data: XOR<EarnruleUpdateWithoutCommunityInput, EarnruleUncheckedUpdateWithoutCommunityInput>
  }

  export type EarnruleUpdateManyWithWhereWithoutCommunityInput = {
    where: EarnruleScalarWhereInput
    data: XOR<EarnruleUpdateManyMutationInput, EarnruleUncheckedUpdateManyWithoutCommunityInput>
  }

  export type CommunityCreateWithoutShopInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    thaiName: string
    englishName: string
    founded?: Date | string
    active?: boolean
    description?: string | null
    owner: string
    earnrule?: EarnruleCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutShopInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    thaiName: string
    englishName: string
    founded?: Date | string
    active?: boolean
    description?: string | null
    owner: string
    earnruleIds?: CommunityCreateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutShopInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutShopInput, CommunityUncheckedCreateWithoutShopInput>
  }

  export type EarnruleCreateWithoutShopsInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    userUseEarnrule?: InputJsonValue | null
    Community?: CommunityCreateNestedManyWithoutEarnruleInput
    User?: UserCreateNestedManyWithoutEarnruleInput
  }

  export type EarnruleUncheckedCreateWithoutShopsInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    type: string
    period?: $Enums.Period
    startDate?: Date | string | null
    endDate?: Date | string | null
    nextUpdateEarnrule?: Date | string | null
    picture: string
    frequency: XOR<RightperFrequencyCreateEnvelopeInput, RightperFrequencyCreateInput>
    setting: XOR<ResultSettingCreateEnvelopeInput, ResultSettingCreateInput>
    active?: boolean
    communityIds?: EarnruleCreatecommunityIdsInput | string[]
    shopIds?: EarnruleCreateshopIdsInput | string[]
    userId?: EarnruleCreateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | null
    Community?: CommunityUncheckedCreateNestedManyWithoutEarnruleInput
    User?: UserUncheckedCreateNestedManyWithoutEarnruleInput
  }

  export type EarnruleCreateOrConnectWithoutShopsInput = {
    where: EarnruleWhereUniqueInput
    create: XOR<EarnruleCreateWithoutShopsInput, EarnruleUncheckedCreateWithoutShopsInput>
  }

  export type CommunityUpsertWithoutShopInput = {
    update: XOR<CommunityUpdateWithoutShopInput, CommunityUncheckedUpdateWithoutShopInput>
    create: XOR<CommunityCreateWithoutShopInput, CommunityUncheckedCreateWithoutShopInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutShopInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutShopInput, CommunityUncheckedUpdateWithoutShopInput>
  }

  export type CommunityUpdateWithoutShopInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
    earnrule?: EarnruleUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutShopInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
    earnruleIds?: CommunityUpdateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type EarnruleUpsertWithWhereUniqueWithoutShopsInput = {
    where: EarnruleWhereUniqueInput
    update: XOR<EarnruleUpdateWithoutShopsInput, EarnruleUncheckedUpdateWithoutShopsInput>
    create: XOR<EarnruleCreateWithoutShopsInput, EarnruleUncheckedCreateWithoutShopsInput>
  }

  export type EarnruleUpdateWithWhereUniqueWithoutShopsInput = {
    where: EarnruleWhereUniqueInput
    data: XOR<EarnruleUpdateWithoutShopsInput, EarnruleUncheckedUpdateWithoutShopsInput>
  }

  export type EarnruleUpdateManyWithWhereWithoutShopsInput = {
    where: EarnruleScalarWhereInput
    data: XOR<EarnruleUpdateManyMutationInput, EarnruleUncheckedUpdateManyWithoutShopsInput>
  }

  export type EnumPermissionFeatureFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionFeature | EnumPermissionFeatureFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionFeature[] | ListEnumPermissionFeatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionFeature[] | ListEnumPermissionFeatureFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionFeatureFilter<$PrismaModel> | $Enums.PermissionFeature
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency
  }

  export type EnumResultTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultType | EnumResultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResultType[] | ListEnumResultTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultType[] | ListEnumResultTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResultTypeFilter<$PrismaModel> | $Enums.ResultType
  }

  export type ValueperCoinCompositeFilter = {
    equals?: ValueperCoinObjectEqualityInput
    is?: ValueperCoinWhereInput
    isNot?: ValueperCoinWhereInput
  }

  export type EarnruleUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
    Community?: CommunityUpdateManyWithoutEarnruleNestedInput
    Shops?: ShopUpdateManyWithoutEarnruleNestedInput
  }

  export type EarnruleUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    communityIds?: EarnruleUpdatecommunityIdsInput | string[]
    shopIds?: EarnruleUpdateshopIdsInput | string[]
    userId?: EarnruleUpdateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
    Community?: CommunityUncheckedUpdateManyWithoutEarnruleNestedInput
    Shops?: ShopUncheckedUpdateManyWithoutEarnruleNestedInput
  }

  export type EarnruleUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    communityIds?: EarnruleUpdatecommunityIdsInput | string[]
    shopIds?: EarnruleUpdateshopIdsInput | string[]
    userId?: EarnruleUpdateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
  }

  export type PermissionUpdateInput = {
    feature?: StringFieldUpdateOperationsInput | string
    show?: BoolFieldUpdateOperationsInput | boolean
    permissionFeature?: EnumPermissionFeatureFieldUpdateOperationsInput | $Enums.PermissionFeature
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    status?: $Enums.Status | null
    earnruleIds?: UserCreateearnruleIdsInput | string[]
  }

  export type UserUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    earnrule?: EarnruleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    earnruleIds?: UserUpdateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    earnruleIds?: UserUpdateearnruleIdsInput | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.Frequency
  }

  export type EnumResultTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResultType
  }

  export type ValueperCoinUpdateEnvelopeInput = {
    set?: ValueperCoinCreateInput
    update?: ValueperCoinUpdateInput
  }

  export type CommunityUpdateWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
    earnruleIds?: CommunityUpdateearnruleIdsInput | string[]
    shop?: ShopUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    thaiName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: StringFieldUpdateOperationsInput | string
    earnruleIds?: CommunityUpdateearnruleIdsInput | string[]
  }

  export type ShopUpdateWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    community?: CommunityUpdateOneRequiredWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    earnruleIds?: ShopUpdateearnruleIdsInput | string[]
  }

  export type ShopUncheckedUpdateManyWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    earnruleIds?: ShopUpdateearnruleIdsInput | string[]
  }

  export type UserUpdateWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    earnruleIds?: UserUpdateearnruleIdsInput | string[]
  }

  export type UserUncheckedUpdateManyWithoutEarnruleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    earnruleIds?: UserUpdateearnruleIdsInput | string[]
  }

  export type ShopCreateManyCommunityInput = {
    id?: string
    createdAt?: Date | string
    updated?: Date | string
    name: string
    earnruleIds?: ShopCreateearnruleIdsInput | string[]
  }

  export type ShopUpdateWithoutCommunityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    earnrule?: EarnruleUpdateManyWithoutShopsNestedInput
  }

  export type ShopUncheckedUpdateWithoutCommunityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    earnruleIds?: ShopUpdateearnruleIdsInput | string[]
    earnrule?: EarnruleUncheckedUpdateManyWithoutShopsNestedInput
  }

  export type ShopUncheckedUpdateManyWithoutCommunityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    earnruleIds?: ShopUpdateearnruleIdsInput | string[]
  }

  export type EarnruleUpdateWithoutCommunityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
    Shops?: ShopUpdateManyWithoutEarnruleNestedInput
    User?: UserUpdateManyWithoutEarnruleNestedInput
  }

  export type EarnruleUncheckedUpdateWithoutCommunityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    communityIds?: EarnruleUpdatecommunityIdsInput | string[]
    shopIds?: EarnruleUpdateshopIdsInput | string[]
    userId?: EarnruleUpdateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
    Shops?: ShopUncheckedUpdateManyWithoutEarnruleNestedInput
    User?: UserUncheckedUpdateManyWithoutEarnruleNestedInput
  }

  export type EarnruleUncheckedUpdateManyWithoutCommunityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    communityIds?: EarnruleUpdatecommunityIdsInput | string[]
    shopIds?: EarnruleUpdateshopIdsInput | string[]
    userId?: EarnruleUpdateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
  }

  export type EarnruleUpdateWithoutShopsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
    Community?: CommunityUpdateManyWithoutEarnruleNestedInput
    User?: UserUpdateManyWithoutEarnruleNestedInput
  }

  export type EarnruleUncheckedUpdateWithoutShopsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    communityIds?: EarnruleUpdatecommunityIdsInput | string[]
    shopIds?: EarnruleUpdateshopIdsInput | string[]
    userId?: EarnruleUpdateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
    Community?: CommunityUncheckedUpdateManyWithoutEarnruleNestedInput
    User?: UserUncheckedUpdateManyWithoutEarnruleNestedInput
  }

  export type EarnruleUncheckedUpdateManyWithoutShopsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdateEarnrule?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: StringFieldUpdateOperationsInput | string
    frequency?: XOR<RightperFrequencyUpdateEnvelopeInput, RightperFrequencyCreateInput>
    setting?: XOR<ResultSettingUpdateEnvelopeInput, ResultSettingCreateInput>
    active?: BoolFieldUpdateOperationsInput | boolean
    communityIds?: EarnruleUpdatecommunityIdsInput | string[]
    shopIds?: EarnruleUpdateshopIdsInput | string[]
    userId?: EarnruleUpdateuserIdInput | string[]
    userUseEarnrule?: InputJsonValue | InputJsonValue | null
  }

  export type NestedEnumPermissionFeatureFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionFeature | EnumPermissionFeatureFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionFeature[] | ListEnumPermissionFeatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionFeature[] | ListEnumPermissionFeatureFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionFeatureFilter<$PrismaModel> | $Enums.PermissionFeature
  }

  export type NestedEnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency
  }

  export type NestedEnumResultTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultType | EnumResultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResultType[] | ListEnumResultTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultType[] | ListEnumResultTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResultTypeFilter<$PrismaModel> | $Enums.ResultType
  }

  export type ValueperCoinWhereInput = {
    AND?: ValueperCoinWhereInput | ValueperCoinWhereInput[]
    OR?: ValueperCoinWhereInput[]
    NOT?: ValueperCoinWhereInput | ValueperCoinWhereInput[]
    amount?: IntFilter<"ValueperCoin"> | number
    coin?: IntFilter<"ValueperCoin"> | number
  }

  export type EnumPermissionFeatureFieldUpdateOperationsInput = {
    set?: $Enums.PermissionFeature
  }

  export type ValueperCoinUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EarnruleCountOutputTypeDefaultArgs instead
     */
    export type EarnruleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EarnruleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityCountOutputTypeDefaultArgs instead
     */
    export type CommunityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopCountOutputTypeDefaultArgs instead
     */
    export type ShopCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionDefaultArgs instead
     */
    export type PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResultSettingDefaultArgs instead
     */
    export type ResultSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResultSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ValueperCoinDefaultArgs instead
     */
    export type ValueperCoinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ValueperCoinDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RightperFrequencyDefaultArgs instead
     */
    export type RightperFrequencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RightperFrequencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EarnruleDefaultArgs instead
     */
    export type EarnruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EarnruleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityDefaultArgs instead
     */
    export type CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopDefaultArgs instead
     */
    export type ShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}