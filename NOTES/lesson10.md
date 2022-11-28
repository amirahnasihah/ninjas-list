# Next.js Tutorial #10 - Fetching Data (getStaticProps)

how to use static assets.
to make the website a bit more dynamic and to bring data into the mix for example it would be nice to fetch some data from an api endpoint which we can then show in one of our page components.

normally this data would come from a ready-made api endpoint that we might create or directly from a database like firebase.

## JSONplaceholder

ideally we don't want to just request this in the browser in the address bar. we want to request this data from our code.

in normal react applications, we might do this from a hook like use effect and that would make the request in the browser. but in our case Next.js we don't want to do that because remember the components are all pre-rendered by the time they reach the browser so -- ideally we want to fetch the data before they're rendered.

so the rendered components have data in the template and to do this we can use a special function provided to us by Next.

### Next.js -- getStaticProps

`export const getStaticProps = async () => {};`

the special function that we need to create provided to us by next goes up here and this function is called `getStaticProps`.
we need to export this and then const get static props equal to a function.
and inside the function is where we fetch the data and this is an async function.

this function right here runs at build time as our app is built and our components rendered at this point we can add a fetch request inside it to fetch any data we need for our component template.

now this function never runs in the browser only at build time so don't write any code here that you expect to run in the browser.

## fetch request

let's now create a fetch.

```javascript
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // end point is url to fetch the users | that returns a response object
  const data = await response.json(); // is array of obj of users

  return {
    props: { ninjas: data },
  };
};
```

to get the data from that url, have to use the json method to pass that json into something.
const data equal to await because this is asynchronous. this json method and now this is going to be an array of objects.

### important

[min 3:40](https://www.youtube.com/watch?v=zueyEdRZQlk&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=10)
> now have that data but then how do we actually use it??

```javascript
{ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link className={styles.single} href="#">
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
```

> what happens??

is this data is now available to us inside this component and it's attached to the props that we take in right here. so i could just destructure from that the ninjas property and that is all of this data.

> 💡 remember

```javascript
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
    </div>
  );
};
```

this -- the `getStaticProps` runs before the component is rendered fetches the data -- `const Ninjas return value` it waits for that data.
once we have it, it pumps into the component so that it can be rendered with that data inside it.

so -- now what we need to do is map through those ninjas and output them in the template. so curly braces because we're using dynamic javascript.
`{ninjas.map()}` to map through them and then we're taking each individual ninja as we cycle through those and fire a function for each one whereby we return some kind of template.
we'll do is a `<div>` and the root element inside this 