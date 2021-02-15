# **Childcare Finder**

1. Overview
2. UX
3. Features
4. Technologies Used
5. Testing
6. Deployment
7. Credits
8. Acknowledgements
9. Disclaimer

# **Overview**

This website was designed to help users, particularly parents find different childcare options in their area. The site is designed to be helpful by providing a simple search function to enable them to see the different types of childcare. The information is then displayed to the user via Google maps. The site can be interacted with by the user, allowing them to select an option and see where it is located.

The project is developed primarily using  **HTML** ,  **CSS** and,  **JavaScript** for additional functionality.

[View the live project here.](https://asplesa.github.io/Childcare-finderMS2/)

![Home page](/wireframes/homepage-image.JPG)


# **UX**

**Strategy**

**Stakeholder Interview**

**What are some of your most important considerations when using the web to search childcare.**

&quot;_I want to know that I can trust the website and hence that the information it provides is true and correct&quot;._

&quot;_I want to be able to find all of the information I need in one place&quot;._

**Competitor Review**

[Childminding.ie](https://www.childminding.ie/): Provides a useful list of registered childminders in a directory format but does any provide any other type of childcare making it difficult for users to make an informed decision.

[Schooldays:](https://www.schooldays.ie/) Informative with lots of parenting information available. From an UX perspective it requires the user to do a lot of searching to find the required childcare information.

**Business Strategy**

**Psychological Factors**

- Evoke a positive emotional response from the imagery and branding used.
  - Use warm, inviting tones on the website along with images of happy children.
  - Minimalist design used so as not to overwhelm the user.
  - Consistent use of branding throughout the site.

**Content Strategy**

- Clear and concise information with appropriate imagery of children and warmth to convey professionalism but also a feeling of trust.
- Providing factual information is the main focus of the site and over time we will build out the content strategy to include useful parenting related content.
- Every page footer contains social links to encourage further engagement and brand building.

**User Stories**

1. As a **first time visitor** to the website, I want to know straight away what the website does.
2. As a **parent** , I only want to know what childcare options are available in my area.
3. As the **site owner** I want to provide a platform for childcare providers to get in front of parents. This benefits me as businesses may wish to advertise by way of premium listings as traffic to the site grows.
4. As a **childcare service provider** , I want to showcase my business to get more customers.
5. As a **childcare service provider,** I also want to know who my competitors are.

**Scope**

**Requirements**

**Encourage and Allow User Engagement**

- To ensure that the site immediately showcases what it is about.
- There are clear call to actions for the user to enable user interaction and engagement.
- Simple but effective search features will enable this interaction.

**User Confidence**

- Strong and consistent branding will be used across all platforms.
- Easy to use platform but a minimalistic design to ensure only relevant information is shown so as not to overwhelm the user with features.
- Design and colour palate will instil a feeling of trust and professionalism.

**Structure**

**Home Page**

- Makes it immediately clear as to what the company does.
- Grabs user&#39;s attention, engages, and encourages user to scroll and search.
- Prominent display of premium providers (in future these will be a potential revenue stream).

**Contact Page**

- Use of a clear and simple form to encourage communication between site owner and user.
- Use of a form to allow users to contact the site owners by providing a small amount of information.
- This encourages user interaction with the site and allows the site owners to learn more with users wants and needs.

**Skeleton**

**Wireframes**

Balsamiq was used to create wireframes of the site. These are be found **here**

The initial wireframes consisted of 3 pages, homepage, locations page and a contact page. We created a simple homepage with minimal content. We used images and headers to show the user what the site is about on first entry.

The wireframe was amended during development to combine the homepage and location page into one scrolling page.

We implemented Google map API on the homepage. This allows users to search childcare options. When the user selects an option it wil display the location of this option on the map.

A simple contact form on the Contact Us page again encourages user interaction.

**Surface**

The site&#39;s aesthetic design is aligned with the values and branding; simple, professional and trustworthy.

**Logo**

The project&#39;s &#39;surface&#39; design commenced with the logo design. Canva was used to create the logo and colour scheme. Work was carried out to ensure Colours, Fonts, and Imagery were all created using Canva. The intertwining C&#39;s logo was used as the favicon for the site.

**Colour Scheme**

The primary colour scheme chosen to implement into the project was a combination of Purple, Green and White. This combination is both modern, yet classic,

On initial design, the three primary colours were:

- Purple: #8a2be2;
- Grey: #777777 (Text color)
- Off-White: #FAFAFA

We used the purple color and reduced the opacity to 0.1 for the background of certain sections. This provides clarify between sections while retaining the consistency of the colour scheme.

The colour scheme chosen was assessed for contrast ratio via [Contrast-Ratio](https://contrast-ratio.com/), and the following results were obtained:

Purple: #8a2be2 against off-white: 5.7 - passes AA level for any size text and AAA for large text (above 18pt or bold above 14pt).

Grey #FAFAFA against white: 4.47 - Passes AA for large text (above 18pt or bold above 14pt)

**Typography**

Roboto was chosen as the font for the page&#39;s sub-headings and body text. The font is clean, modern and is easy to read.

**Images**

The images used in this project were selected from [Canva](https://www.canva.com/). The pictures were specifically selected due to their contextual relevance and colour schemes.

**Visual Effects**

**Navbar / Footer/Buttons**

The Navbar and Footer have the purple brand color along with the submit button on the contact form for consistency. This styling is also consistently applied to the Read More buttons.

# **Features**

**Existing Features**

- Responsive on all device sizes
- 2 pages – Scrolling Homepage and Contact.
- Bootstrap NavBar used so the user can navigate the site easily. The Navbar is hidden and replaced by a burger menu,
- Javascript used to for search feature.
- Google Maps API incorporated to display results of search.
- Featured provider section but a button for the user to click if they wish to read more.
- Social Media links on the footer of each page.
- A Form used to enable users to contact the site owner with a success modal on submission providing an additional element of interactivity. The EmailJS API was integrated with the form.

**Responsive Layout and design**

The site is designed to be fluid, dynamic, and responsive to all screen sizes andresolutions. On the homepage bootstrap columns were used to create different breakpoints to change the structure of the content, namely the featured providers section. The homepage is split into clear sections which expand or shrink to equal sizes responsively to a device&#39;s height and width.

**Future Feature Considerations**

**Expansion of the search filter**

Currently, users can choose between a list of childcare providers. In future this functionality could be expanded to include a search filter where users could filter based on the type of care they need and all locations with this type could be displayed on the map, along with a pop-up showing more details.

**Creation of a mailing list database**

The addition of a mailing list which would be linked and stored in a database should be considered. This will allow for future communication and engagement with users.

![](RackMultipart20210212-4-1ndmqa0_html_892bc76665002c1a.gif)

# **Technologies Used**

- The project was primarily written in HTML and CSS. Small snippets of JavaScript were used to enhance user experience.
- [Gitpod](https://gitpod.io/) IDE - the project was written and tested using Gitpod. It was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub](https://github.com/) for hosting source code, for utilising git version control, and for hosting the site on GitHub pages.
- [Code Institute&#39;s Gitpod Template](https://github.com/Code-Institute-Org/gitpod-full-template) – the project template was generated from this.
- [Boostrap](https://getbootstrap.com/) v4.1.3, framework for was used to assist with the responsiveness and styling of the website.
- [FontAwesome](https://fontawesome.com/) v5.0.10, was used to add icons for aesthetic and UX purposes..
- [Balsamiq](https://balsamiq.com/) was used to create the [wireframes](https://github.com/asplesa/BaxtersMS1/blob/85b765e238d74d159c43ae770cc2f87cc6bf985a/readme-assets/Baxters%20wireframe%20MS1.pdf) during the design process.
- [jQuery](https://jquery.com/) v3.5.1, a JavaScript library, for certain Bootstrap elements, and for form validation.
- The project uses [Popper.js](https://popper.js.org/) v1.16.1, a Tooltip and Popover Positioning Engine, for Tooltips and dropdowns.
- The project uses [jsDelivr](https://www.jsdelivr.com/) as a Content Delivery Network for Bootstrap and Popper.
- [Google Chrome](https://www.google.com/intl/en_uk/chrome/) [Dev Tools](https://developers.google.com/web/tools/chrome-devtools) was used for debugging throughout the development process.
- [Google Fonts](https://fonts.google.com/) was used to import the Roboto font into the style.css file which is used on all pages throughout the project.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) and [W.A.V.E](https://wave.webaim.org/)  were used to assess the site&#39;s accessibility.
- [Screen Reader for Google Chrome](https://chrome.google.com/webstore/detail/screen-reader-for-google/nddfhonnmhcldcbmhbdldfpkbfpgjoeh/related?hl=en) was used to check screen-reader accessibility.
- [W3C HTML Markup Validator](https://validator.w3.org/) was used to validate the HTML.
- [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) was used to validate the CSS.
- [HTML Formatter](https://www.webformatter.com/html)  html formatter to help keep things tidy
- [Am I Responsive](http://ami.responsivedesign.is/) –was used to create responsive image for readme.MD
- [Canva](https://www.canva.com/) was was used to create the logo, resizing images and editing photos for the website.

![] (/wireframes/contact-page-image.JPG)

# **Testing**

**Functionality Testing**

- All external and internal links were tested to make sure they open up the correct pages in new tabs.
- The Navigation bar and footer were tested on all pages to ensure all links worked and were consistent across pages.

**CSS3 validator**

Validate by direct input [CSS Validator](https://jigsaw.w3.org/css-validator/)

- Test result : No Errors Found But Warnings

**HTML5 validator**

Vaidate by direct input [HTML5 Validator](https://validator.w3.org/#validate_by_input)

- Test result : No Errors Found But Warnings

**JavaScript validator**

Validate by direct input [JavaScript Validator](https://jshint.com/)

- Test result : No Errors Found

**Usability Testing**

Tested on the following:

- https://contrast-ratio.com/ Used to assess the color scheme contrast
- https://developers.google.com/web/tools/lighthouse
- https://wave.webaim.org/
- Screen Reader for Google Chrome

**Compatibility Testing**

- **Browser Compatibility**
  - Tested on Chrome, Firefox, Opera, Internet Explorer, Microsoft Edge, Safari.
- **OS Compatibility**
  - Tested on iOS , Android 10 and Windows 10.
- **Tested for responsivness on ** [**Chrome DevTools**](https://developers.google.com/web/tools/chrome-devtools) **.**

**Performance Testing**

- **Tested on Developer Tools Lighthouse.**

![](RackMultipart20210212-4-1ndmqa0_html_3a9ff0f312c59c95.png)

  ![](RackMultipart20210212-4-1ndmqa0_html_a392a56dd26d9427.png)



**Testing User Stories**

- **First Time User to the site**
  - I immediately know what the site about.
  - The hero page is self explanatory showing pictures of smiling children so I know this is a website relating to children.
  - All pages of website have consistent navigation bar and footer.
- **As a parent**
  - There is a clear and simple call to action on the homepage.
  - The clear heading of Find Local Childcare followed by the dropdown instantly tells what the site is about.
  - The visual impact of the map and markers solves my problem.
- **Childcare Provider**
  - The Featured provider section provides a showcase for my busines.
- **Childcare Provider competitors**
  - The Featured provider section also provides insights into who my competitors are thus allowing me improve my business description so I can stand out against my competitors.

![](RackMultipart20210212-4-1ndmqa0_html_a6bd29b78b1a628c.png)

![](RackMultipart20210212-4-1ndmqa0_html_892bc76665002c1a.gif)

# **Deployment**

**How this Project was Deployed**

This project was deployed to GitHub pages via the following steps:

1. Log into [GitHub](https://github.com/) and locate the [GitHub Repository](https://github.com/asplesa/Childcare-finderMS2)from the list.
2. At the top of the Repository (not top of page), locate the &quot;Settings&quot; Button on the menu.
3. Scroll down the Settings page until you locate the &quot;GitHub Pages&quot; Section.
4. Under &quot;Source&quot;, click the dropdown called &quot;None&quot; and select &quot;Master Branch&quot;.
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the &quot;GitHub Pages&quot; section.

As this was developed on the master branch, all changes made to the repository are immediately reflected in the deployed project.

**How to Run this Project in your Browser**

1. Install the applicable [GitPod](https://www.gitpod.io/docs/browser-extension/) Browser Extensions for your browser.
2. Create a [GitHub](https://github.com/join) account.
3. Log in to [Gitpod](https://gitpod.io/login/) using your GitHub account.
4. Visit Childcare Finder&#39;s [GitHub Repository](https://github.com/asplesa/Childcare-finderMS2).
5. Open the repository in Gitpod:
  - Click the green &quot;Gitpod&quot; icon at the top of the Repository, or
  - Click this [link](https://copper-cuckoo-oe1qhi9y.ws-eu03.gitpod.io/#/workspace/Childcare-finderMS2).
6. A new workspace will open with the current state of the master branch.

# **Credits**

**Content**

- All text used throughout the site was written by me.
- All business ideas and general development concepts were devised by me.

**Media**

- All Photographs were sourced from [Canva.com](https://www.canva.com/).
- The logo was created in [Canva.com](https://www.canva.com/)

**Code**

- The drop-down menu of the search facility was taken from [https://basscss.com/v7/docs/btn-primary/](https://basscss.com/v7/docs/btn-primary/)
- [StackOverflow](https://stackoverflow.com/questions/41664991/bootstrap-4-how-do-i-center-align-a-button#:~:text=With%20the%20use%20of%20the,will%20refer%20to%20the%20setting) was used to learn how to center the button for the dropdown.
- Code snippet for success modal taken from [Codepen.io](https://codepen.io/hanapiers/pen/EXNrGP)
- HTML/CSS: Guidance on Bootstrap, Tooltips, Modals and general Bootstrap integration and usage was obtained from the [Bootstrap Documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/).
- The Code Institute course notes were also used for integration of Google Maps and EmailJS.

