# CV

A small tool to generate nice, ATS-compliant PDF files from your Markdown CV.

See [an example PDF of the output](https://github.com/bomberstudios/cv.md/blob/main/history/cv-2026-07-10T09-21-42.pdf).

## Usage

- Fork the project (use this [one click fork link](https://github.com/new?template_name=cv.md&template_owner=bomberstudios))
- Edit the `cv.md` file with your actual info
- Commit the changes and push to GitHub
- GitHub Actions will generate a PDF file for each push on the `history` folder

### If you'd rather keep things local

You can run

```shell
npm install
npm start
```

to get a `cv.pdf` in your project's root. There's also a `npm run watch` task you can use while tweaking the style locally, that regenerates the PDF whenever the `cv.md` file changes. I recommend using it in conjunction with something like [Skim](https://skim-app.sourceforge.io), which will reload your PDF automatically when it's updated.

## Customizing the output

As a designer by trade, I've spent some time making the output look reasonably good. But if you're not happy with something, you can change things by editing `style.css`.

To change the paper size or the margins for the output PDF, you can tweak the front-matter values in `cv.md`.

To add a page break wherever you want in your CV, add this line in the Markdown source:

```html
<div class="page-break"></div>
```

## Some tips

- You can use [git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) to keep track of your CV history. For example, you can use something like `company-role-date` when you apply for _role_ at _company_ on _date_, so you can always check exactly how your CV looked like for that application
- You can add tracking parameters to your website's URL, while keeping it clean on the PDF, to know if people visit your website from your CV. This is not bulletproof, because some systems may strip that information out, but every little thing helps when looking for your next job

## Resources

- [What is ATS?](https://en.wikipedia.org/wiki/Applicant_tracking_system)
- [Navigating the Applicant Tracking System (ATS): A Job Guide](https://www.coursera.org/articles/applicant-tracking-system)
- [The Truth About Applicant Tracking Systems (ATS)](https://www.linkedin.com/pulse/truth-applicant-tracking-systems-ats-amanda-miller-lfk3c/)
- [A pretty decent CV review system](https://www.faangtechleads.com/resume/review) (uses AI so take the feedback with a ton of salt)
