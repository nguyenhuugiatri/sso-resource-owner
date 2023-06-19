var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
export class OAuth2Account {
  constructor(client) {
    this.client = client
  }
  getUserInfo(params) {
    var _a, _b
    return __awaiter(this, void 0, void 0, function* () {
      const resp = yield (_b = (_a = this.client.settings).fetch) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a, this.client.getEndpoint('userinfo'), {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${params.accessToken}`,
              'X-API-KEY': params.apiKey,
            },
          })
      if (resp && resp.ok) {
        return yield resp.json()
      }
      throw yield this.client.handleErrorResponse(resp)
    })
  }
}
