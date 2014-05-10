# location.parse

**location.parse** parses a URL in a string into a location-like object.

```js
location.parse("https://example.com:443/video.m4v?whats=the+story#morning-glory");
```

```json
{
    "href": "https://example.com:443/video.m4v?whats=the+story#morning-glory",
    "protocol": "https:",
    "host": "example.com",
    "port": 443,
    "pathname": "/movie.m4v",
    "search": "?whats=the+story",
    "hash": "#morning-glory"
}
```

The script is 1.2KB, or 413B minified + gzipped.
