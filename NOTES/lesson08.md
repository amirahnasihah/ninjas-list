# Next.js Tutorial #8 - Redirecting Users

sometimes we need to redirect a user to a different page in our website without them clicking on a link. (auto redirect)

now this could be after a user submits a form for example when they submit it you might want to redirect them back to the homepage now in our case i want to do an automatic redirect from this 404 page so that the user lands on this page after three seconds it's going to auto redirect them back to the home page.

now to do this we'll first of all be using the `useEffect()` hook.
use effect is a react hook which fires a function when the component first mounts. so that means when a user first sees the 404 page in the browser...
////////////////////////


import use effect from the react library
`import { useEffect } from "react";`

import use router from the next library
`import { useRouter } from "next/router";`

useRouter hook gives us access to a method that we can use to redirect the user.
that's how we're actually going to do the redirect.

//
`useEffect(() => {}, []);`
first, have use effect and inside we pass in a function as an argument. this function when the component first mounts, when we first see in the browser.
as a second argument, going to pass in an empty array `[]`. this is the dependency array.
and what this does when it's empty is say, look only find this function once when the component first mounts and not again if any state changes.
so we just now find this function (first arg) once.
try; console.log('use effect function')

```js
const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 3000);
  }, []);
```

## set timeout method in javascript.
set timeout takes in a function as an argument which is gonna fire after a certain amount of time.
now the second argument after the function is the amount of time we want to wait before we find the function and that is in milliseconds.
right here in first argument, this is where we want to redirect the user. to do that we need this use router hook.

## use router hook.
initialize that hook and store the result from that hook inside a variable const.
two ways:
1. `router.go()` -- this method allows us to go back and forth through the history so for example -1 would take them back through history. it would be a bit like pressing this button up here a plus integer would take them forward.
2. `router.push()` -- the route that we want to redirect them to which in our case is just forward slash that means redirect them to the home page.