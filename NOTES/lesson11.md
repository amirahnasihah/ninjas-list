# Next.js Tutorial #11 - Dynamic Routes (part 1)

click on one of these to go through to a details page for that ninja and see some information about them.
to do that we're gonna have to create a page for each one of these and a route for each one of those.

to talk about route parameters so the routes that we need to generate for these details pages are going to look something like this;
`/ninjas/id`
where this id is a changeable part of the route and it's going to be the id of the ninja or the person that we want to see the details of.
for example:

```
/ninjas/id

/ninjas/1
/ninjas/2
/ninjas/25
```

## understand a bit more

> what next js does for us in terms of static site generation??

once we've completed developing our application, next is going to generate a static site for us based on all of our page components. and it's at this point that next renders all of our page components into html files and javascript bundles that go with them for any interactivity on those pages.

so -- now we have a load of pages ready to deploy to the web a static site containing just these html pages and javascript.

when it comes to building our ninja details pages, it's going to need to generate an html file for each item of data that we have -- in our case that will be 10 different pages which is how many items we get back from the api endpoint that we're using.

so -- we don't need to make multiple components for them but next still needs to pre-render a separate page for every single ninja and assign each one its own route.

## details components: [id]

let's create the ninja details components that these pages are going to be based on.

make that details component inside the ninjas folder because want the route to be `/ninjas/id`.

> important

we need to tell that this `id` is going to be changeable.
and -- the way we do that is by putting square brackets around the name of the file.
`[id].js`

that tells next that this `[id].js` is a wrap parameter and it's going to be changeable.

> 💡 you can call it what you want (id, slug, hello, etc...)

```javascript
<Link href={"/ninjas/" + ninja.id} key={ninja.id}>
  <div className={styles.single}>
    <h3>{ninja.name}</h3>
  </div>
</Link>;
```

a link that is going to link to that page and we can pass through the id into the route because we have access to the id on the ninja object.
keep the key on the link but also now need an href equal to something dynamic and it's gonna be `{/ninjas/ + ninja.id}` because want to attach on the id of this particular ninja.
remember we have access to the id property so -- we can just concatenate.

