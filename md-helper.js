
  function rtfToMarkdown(el) {
    let txt = el.innerHTML;
    txt = txt.replace(/<p>/g, '');
    txt = txt.replace(/<\/p>/g, '\n\n');
    txt = txt.replace(/<br>/g, '\n');
    txt = txt.replace(/&amp;nbsp;/g, '');
    txt = txt.replace(/</g, '<');
    txt = txt.replace(/&amp;gt;/g, '>');
    txt = txt.replace(/&amp;amp;lt;/g, '<');
    // console.log(txt);
    return txt;
  }

  function markdownToHtml(txt) {
    let converter = new showdown.Converter({
      noHeaderId: true,
      headerLevelStart: 2,
      literalMidWordUnderscores: true
    });
    let html = converter.makeHtml(txt);
    // console.log(html);
    return html;
  }

  // if there are elements with a class named 'markdown'
  // attached, first convert their content to html
  let markdowns = $('.markdown');
  markdowns.toArray().forEach((el) => {
    let txt = rtfToMarkdown(el),
        html = markdownToHtml(txt);
    el.innerHTML = html;
  });
