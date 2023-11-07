'use client'

import Script from "next/script"

export default function Form() {
  return(
    <Script id="formulario">
      {`(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd91TQdxY6KZDChl0Or6sLKvTfC1LGO98kO6x2oVuUlsb.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");`}
    </Script>
  )
}