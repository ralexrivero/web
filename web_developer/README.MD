# Web development

## SSH

> encryted shell conection from client to the host

- `ssh {user}@{host}`

- `ssh -i growth root@143.110.155.71`

- `https://growthlearning.engineer/`

- `sudo apt-get install nodejs`

### clipboard copy

- `sudo apt-get install -y xclip`
- `alias pbcopy="xclip -sel clip"`
- `pbcopy` copy the content of a given file to the clipboard
- `pbcopy < file_path`

## Performance

### transfer performance

> Network performance

- Minimize text: html, css and javascript files
- Minimize images
  - remove meta tags (exif information)
- Reduce the number of requests
  - less files
  - use @media queries
  - avoid innecesary libraries
  - combine files into one (js and css files)

#### Critical render path

- optimize html to load css as soon as possible
- optimize html to load javascript as late as possible
- only request css when it's needed by a specific media
- `<link rel="stylesheet" href="./style.css" media="all">`
- `<link rel="stylesheet" href="./style2.css" media="only screen and (min-width:500px)">`
- less specificity avoiding complex css selector. More specific using classess, less specific in long selectors
- `async` and `defer` attributes in `<script>` tags
  - use `<scipt async>` add to anything that doesn't affect the DOM or the CSS object model.
    - For scripts that requiere no knowledge of the code and not essential for the user experience (i.e. tracking scripts)
  - use `<script defer>` to wait until HTML is complelly parsed and then start to executing
    - For scripts that act on the *rendered tree*

#### uglify files

### frontend performance

### backend performance

### test speed

> Google Page speed insights

[Page speed insights](https://developers.google.com/speed/pagespeed/insights/)

> Web page test

[webpagetest](https://www.webpagetest.org)

