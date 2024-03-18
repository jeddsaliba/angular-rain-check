# Weather Forecast

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

The purpose of this project is to showcase an Angular Project with a weather forecast capability.

## Table of Contents
[Dependencies](#dependencies)<br/>
[Plugin(s) Used](#plugins-used)<br/>
[Installation](#installation)<br/>
[Development Server](#development-server)<br/>
[Support](#support)

<a name="installation"></a>
## Dependencies
- [NodeJS](https://nodejs.org)
- [Angular CLI](https://angular.io)
- [Auth0](https://auth0.com)
  - For Auth0, you may modify the following in your `environment.ts` and `environment.prod.ts`:
    ```bash
    auth: {
      domain: 'AUTH0_DOMAIN',
      clientId: 'AUTH0_CLIENT_ID'
    },
    ```
- [Geoapify](https://www.geoapify.com)
  - For Geoapify, you may modify the following in your `environment.ts` and `environment.prod.ts`:
    ```bash
    geoapify: {
      url: 'https://api.geoapify.com/v1',
      key: 'GEOAPIFY_KEY'
    }
    ```
- [OpenWeather](https://openweathermap.org)
  - For OpenWeather, you may modify the following in your `environment.ts` and `environment.prod.ts`:
    ```bash
    weather: {
      url: 'https://api.openweathermap.org',
      key: 'OPEN_WEATHER_KEY',
      units: `imperial`
    }
    ```

<a name="plugins-used"></a>
## Plugin(s) Used
- [Angular Material](https://material.angular.io)
- [NGRX](https://ngrx.io)
- [Bootstrap](https://getbootstrap.com)
- [Auth0-Angular](https://www.npmjs.com/package/@auth0/auth0-angular)
- [Geoapify Autocomplete](https://www.npmjs.com/package/@geoapify/geocoder-autocomplete)
- [title-case](https://www.npmjs.com/package/title-case)
- [xng-breadcrumb](https://www.npmjs.com/package/xng-breadcrumb)

<a name="installation"></a>
## Installation
Install the `node_modules` using `npm`:

```bash
npm install
```

<a name="development-server"></a>
## Development Server
Run this command:

```bash
ng serve --live-reload false
```

After successfully running the development server, navigate to:

```bash
http://localhost:4200/
```

<a name="support"></a>
## Support
For support, email jeddsaliba@gmail.com.
