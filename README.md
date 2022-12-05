## Deploy a React SPA (single page application) on Netlify

So far, we've created applications that we've run locally on our `localhost`. As you can imagine, this isn't how websites normally work! It's time to level up to deployment - hosting your app on a server outside of your own computer, provided by an external service, so that your app can be accessed through a URL from any browser/device. 

There are many tools out there to do this, both free and paid, but we'll start with getting a front end deployed using a tool called Netlify.

Note: The free tier of Netlify doesn't allow deployment of private organisation repositories, so as this repository is within the School of Code organisation, you'll need to go into this repo's settings and scroll down to the "danger zone" at the bottom and change the visibility to public before you deploy. Alternatively, each member of your pair can fork a copy of the repository into their own personal Github.

1. Have a look through the Netlify documentation:
 - https://docs.netlify.com/
 - Remember, you can find other resources/videos via Google - just search for deploying Create React App on Netlify (or similar).
 
Practice taking turns to explain the answers to these questions:
 - What is Netlify?
 - What problems does Netlify solve?
 - When would you use it?
 - When would you not use it?
 - What are some alternatives/competitors to Netlify? (Just to know what else is out there.)

2. Initialise your React app with Create React App. 
 - It can just be the standard "Hello World" boilerplate.
 - When you deploy your app to Netlify, Netlify will assume your React project is at the root of your repository. If it's not, you can still deploy but it'll take extra configuration. Have a google for how you can have the Create React App command not initialise the project in a subfolder (as it normally does).

3. Get it deployed to Netlify by following this documentation: https://docs.netlify.com/integrations/frameworks/create-react-app/#app.
 - You'll need to sign up for a Netlify account.
 - If you're using the repository within the SchoolOfCode organisation (set to public), in the "Import an existing project from a Git repository" screen, you'll need to use the dropdown to change from your personal Github account to the SchoolOfCode organisation. If you're using a forked version, you can leave this as your own Github username.
 - Ensure that it's configured for automatic deployment (so that every time you push to GitHub, Netlify automatically rebuilds and redeploys your app).
 - Once you deploy, you should be able to access your deployed app via a public URL that Netlify has given you.
 - Bonus: Change the public URL to something more meaningful/personalised.

4. Make a meaningful change to the app (commit and push to git) and ensure that automatic deployment has worked (troubleshoot if not).
 - You should see your changes appear at the public URL (after a few minutes).

5. Bonus tasks - keep exploring front end deployment! 
 - Research Netlify docs/ecosystem (for things like how to configure environment variables, etc.)
 - Research Netlify edge functions, analytics, forms, identity, etc.
 - Try a different way of deploying, such as using [Github pages](https://pages.github.com/) or [Vercel](https://vercel.com/docs). Compare and contrast with the experience on Netlify.
