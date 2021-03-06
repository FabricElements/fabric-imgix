/* eslint-disable max-len */
/* eslint-disable-next-line max-len */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
/* eslint-disable max-len */

/**
 * `fabric-imgix`
 *
 *
 * @customElement
 * @polymer
 * @extends Polymer.Element
 * @demo demo/index.html
 */
class FabricImgix extends mixinBehaviors([
  IronResizableBehavior,
], PolymerElement) {
  /**
   * @return {!HTMLTemplateElement}
   */
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
        max-width: 100%;
        max-height: 100%;
      }

      iron-image {
        box-sizing: border-box;
        display: block;
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        width: 100%;
        z-index: 1;
      }

      :host([sizing]) iron-image {
        position: absolute;
        top: 0;
        left: 0;
      }
    </style>

    <iron-image alt\$="[[alt]]" crossorigin\$="[[crossorigin]]" error\$="{{error}}" fade\$="[[fade]]" height\$="[[height]]" loaded\$="{{loaded}}" loading\$="{{loading}}" placeholder\$="[[_placeholder]]" position\$="[[position]]" preload\$="[[preload]]" preventload\$="[[preventLoad]]" sizing\$="{{sizing}}" src\$="[[path]]" width\$="[[width]]"></iron-image>
`;
  }

  /**
   * @return {string}
   */
  static get is() {
    return 'fabric-imgix';
  }

  /**
   * @return {Array}
   */
  static get imgIXProperties() {
    /**
     * imgIX properties array
     * https://docs.imgix.com/apis/url
     * Keep them sync with all the properties at the top
     */
    return [
      '~text',
      'auto',
      'ba',
      'balph',
      'bc',
      'bf',
      'bg',
      'bh',
      'blend',
      'blur',
      'bm',
      'border-radius-inner',
      'border-radius',
      'border',
      'bp',
      'bri',
      'bs',
      'bw',
      'bx',
      'by',
      'ch',
      'chromasub',
      'colorquant',
      'colors',
      'con',
      'corner-radius',
      'crop',
      'cs',
      'dl',
      'dpi',
      'dpr',
      'exp',
      'faceindex',
      'facepad',
      'faces',
      'fit',
      'flip',
      'fm',
      'fp-debug',
      'fp-x',
      'fp-y',
      'fp-z',
      'gam',
      'h',
      'high',
      'htn',
      'hue',
      'invert',
      'lossless',
      'mark',
      'markalign',
      'markalpha',
      'markbase',
      'markfit',
      'markh',
      'markpad',
      'markscale',
      'markw',
      'markx',
      'marky',
      'mask',
      'maskbg',
      'max-h',
      'max-w',
      'min-h',
      'min-w',
      'mono',
      'nr',
      'nrs',
      'or',
      'pad',
      'page',
      'palette',
      'px',
      'q',
      'rect',
      'rot',
      'sat',
      'sepia',
      'shad',
      'sharp',
      'trim',
      'trimcolor',
      'trimmd',
      'trimsd',
      'trimtol',
      'txt',
      'txtalign',
      'txtclip',
      'txtclr',
      'txtfit',
      'txtfont',
      'txtlead',
      'txtlig',
      'txtline',
      'txtlineclr',
      'txtpad',
      'txtshad',
      'txtsize',
      'txttrack',
      'txtwidth',
      'usm',
      'usmrad',
      'vib',
      'w',
    ];
  }

  /**
   * iron-image properties object
   * Keep them sync with all the properties on iron-image
   * @return {Object}
   */
  static get ironImageProperties() {
    return {
      /**
       * The URL of an image.
       */
      src: {
        type: String,
        value: '',
      },

      /**
       * A short text alternative for the image.
       */
      alt: {
        type: String,
        value: null,
      },

      /**
       * CORS enabled images support: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
       */
      crossorigin: {
        type: String,
        value: null,
      },

      /**
       * When true, the image is prevented from loading and any placeholder is
       * shown.  This may be useful when a binding to the src property is known to
       * be invalid, to prevent 404 requests.
       */
      preventLoad: {
        type: Boolean,
        value: true,
      },

      /**
       * Sets a sizing option for the image.  Valid values are `contain` (full
       * aspect ratio of the image is contained within the element and
       * letterboxed) or `cover` (image is cropped in order to fully cover the
       * bounds of the element), or `null` (default: image takes natural size).
       */
      sizing: {
        type: String,
        value: null,
        reflectToAttribute: true,
      },

      /**
       * When a sizing option is used (`cover` or `contain`), this determines
       * how the image is aligned within the element bounds.
       */
      position: {
        type: String,
        value: 'center',
      },

      /**
       * When `true`, any change to the `src` property will cause the `placeholder`
       * image to be shown until the new image has loaded.
       */
      preload: {
        type: Boolean,
        value: false,
      },

      /**
       * This image will be used as a background/placeholder until the src image has
       * loaded.  Use of a data-URI for placeholder is encouraged for instant rendering.
       */
      placeholder: {
        type: String,
        value: null,
      },

      /**
       * When `preload` is true, setting `fade` to true will cause the image to
       * fade into place.
       */
      fade: {
        type: Boolean,
        value: false,
      },

      /**
       * Read-only value that is true when the image is loaded.
       */
      loaded: {
        notify: true,
        readOnly: true,
        type: Boolean,
        value: false,
      },

      /**
       * Read-only value that tracks the loading state of the image when the `preload`
       * option is used.
       */
      loading: {
        notify: true,
        readOnly: true,
        type: Boolean,
        value: false,
      },

      /**
       * Read-only value that indicates that the last set `src` failed to load.
       */
      error: {
        notify: true,
        readOnly: true,
        type: Boolean,
        value: false,
      },

      /**
       * Can be used to set the width of image (e.g. via binding); size may also be
       * set via CSS.
       */
      width: {
        type: Number,
        value: null,
      },

      /**
       * Can be used to set the height of image (e.g. via binding); size may also be
       * set via CSS.
       *
       * @attribute height
       * @type number
       * @default null
       */
      height: {
        type: Number,
        value: null,
      },
    };
  }

  /**
   * @return {Object}
   */
  static get imgIXPropertiesObject() {
    let properties = {};
    for (let i = 0; i < FabricImgix.imgIXProperties.length; i++) {
      properties[FabricImgix.imgIXProperties[i]] = String;
    }
    return properties;
  }

  /**
   * @return {object}
   */
  static get properties() {
    // Iron image properties
    const ironImage = FabricImgix.ironImageProperties;
    // imgIX base properties
    const imgIX = FabricImgix.imgIXPropertiesObject;
    // Component base properties
    const componentProperties = {
      /**
       * Detects the available size of the component
       * and apply it to the size of the component
       */
      smart: {
        type: Boolean,
        value: false,
        observer: '_smartObserver',
      },
      /**
       * Preview image size
       */
      preview: {
        type: Boolean,
        value: true,
      },
      /**
       * Preview image size
       */
      previewSize: {
        type: Number,
        value: 10,
      },
      /**
       * Network connection is online
       */
      _online: {
        type: Boolean,
        value: true,
      },
      /**
       * Smart placeholder returns:
       * An image with `previewSize`
       * Will use the `placeholder` image if available
       * or the `src` image
       */
      _placeholder: {
        type: String,
        computed: '_computePlaceholder(preview, placeholder, previewSize, src, fm, mask, _online)',
      },
      /**
       * The element is ready
       */
      _ready: {
        type: Boolean,
        value: false,
        observer: '_readyObserver',
      },
      /**
       * The final image path
       */
      path: {
        type: String,
        reflectToAttribute: true,
        notify: true,
        readOnly: true,
        computed: `_computePath(src, _ready, _online, ${FabricImgix.imgIXProperties})`,
      },
    };

    /**
     * Merge all property objects
     */
    return Object.assign(ironImage, imgIX, componentProperties);
  }

  /**
   * Connected callback
   */
  connectedCallback() {
    super.connectedCallback();

    // const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    // if (connection) connection.addEventListener('onchange', this._getConnectionDefaults());

    this.networkStatus();
    window.addEventListener('online', () => this.networkStatus(), true);
    window.addEventListener('offline', () => this.networkStatus(), true);

    this._getConnectionDefaults();
    this.addEventListener('iron-resize', () => this._smartSize());
  }

  /**
   * Ready event
   */
  ready() {
    super.ready();
    afterNextRender(this, () => {
      this._ready = true;
    }, []);
  }

  /**
   * @return {array}
   */
  static get observers() {
    return [
      '_sizingObserver(sizing)',
    ];
  }

  /**
   * Smart size observer
   */
  _smartSize() {
    if (this.smart) {
      const viewportOffset = this.getBoundingClientRect();
      let width = viewportOffset.width;
      let height = viewportOffset.height;
      if (width <= 10) width = this.previewSize;
      if (height <= 10) height = this.previewSize;
      width = Math.round(width / 10) * 10;
      height = Math.round(height / 10) * 10;
      this.w = width;
      this.h = height;
    }
  }

  /**
   * Compute placeholder image
   *
   * @param {boolean} preview
   * @param {string|null} placeholder
   * @param {number|null} previewSize
   * @param {string|null} src
   * @param {number|null} fm
   * @param {string|null} mask
   * @param {boolean} online
   * @return {string|null}
   * @private
   */
  _computePlaceholder(preview, placeholder, previewSize, src, fm, mask, online) {
    let baseImage = '';
    if (!src || typeof(src) === 'undefined') return baseImage;
    if (preview) {
      const size = previewSize >= 10 ? previewSize : 10;
      baseImage = placeholder ? placeholder : src;
      if (baseImage) {
        baseImage += '?fit=crop';
        baseImage += fm ? `&fm=${fm}` : '';
        baseImage += mask ? `&mask=${mask}` : '';
        baseImage += `&w=${size}&h=${size}`;
      }
    }

    const url = baseImage ? baseImage : placeholder;

    // Don't display the image if offline and image is not in cache
    if (!online && !this._cached(url)) return '';

    return url;
  }

  /**
   * Sizing observer
   *
   * @param  {string|null} sizing
   * @private
   */
  _sizingObserver(sizing) {
    if (sizing) this.fit = 'crop';
  }

  /**
   * Base observer
   *
   * @param {boolean} smart
   * @private
   */
  _smartObserver(smart) {
    if (smart) {
      this._smartSize();
      this.preload = true;
      this.preview = true;
      this.fade = true;
      this.fit = 'crop';
      this.sizing = 'cover';
    }
  }

  /**
   * Compute path
   *
   * @param {string|null} src
   * @param {boolean} ready
   * @param {boolean} online
   * @return {*}
   * @private
   */
  _computePath(src, ready, online) {
    if (!src || typeof(src) === 'undefined' || !ready) {
      return '';
    }

    if (this.smart && (this.w <= 10 || this.h <= 10)) return '';

    let path = `${src}?`;
    const properties = FabricImgix.imgIXProperties;
    let imgIXObject = {};
    for (let i = 0; i < properties.length; i++) {
      const name = properties[i];
      if (this[name]) {
        imgIXObject[name] = this[name];
        path += `${name}=${this[name]}&`;
      }
    }

    // Don't display the image if offline and image is not in cache
    if (!online && !this._cached(path)) return '';

    return path;
  }

  /**
   * Ready observer
   *
   * @param {boolean} ready
   * @private
   */
  _readyObserver(ready) {
    if (ready) {
      this._smartSize();
    }
  }

  /**
   * Get connection defaults
   *
   * @private
   */
  _getConnectionDefaults() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      if (connection.downlink >= 7.2 || connection.effectiveType === '4g') {
        this.dpr = this.dpr ? this.dpr : window.devicePixelRatio;
      }
    } else {
      this.dpr = this.dpr ? this.dpr : window.devicePixelRatio;
    }
  }

  /**
   * Check network status
   */
  networkStatus() {
    this._online = navigator.onLine;
  }

  /**
   * Check if image is on cache
   *
   * @param {string|null} src
   * @return {boolean}
   * @private
   */
  _cached(src) {
    if (!src) return false;
    let image = new Image();
    image.src = src;
    return image.complete;
  }
}

window.customElements.define(FabricImgix.is, FabricImgix);
