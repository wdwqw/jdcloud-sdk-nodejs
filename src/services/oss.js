/*
 * Copyright 2018-2025 JDCLOUD.COM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http:#www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * OSS相关接口
 * OSS相关接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../lib/node_loader')
var JDCloud = require('../lib/core')
var Service = JDCloud.Service
var serviceId = 'oss'
Service._services[serviceId] = true

/**
 * oss service.
 * @version 0.2.1
 */

JDCloud.OSS = class OSS extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'oss.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
         *  列出当前用户的所有bucket

         * @param {Object} opts - parameters
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param user owner
         * @param bucket buckets
      */

  listBuckets (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  listBuckets"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  oss/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call listBuckets with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/buckets',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  创建bucket

         * @param {Object} opts - parameters
         * @param {string} opts.bucketname - bucket名字，例如：test-bucket
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  putBucket (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  putBucket"
      )
    }

    opts = opts || {}

    if (opts.bucketname === undefined || opts.bucketname === null) {
      throw new Error(
        "Missing the required parameter 'opts.bucketname' when calling putBucket"
      )
    }

    let postBody = {}

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      bucketname: opts.bucketname
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  oss/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call putBucket with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/buckets/{bucketname}',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  删除一个bucket

         * @param {Object} opts - parameters
         * @param {string} opts.bucketname - bucket名字，例如：test-bucket
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  deleteBucket (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteBucket"
      )
    }

    opts = opts || {}

    if (opts.bucketname === undefined || opts.bucketname === null) {
      throw new Error(
        "Missing the required parameter 'opts.bucketname' when calling deleteBucket"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      bucketname: opts.bucketname
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  oss/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call deleteBucket with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/buckets/{bucketname}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询bucket是否存在

         * @param {Object} opts - parameters
         * @param {string} opts.bucketname - bucket名字，例如：test-bucket
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  headBucket (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  headBucket"
      )
    }

    opts = opts || {}

    if (opts.bucketname === undefined || opts.bucketname === null) {
      throw new Error(
        "Missing the required parameter 'opts.bucketname' when calling headBucket"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      bucketname: opts.bucketname
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  oss/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call headBucket with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/buckets/{bucketname}',
      'HEAD',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = JDCloud.OSS
