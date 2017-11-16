## \<fabric-imgix\>

`fabric-imgix` is a web component that process images in real time using [imgIX](https://www.imgix.com/) service.

## Installation

Install fabric-imgix with Bower

```shell
$ bower install --save FabricElements/fabric-imgix
```

## Usage

Import it into the `<head>` of your page

```html
<link rel="import" href="bower_components/fabric-imgix/fabric-imgix.html">
```

### Example: basic usage

```html
<fabric-imgix src="img.jpg"></fabric-imgix>
```

* `src` (string) - The URL of an image.

This element also receives all the properties that match with the imgIX parameters. 
> See [imgIX API reference](https://docs.imgix.com/apis/url) for all the options.

> See [demo file](./demo/index.html) for examples.

## Contributing

Please check [CONTRIBUTING](./CONTRIBUTING.md).

## License

Released under the [BSD 3-Clause License](./LICENSE.md).

