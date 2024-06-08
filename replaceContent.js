const fs = require("fs");

const cheerio = require("cheerio");
// Function to replace links, images, and text within HTML files
function replaceContent(
  htmlFilePath,
  newLinks,
  newImageSrc,
  newText,
  headingText
) {
  const htmlContent = fs.readFileSync(htmlFilePath, "utf8");
  const $ = cheerio.load(htmlContent);

  // Replace links
  $("a.btn").each((index, element) => {
    $(element).attr("href", newLinks[0]);
    $(element).text(newText[index]);
  });
  $("a.es-button").each((index, element) => {
    $(element).attr("href", newLinks[0]);
    $(element).text(newText[index]);
  });

  $("a.es-button.tk").each((index, element) => {
    const newTextAndHtml = `${newText[index]}  <!--[if !mso]><!-- -->
      <img src="https://zgtnoh.stripocdn.email/content/guids/CABINET_a1531a2452d9d5919aca735eaf3571f71d03cf146d7e1008ac5541e4668fa4c5/images/arrowrightoutline256.png" alt="icon" width="20" class="esd-icon-right" align="absmiddle" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;display:inline-block;vertical-align:middle;margin-left: 25px;margin-bottom: 3px;">
      <!--<![endif]-->`;

    const newHtml = `<a href="${newLinks[0]}" class="es-button es-button-1711253018016 tk" target="_blank" style="
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
      mso-line-height-rule: exactly;
      text-decoration: underline;
      font-family: arial,
        'helvetica neue',
        helvetica, sans-serif;
      font-style: normal;
      line-height: 120%;
      text-decoration: none;
      width: auto;
      text-align: center;
      mso-padding-alt: 0;
      mso-style-priority: 100 !important;
      text-decoration: none !important;
      font-size: 20px;
      border-radius: 20px;
      padding: 10px 5px;
      display: block;
      color: #000000;
      background: #ffffff;
      font-weight: bold;
      mso-border-alt: 10px solid
        #ffffff;
    ">${newTextAndHtml}</a>`;

    $(element).replaceWith(newHtml);
  });

  //second
  $("a.es-button.ttk").each((index, element) => {
    const newTextAndHtml = `${newText[index]}   <!--[if !mso]><!-- -->
      <img src="https://zgtnoh.stripocdn.email/content/guids/CABINET_ee2c79e12849ed9e1b2882c3fe1c3930587707bf13e7a9ef6cf784a0a7ee967e/images/icons8rightarrow50.png" alt="icon" width="24" class="esd-icon-right" align="absmiddle" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;display:inline-block;vertical-align:middle;margin-left: 15px; margin-bottom: 3px;">
      <!--<![endif]-->`;

    const newHtml = `<a href="${newLinks[0]}" class="es-button es-button-1711253018016 ttk" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-style:normal;line-height:120%;text-decoration:none;width:auto;text-align:center;mso-padding-alt:0;mso-style-priority:100 !important;text-decoration:none !important;font-size: 20px; padding: 12px 5px; display: block; background: #ffffff; border-radius: 100px; color: #039855; font-weight: bold; mso-border-alt: 10px solid #ffffff;
    ">${newTextAndHtml}</a>`;

    $(element).replaceWith(newHtml);
  });
  //third
  $("a.es-button.tk2").each((index, element) => {
    const newTextAndHtml = `${newText[index]}  
      <img src="https://zgtnoh.stripocdn.email/content/guids/CABINET_6430cec7b3ab72ee1fe7d0f84b67136cd0b4ca0bce6826db3a7e74feef6f361e/images/arrowright256.png"
                            alt="icon"
                                            width="24"
                                            align="absmiddle"
                                            style="
                                              display: inline-block;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              vertical-align: middle;
                                              margin-left: 15px;
                                              margin-bottom: 3px;
                                            "
                                            height="24" />
      <!--<![endif]-->`;

    const newHtml = `<a href="${newLinks[0]}" class="es-button es-button-1714575694830 tk2"
      target="_blank"
      style="
        mso-style-priority: 100 !important;
        text-decoration: none;
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
        color: #454545;
        font-size: 20px;
        padding: 10px 5px;
        display: block;
        background: #ffc647;
        border-radius: 8px;
        font-family: arial, 'helvetica neue',
          helvetica, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 24px;
        width: auto;
        text-align: center;
        mso-padding-alt: 0;
        mso-border-alt: 10px solid #ffc647;
    ">${newTextAndHtml}</a>`;

    $(element).replaceWith(newHtml);
  });

  // Find <a> tags containing <img> tags

  $("a.img-link").each((index, element) => {
    $(element).attr("href", newLinks[0]);

    const imgElement = $(element).find("img");

    // Check if <a> tag contains <img> tag
    if (imgElement.length > 0) {
      // Change src attribute of <img> tag
      imgElement.attr("src", newImageSrc);
    }
  });
  $("a.h1").each((index, element) => {
    $(element).attr("href", newLinks[0]);
    $(element).text(headingText);
  });

  fs.writeFileSync(htmlFilePath, $.html());
}

module.exports = replaceContent;
