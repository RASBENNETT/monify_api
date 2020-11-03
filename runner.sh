#!/usr/bin/env bash

node dataConstructor/scrapers/PropertyScraper

node dataConstructor/scrapers/AccessoriesScraper

node dataConstructor/storeConstructor

npm run start