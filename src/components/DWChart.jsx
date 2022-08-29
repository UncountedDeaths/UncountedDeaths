/**
 * Taken from: https://github.com/sto3psl/react-datawrapper-chart#readme
 * 
 * 
 ISC License

Copyright (c) 2019, Fabian Guendel

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

 */

import React, { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

export default function DWChart({ title, src, ...props }) {
  const iframeRef = useRef();
  const [height, setState] = useState(500);

  const onMessage = useCallback(
    ({ data = {}, source }) => {
      if (
        source !== iframeRef.current.contentWindow ||
        typeof data === 'string' ||
        !data['datawrapper-height']
      )
        return;

      setState(Object.values(data['datawrapper-height'])[0]);
    },
    [setState, iframeRef]
  );

  useEffect(() => {
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [height, setState, onMessage]);

  return (
    <iframe
      ref={iframeRef}
      scrolling="no"
      frameBorder="0"
      // width="100%"
      {...props}
      title={title}
      src={src}
      height={height}
    />
  );
}

DWChart.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  loading: PropTypes.oneOf(['eager', 'lazy']),
};
