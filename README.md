# Frontend Mentor - Interactive Rating Component

## Overview

This is a solution to the Interactive Rating Component
 website challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Rate in the section
- See their rate in different visual. Also see the appreciate message from the web-site

### Links

Solution URL: [https://github.com/GIGAKLIBADZE/interactive-rating-component]
Live Site URL: [https://interactive-rating-component-rust-xi.vercel.app/]

## My process

I used different point of view when starting building of the project. I split off it in different components, then started to initialize each of them with respective CSS files and with using JS in it.  I used mobile first workflow. For summary, I changed my mindest for with React JS for the process of building.

### Built with

Semantic HTML5 markup
CSS custom properties
Flexbox
Mobile-first workflow
JavaScript
React JS

### What I learned

After creating many HTML/CSS projects, then adding a lot of ones built with the DOM, I can confidently say that I am now completely familiar with the DOM structure and its basics. Now, I started learning of React and it is my first porject with this library. I plan to continue working on projects involving the React to deepen my understanding.

The certain part of code block where things for brand new for me:

```jsx
    <div className="ratings">
                    {button.map((b) => {
                        return <button key={b} onClick={() => setRate(b)} style={{backgroundColor: rate === b? "#7c8798" : "", color: rate === b? "#ffffff" : ""}}>{b}</button>
                    })};
                </div>
```


### Continued development

Already, after building a lot of DOM projects, I am going to commence learning React JS.

### Useful resources

[https://algoUni.ge/] - Mentors from this course helped me to get more familiar with integrate JavaScrip in my project. Here you can find mentorship service, which helps me a lot.
[https://www.w3schools.com/] - This popular site is very useful to find many features that you need while building projects.
[https://chat.openai.com/] - Also the popular tool, created by AI helped me to find and understand some topics about CSS.

Author
Website - [https://github.com/GIGAKLIBADZE]
