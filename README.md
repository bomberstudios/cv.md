# CV

A small tool to generate nice, ATS-compliant PDF files from your Markdown CV

## Usage

- Fork the project
- Edit the `cv.md` file
- Commit the changes and push to GitHub
- GitHub Actions will generate a PDF file for each push on the `history` folder

### If you'd rather keep things local

You can run

```shell
npm install
npm start
```

to get a `cv.pdf` in your project's root.

## Customizing the output

As a designer by trade, I've spent some time making the output look reasonably good. But if you're not happy with something, you can change things by editing `style.css`.

To change the paper size or the margins for the output PDF, you can tweak the front-matter values in `cv.md`.

## Resources

- [What is ATS?](https://en.wikipedia.org/wiki/Applicant_tracking_system)
- [Navigating the Applicant Tracking System (ATS): A Job Guide](https://www.coursera.org/articles/applicant-tracking-system)
- [The Truth About Applicant Tracking Systems (ATS)](https://www.linkedin.com/pulse/truth-applicant-tracking-systems-ats-amanda-miller-lfk3c/)
- [A pretty decent CV review system](https://www.faangtechleads.com/resume/review) (uses AI so take the feedback with a ton of salt)
