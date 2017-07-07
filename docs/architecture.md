# Architecture

## Front End

The Angular app is organized into the following modules:

* `+explore`: Main map display and layer selection.
* `+friends`: Configure realtime position tracking and manage friends with whom you share your position.
* `+go`: Travel actions (e.g., get an Uber/Lyft) and settings.
* `+login`: Login screen. Unauthenticated users redirect to this container component.
* `+more`: Access profile, general settings, etc.
* `+notifications`: Manage notifications.
* `+user`: Manage user details, such as profile.
* `components`: Shared UI components that do not belong to one particular feature. This module also imports the common [Material Design](https://material.angular.io) components.
* `core`: Services and components that are global to the app. This module is only registered once in the root module and should not be imported by any other module. This module should not contain any service that can have more than one instance.
* `mapbox`: General-purpose Mapbox GL components. This module should not contain app-specific business logic.
* `state`: Configures the Redux store and contains state-related concerns. State components should be organized by feature within the module. Each root-level state property defined in the [State](../src/app/state/state.ts) interface should have its own directory.

<small>A `+` preceding the module name indicates that the module is lazy-loaded.</small>
