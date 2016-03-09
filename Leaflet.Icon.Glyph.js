  L.Icon.Glyph = L.Icon.extend({
      options: {
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
// 		iconUrl: 'glyph-marker-icon.png',
// 		iconSize: [35, 45],
// 		iconAnchor:   [17, 42],
// 		popupAnchor: [1, -32],
// 		shadowAnchor: [10, 12],
// 		shadowSize: [36, 16],
// 		bgPos: (Point)
        className: '',
        prefix: '',
        glyph: 'home',
        glyphColor: 'white',
        glyphSize: '11px',	// in CSS units
        glyphAnchor: [0, -7]	// In pixels, counting from the center of the image.
      },

      createIcon: function () {
        var parentDiv = document.createElement('div'),
         div = document.createElement('div'),
          options = this.options;

        if (options.glyph) {
          div.appendChild(this._createGlyph());
        }

        this._setIconStyles(div, options.className);
        parentDiv.appendChild(div);
        return parentDiv;
      },

      _createGlyph: function () {
        var glyphClass,
          textContent,
          options = this.options;

        if (!options.prefix) {
          glyphClass = '';
          textContent = options.glyph;
        } else if (options.glyph.slice(0, options.prefix.length + 1) === options.prefix + "-") {
          glyphClass = options.glyph;
        } else {
          glyphClass = options.prefix + "-" + options.glyph;
        }

        var span = L.DomUtil.create('span', options.prefix + ' ' + glyphClass);
        span.className='outline';
        span.style.fontSize = options.glyphSize+'px';
        span.style.color = '#' + options.glyphColor;
        span.style.width = options.glyphSize + 'px';
        span.style.lineHeight = options.glyphSize + 'px';
        span.style.textAlign = 'center';
        span.style.marginLeft = options.glyphAnchor[0] + 'px';
        span.style.marginTop = options.glyphAnchor[1] + 'px';
        span.style.pointerEvents = 'none';

        if (textContent) {
          span.innerHTML = textContent;
          span.style.display = 'inline-block';
        }

        return span;
      },

      _setIconStyles: function (div, name) {
        if (name === 'shadow') {
          return L.Icon.prototype._setIconStyles.call(this, div, name);
        }

        var options = this.options


        div.className = 'leaflet-marker-icon leaflet-glyph-icon ' + name;
        // var src = this._getIconUrl('icon');
        // if (src) {
        // 	div.style.backgroundImage = "url('" + src + "')";
        // }

        // if (options.bgPos) {
        // 	div.style.backgroundPosition = (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
        // }
        // if (options.bgSize) {
        // 	div.style.backgroundSize = (options.bgSize.x) + 'px ' + (options.bgSize.y) + 'px';

        div.style.marginLeft = (-options['glyphSize']/2) + 'px';
        div.style.marginTop = (-options['glyphSize']/2) + 'px';

        div.style.width = options['glyphSize'] + 'px';
        div.style.height = options['glyphSize'] + 'px';

      }
    });

    L.icon.glyph = function (options) {
      return new L.Icon.Glyph(options);
    };
    
