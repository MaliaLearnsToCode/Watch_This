// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AddressAutocompleteController from "./address_autocomplete_controller"
application.register("address-autocomplete", AddressAutocompleteController)

import DeliveryLocationAutocompleteController from "./delivery_location_autocomplete_controller"
application.register("delivery-location-autocomplete", DeliveryLocationAutocompleteController)

import GeocoderController from "./geocoder_controller"
application.register("geocoder", GeocoderController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import WatchTabsController from "./watch_tabs_controller"
application.register("watch-tabs", WatchTabsController)

import MapController from "./map_controller"
application.register("map", MapController)
