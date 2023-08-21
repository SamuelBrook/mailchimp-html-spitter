const HTMLGeneration = (props) => {


  return (

    <>
      {`<div style="text-align: center;"><br />`}
      <br></br>
      {`<strong>${props.title}</strong><br />${props.subtitle}</div>`}
      <br></br>
      {`<table align="right" border="0" style="margin-top: 6px">`}
      <br></br>
      {`<tbody>`}
      <br></br>
      {`<tr>`}
      <br></br>
      {`<td>`}
      <br></br>
      {`<table align="right" border="0">`}
      <br></br>
      {`<tbody>`}
      <br></br>
      {`<tr>`}
      <br></br>
      {`<td>`}
      <br></br>
      {`<table align="right" border="0">`}
      <br></br>
      {`<tbody>`}
      <br></br>
      {`<tr>`}
      <br></br>
      {`<td>`}
      <br></br>
      {`<span style="font-size:18px"><span style="color:#FF0000">&pound;${props.price}</span></span>&nbsp;`}
      <br></br>
      {`<del>${props.poundPresent}${props.delPrice}</del><span style="font-size:18px"><span style="color:#FF0000">&nbsp;</span></span>`}
      <br></br>
      {`</td>`}
      <br></br>
      {`</tr>`}
      <br></br>
      {`</tbody>`}
      <br></br>
      {`</table>`}
      <br></br>
      {`<span style="font-size:18px"><span style="color:#FF0000">&nbsp;</span></span></td>`}
      <br></br>
      {`</tr>`}
      <br></br>
      {`</tbody>`}
      <br></br>
      {`</table>`}
      <br></br>
      {`</td>`}
      <br></br>
      {`<td width="115px">`}
      <br></br>
      {`<table border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer" style="border-collapse: separate !important;border: 1px solid #4CAE4C;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px;background-color: #5CB85C;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">`}
      <br></br>
      {`<tbody>`}
      <br></br>
      {`<tr>`}
      <br></br>
      {`<td align="center" class="mcnButtonContent" style="font-family: Arial;font-size: 16px;padding: 6px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" valign="middle"><a class="mcnButton" href="${props.buttonLink}" style="font-weight: normal;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;word-wrap: break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" target="_blank" title="${props.shortTitle}">Find out more</a></td>`}
      <br></br>
      {`</tr>`}
      <br></br>
      {`</tbody>`}
      <br></br>
      {`</table>`}
      <br></br>
      {`</td>`}
      <br></br>
      {`</tr>`}
      <br></br>
      {`</tbody>`}
      <br></br>
      {`</table>`}
    </>
  )

};

export default HTMLGeneration;