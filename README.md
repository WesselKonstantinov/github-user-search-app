# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/github-user-search-app-using-react-swr-and-tailwind-css-ztmbhrVkbg](https://www.frontendmentor.io/solutions/github-user-search-app-using-react-swr-and-tailwind-css-ztmbhrVkbg)
- Live Site URL: [https://storied-bombolone-1b4729.netlify.app](https://storied-bombolone-1b4729.netlify.app)

## My process

### Built with

- [React](https://react.dev/) - JS library
- [SWR](https://swr.vercel.app/) - For data fetching
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

#### SWR

I learned a lot about working with SWR, a React hook library for data fetching. I decided to include it in this project, because I read it is the recommended way to fetch data on the client-side. With SWR, we can avoid the complexities of manually managing data fetching, as it handles caching, revalidation, focus tracking and refetching on intervals. It also promotes reusability of data by enabling us to create data hooks on top of SWR:

```js
function useUser(username) {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher,
    {
      errorRetryCount: 0,
      keepPreviousData: true,
    }
  );

  return {
    user: data,
    isLoading,
    error,
  };
}
```

#### Tailwind CSS

This was my first time working with Tailwind CSS, a utility-first CSS framework. It comes with pre-existing classes that we can apply directly in HTML, which means we don't have to come up with new class names. The styling is coupled with the markup, which makes it easier to create custom components without having to rely on vanilla CSS.

### Continued development

I'm planning on revisiting CSS Grid, as I've noticed I'm not 100% comfortable using it to build complex layouts. I mainly used it for the user profile section (the `<UserProfile />` component, which consists of `<UserIntro />`, `<UserStats />` and `<UserDetails />`), but I have a feeling my solution is a bit overcomplicated. Therefore, I would like to review the concepts about CSS Grid and look into subgrid in particular.

### Useful resources

- [Tailwind CSS docs](https://tailwindcss.com/docs/installation) - The documentation is an excellent resource for getting started with Tailwind CSS.
- [SWR docs](https://swr.vercel.app/docs/getting-started) - The documentation was very useful and helped me gain a better understanding of data fetching in a declarative way.

## Author

- Website - [Wessel Konstantinov](https://github.com/WesselKonstantinov)
- Frontend Mentor - [@WesselKonstantinov](https://www.frontendmentor.io/profile/WesselKonstantinov)
