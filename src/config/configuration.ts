interface AppConfigSection {
  api: {
    apiHost: string
    apiVersion: string
  }
}

interface AppConfig {
  development: AppConfigSection
  uat: AppConfigSection
  production: AppConfigSection
}

export type AppEnv = 'development' | 'uat' | 'production'

// let _config: AppConfig

// let _configured = false

// export const setConfig = (config: AppConfig) => {
//   if (!_configured) {
//     _config = config
//     _configured = true
//   }
// }

export const env = (env?: AppEnv) => {
  const _env = (env || process.env.REACT_APP_APP_ENV) as AppEnv
  return config[_env] || config.development
}

const config: AppConfig = {
  development: {
    api: {
      apiHost: 'http://localhost:2000',
      apiVersion: '1',
    },
  },
  uat: {
    api: {
      apiHost: 'CHANGE ME',
      apiVersion: '1',
    },
  },
  production: {
    api: {
      apiHost: 'CHANGE ME',
      apiVersion: '1',
    },
  },
}
