# Client Side Date Field Formatter

International date formats and timezones are a mess. Let the browsers render
date fields in the right localized format and timezone and stop worrying
about that on your site.

A typical use-case is an international event listing, where the regional
date format and timezone of potential participants is unknown.

Works automatically for authenticated and anonymous (with Javascript
enabled).

## Installation

Install this module using the [official Backdrop CMS instructions](https://docs.backdropcms.org/documentation/extend-with-modules).

Configure the date fields display you wish to use client-side date field
rendering.

![Display settings](https://raw.githubusercontent.com/backdrop-contrib/cs_date_formatter/1.x-1.x/screenshots/display-settings.webp)

With settings as in the screenshot above the same date (field) will look like:

- `Jun 30, 2022, 07:00 AM PDT` (for someone in Los Angeles)
- `30. Juni 2022, 16:00 MESZ` (for someone in Vienna)

## Issues

Bugs and feature requests should be reported in the [Issue Queue](https://github.com/backdrop-contrib/cs_date_formatter/issues).

## Similar modules

Client Side Date Field Formatter deals with fields provided by the core Date
module.
If you're interested in timezone handling for dates in _content_, have a look at
the [User Time Zone Tokens module](https://backdropcms.org/project/utz_tokens).

## Current maintainers

* [Indigoxela](https://github.com/indigoxela)

## Credits

Written for Backdrop by Indigoxela

## License

This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.
